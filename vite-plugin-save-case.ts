import { Plugin } from 'vite';
import fs from 'fs';
import path from 'path';

export default function saveCasePlugin(): Plugin {
    return {
        name: 'save-case-plugin',
        configureServer(server) {
            server.middlewares.use('/api/save-case', async (req, res) => {
                if (req.method !== 'POST') {
                    res.statusCode = 405;
                    res.end(JSON.stringify({ error: 'Method not allowed' }));
                    return;
                }

                let body = '';
                req.on('data', chunk => {
                    body += chunk.toString();
                });

                req.on('end', () => {
                    try {
                        const { code } = JSON.parse(body);

                        if (!code || !code.trim()) {
                            res.statusCode = 400;
                            res.end(JSON.stringify({ error: 'No code provided' }));
                            return;
                        }

                        // Extract case ID and variable name
                        const idMatch = code.match(/id:\s*["']([^"']+)["']/);
                        const varMatch = code.match(/export const (\w+Case)/);

                        if (!idMatch || !varMatch) {
                            res.statusCode = 400;
                            res.end(JSON.stringify({
                                error: 'Invalid code format. Must have: export const xxxCase: RepairCase = { id: "xxx", ... }'
                            }));
                            return;
                        }

                        const caseId = idMatch[1];
                        const caseName = varMatch[1];

                        // File paths
                        const caseFilePath = path.join(process.cwd(), 'data', 'cases', `${caseId}.ts`);
                        const casesIndexPath = path.join(process.cwd(), 'data', 'cases.ts');

                        // 1. Save case file
                        fs.writeFileSync(caseFilePath, code.trim(), 'utf8');

                        // 2. Update data/cases.ts
                        let casesContent = fs.readFileSync(casesIndexPath, 'utf8');

                        // Add import if not exists
                        const importLine = `import { ${caseName} } from './cases/${caseId}';`;
                        if (!casesContent.includes(importLine)) {
                            const importRegex = /import\s+\{[^}]+\}\s+from\s+['"]\.\/cases\/[^'"]+['"]/g;
                            const lastImportMatch = casesContent.match(importRegex);
                            if (lastImportMatch) {
                                const lastImport = lastImportMatch[lastImportMatch.length - 1];
                                const insertPos = casesContent.indexOf(lastImport) + lastImport.length;
                                casesContent = casesContent.slice(0, insertPos) + '\n' + importLine + casesContent.slice(insertPos);
                            }
                        }

                        // Add to ALL_CASES if not exists
                        if (!casesContent.includes(caseName + ',') && !casesContent.includes(caseName + '\n')) {
                            const allCasesMatch = casesContent.match(/export const ALL_CASES:\s*RepairCase\[\]\s*=\s*\[([^\]]*)\]/s);
                            if (allCasesMatch) {
                                const currentCases = allCasesMatch[1];
                                const newCases = currentCases.trim() + (currentCases.trim().endsWith(',') ? '' : ',') + `\n  ${caseName},`;
                                casesContent = casesContent.replace(allCasesMatch[0], `export const ALL_CASES: RepairCase[] = [${newCases}\n]`);
                            }
                        }

                        // Save updated cases.ts
                        fs.writeFileSync(casesIndexPath, casesContent, 'utf8');

                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        res.end(JSON.stringify({
                            success: true,
                            caseId,
                            caseName,
                            message: `Đã lưu ${caseName} vào project!`
                        }));

                    } catch (error: any) {
                        console.error('Save case error:', error);
                        res.statusCode = 500;
                        res.end(JSON.stringify({ error: error.message }));
                    }
                });
            });
        }
    };
}
