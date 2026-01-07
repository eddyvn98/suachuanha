#!/usr/bin/env node

/**
 * Script tự động thêm case mới vào project
 * Cách dùng: npm run add-case
 * 
 * Script sẽ:
 * 1. Nhận code TypeScript từ stdin
 * 2. Lưu vào data/cases/[case-id].ts
 * 3. Tự động thêm import vào data/cases.ts
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let code = '';

rl.on('line', (line) => {
    code += line + '\n';
});

rl.on('close', () => {
    if (!code.trim()) {
        console.error('❌ Không có code nào được nhập!');
        console.error('Cách dùng: echo "code" | npm run add-case');
        process.exit(1);
    }

    // Extract case ID và tên biến
    const idMatch = code.match(/id:\s*["']([^"']+)["']/);
    const varMatch = code.match(/export const (\w+Case)/);

    if (!idMatch || !varMatch) {
        console.error('❌ Không tìm thấy ID hoặc tên biến export trong code!');
        console.error('Code phải có dạng: export const xxxCase: RepairCase = { id: "xxx", ... }');
        process.exit(1);
    }

    const caseId = idMatch[1];
    const caseName = varMatch[1];

    console.log(`\n✅ Phát hiện case: ${caseName} (ID: ${caseId})`);

    // Đường dẫn file
    const caseFilePath = path.join(__dirname, '..', 'data', 'cases', `${caseId}.ts`);
    const casesIndexPath = path.join(__dirname, '..', 'data', 'cases.ts');

    // 1. Lưu file case
    try {
        fs.writeFileSync(caseFilePath, code.trim(), 'utf8');
        console.log(`✅ Đã lưu: ${caseFilePath}`);
    } catch (err) {
        console.error(`❌ Lỗi lưu file: ${err.message}`);
        process.exit(1);
    }

    // 2. Cập nhật data/cases.ts
    let casesContent;
    try {
        casesContent = fs.readFileSync(casesIndexPath, 'utf8');
    } catch (err) {
        console.error(`❌ Lỗi đọc file cases.ts: ${err.message}`);
        process.exit(1);
    }

    // Kiểm tra import đã tồn tại chưa
    const importLine = `import { ${caseName} } from './cases/${caseId}';`;
    if (casesContent.includes(importLine)) {
        console.log(`⚠️  Import đã tồn tại trong cases.ts`);
    } else {
        // Tìm vị trí để thêm import (sau import cuối cùng)
        const lastImportMatch = casesContent.match(/import\s+{[^}]+}\s+from\s+['"]\.\\/cases\\/[^'"]+['"];/g);
        if (lastImportMatch) {
            const lastImport = lastImportMatch[lastImportMatch.length - 1];
            const insertPos = casesContent.indexOf(lastImport) + lastImport.length;
            casesContent = casesContent.slice(0, insertPos) + '\n' + importLine + casesContent.slice(insertPos);
            console.log(`✅ Đã thêm import vào cases.ts`);
        } else {
            console.error('⚠️  Không tìm thấy import nào trong cases.ts, vui lòng thêm thủ công:');
            console.log(`   ${importLine}`);
        }
    }

    // Kiểm tra case đã có trong ALL_CASES chưa
    if (casesContent.includes(caseName + ',') || casesContent.includes(caseName + '\n')) {
        console.log(`⚠️  ${caseName} đã có trong ALL_CASES`);
    } else {
        // Thêm vào mảng ALL_CASES
        const allCasesMatch = casesContent.match(/export const ALL_CASES:\s*RepairCase\[\]\s*=\s*\[([^\]]*)\]/s);
        if (allCasesMatch) {
            const currentCases = allCasesMatch[1];
            const newCases = currentCases.trim() + (currentCases.trim().endsWith(',') ? '' : ',') + `\n  ${caseName},`;
            casesContent = casesContent.replace(allCasesMatch[0], `export const ALL_CASES: RepairCase[] = [${newCases}\n]`);
            console.log(`✅ Đã thêm ${caseName} vào ALL_CASES`);
        } else {
            console.error('⚠️  Không tìm thấy mảng ALL_CASES, vui lòng thêm thủ công:');
            console.log(`   ${caseName},`);
        }
    }

    // Lưu lại file cases.ts
    try {
        fs.writeFileSync(casesIndexPath, casesContent, 'utf8');
        console.log(`✅ Đã cập nhật: ${casesIndexPath}`);
    } catch (err) {
        console.error(`❌ Lỗi lưu file cases.ts: ${err.message}`);
        process.exit(1);
    }

    console.log('\n🎉 Hoàn thành! Case đã được thêm vào project.\n');
    process.exit(0);
});
