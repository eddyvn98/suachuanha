import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Loader2, Copy, FolderPlus, Download, FileJson, Check, AlertTriangle, CheckCircle, FileCode } from 'lucide-react';
import { saveCustomCase, getCustomCases } from '../utils/storage';
import { ALL_CASES } from '../data/cases';
import { RepairCase } from '../types';
import { GoogleGenAI } from "@google/genai";
import { toast } from '../components/Toast'; // Assuming Toast component usage or fallback

interface Props {
  onBack: () => void;
}

const CaseImport: React.FC<Props> = ({ onBack }) => {
  const [code, setCode] = useState('');
  const [prompt, setPrompt] = useState('');
  const [caseId, setCaseId] = useState('');
  const [caseName, setCaseName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError("Vui lòng nhập mô tả vấn đề để AI tạo nội dung.");
      return;
    }
    setIsGenerating(true);
    setError(null);
    setSuccess(null);
    setCode('');
    setCaseId('');

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

      const existingIds = [...ALL_CASES, ...getCustomCases()].map(c => c.id).join(', ');

      const systemPrompt = `
        Bạn là chuyên gia kỹ thuật nhà cửa và lập trình viên TypeScript.
        Nhiệm vụ: Tạo nội dung file .ts hoàn chỉnh cho một 'RepairCase' dựa trên vấn đề: "${prompt}".

        YÊU CẦU QUAN TRỌNG:
        1. Trả về đúng định dạng file TypeScript (có import, export).
        2. KHÔNG dùng Markdown (\`\`\`typescript), chỉ trả về code thuần.
        3. ID phải là kebab-case (vd: may-giat-keu). Tránh trùng: [${existingIds}]
        4. Tên biến export phải là camelCase và kết thúc bằng 'Case' (vd: mayGiatKeuCase).
        5. **CATEGORY PHẢI DÙNG TIẾNG ANH** (lowercase): faucet, sink, toilet, outlet, switch, door, window, stove, etc. Nếu chưa có category phù hợp, tạo mới bằng tiếng Anh (vd: washing-machine, air-conditioner).

        CẤU TRÚC MẪU:
        
        import { RepairCase } from '../../types';

        export const [camelCaseName]Case: RepairCase = {
          id: "kebab-case-id",
          area: "...", // living-bedroom | kitchen | water | electric | outdoor | general | structure | door-window | floor
          category: "...", 
          label: "...", 
          icon: "...", // 1 Emoji
          description: "...",
          
          checklist: [
            { id: "qc-1", text: "..." },
            { id: "qc-2", text: "..." }
          ],

          evaluate: (answers) => {
            if (answers["qc-1"]) {
              return {
                level: "yellow",
                title: "...",
                message: "...",
                recommendedTrialIds: ["trial-1", "trial-stop"]
              };
            }
            return {
              level: "green",
              title: "...",
              message: "...",
              recommendedTrialIds: ["trial-1"]
            };
          },

          trials: [
            {
              id: "trial-1",
              title: "...",
              when: "...",
              steps: ["...", "..."]
            },
            {
              id: "trial-stop",
              title: "Dừng và nhờ thợ",
              when: "Khi thất bại",
              steps: ["Dùng chức năng Nhờ hỗ trợ"]
            }
          ],

          meta: { allowSkipChecklist: true, createdBy: "ai", version: 1 }
        };
        `;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: systemPrompt
      });

      let cleanCode = response.text || '';
      // Xóa markdown block
      cleanCode = cleanCode.replace(/```typescript/g, '').replace(/```javascript/g, '').replace(/```/g, '').trim();

      // Extract ID and Var Name for convenience
      const idMatch = cleanCode.match(/id:\s*["']([^"']+)["']/);
      const varMatch = cleanCode.match(/export const (\w+)Case/);

      if (idMatch) setCaseId(idMatch[1]);
      if (varMatch) setCaseName(varMatch[1] + 'Case');

      setCode(cleanCode);
      setSuccess("Đã tạo code xong! Bạn có thể tải file hoặc test ngay.");
    } catch (err: any) {
      console.error(err);
      setError("Lỗi: " + (err.message || "Vui lòng thử lại."));
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = () => {
    if (!code || !caseId) return;

    const blob = new Blob([code], { type: 'text/typescript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${caseId}.ts`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setSuccess(`Đã tải ${caseId}.ts! Hãy lưu vào folder 'data/cases/'.`);
  };

  const handleCopyImportLine = () => {
    if (!caseName || !caseId) return;
    const line = `import { ${caseName} } from './cases/${caseId}';\n// Thêm ${caseName} vào mảng ALL_CASES`;
    navigator.clipboard.writeText(line);
    setSuccess("Đã copy dòng import! Paste vào file 'data/cases.ts'.");
  };

  const handleAutoSave = async () => {
    if (!code || !caseId) return;

    setError(null);
    setSuccess(null);
    setIsGenerating(true);

    try {
      const response = await fetch('/api/save-case', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Lỗi khi lưu file');
      }

      setSuccess(`🎉 ${data.message} Refresh trang để thấy case mới!`);
    } catch (err: any) {
      setError('Lỗi lưu file: ' + err.message);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleImportToLocalStorage = () => {
    setError(null);
    setSuccess(null);

    if (!code.trim()) return;

    try {
      // 1. Xóa import
      let executableCode = code.replace(/import\s+.*?;\n?/g, '');
      // 2. Xóa type annotation
      executableCode = executableCode.replace(/:\s*RepairCase/g, '');
      // 3. Lấy object
      const equalSignIndex = executableCode.indexOf('=');
      if (equalSignIndex === -1) throw new Error("Lỗi format code");
      executableCode = executableCode.substring(equalSignIndex + 1).trim();
      executableCode = executableCode.replace(/;\s*$/, '');

      // 4. Eval
      // eslint-disable-next-line
      const caseObj = new Function('return ' + executableCode)();

      if (!caseObj.id || !caseObj.trials) throw new Error("Dữ liệu thiếu");

      // Check duplicates
      const isSystemCase = ALL_CASES.some(c => c.id === caseObj.id);
      if (isSystemCase) {
        throw new Error(`ID "${caseObj.id}" đã trùng với hệ thống.`);
      }

      saveCustomCase(caseObj as RepairCase);
      setSuccess(`Đã nhập "${caseObj.label}" vào bộ nhớ tạm để test!`);

    } catch (err: any) {
      setError("Lỗi xử lý: " + err.message);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-white px-4 py-4 border-b border-gray-200 sticky top-0 z-10 flex items-center gap-3 shadow-sm">
        <button onClick={onBack} className="text-gray-500 hover:bg-gray-100 p-2 rounded-full -ml-2">
          <ArrowLeft size={24} />
        </button>
        <div>
          <h1 className="text-lg font-bold text-gray-900">AI Generator</h1>
          <p className="text-xs text-gray-500">Tạo case sửa chữa tự động</p>
        </div>
      </div>

      <div className="p-4 pb-32 flex-1 overflow-y-auto">

        {/* Input Section */}
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-4">
          <div className="flex items-center gap-2 mb-3 text-primary">
            <Sparkles size={18} />
            <label className="font-bold text-sm">Mô tả vấn đề</label>
          </div>
          <div className="flex gap-2">
            <input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
              placeholder="VD: Máy giặt rung lắc mạnh..."
              className="flex-1 px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            />
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="bg-primary text-white px-4 py-2 rounded-xl font-bold text-sm shadow-md active:scale-95 transition-transform flex items-center justify-center min-w-[60px]"
            >
              {isGenerating ? <Loader2 size={20} className="animate-spin" /> : <ArrowLeft size={20} className="rotate-180" />}
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-50 text-red-600 rounded-xl border border-red-100 flex items-start gap-3 text-sm animate-fade-in">
            <AlertTriangle size={20} className="shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="mb-4 p-4 bg-green-50 text-green-700 rounded-xl border border-green-100 flex items-start gap-3 text-sm animate-fade-in">
            <CheckCircle size={20} className="shrink-0 mt-0.5" />
            <span>{success}</span>
          </div>
        )}

        {/* Code Preview */}
        <div className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg border border-gray-800 flex flex-col mb-4">
          <div className="bg-[#2d2d2d] px-4 py-2 flex justify-between items-center border-b border-gray-700">
            <div className="flex gap-2 items-center">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-xs text-gray-400 font-mono">{caseId ? `${caseId}.ts` : 'untitled.ts'}</span>
            </div>
            <button
              onClick={() => { navigator.clipboard.writeText(code); setSuccess("Đã copy code!"); }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Copy size={14} />
            </button>
          </div>
          <textarea
            value={code}
            readOnly
            placeholder="// Code sẽ hiện ở đây..."
            className="w-full h-64 p-4 bg-[#1e1e1e] text-gray-300 font-mono text-xs outline-none resize-none leading-relaxed"
            spellCheck={false}
          />
        </div>

        {/* Actions Grid */}
        {code && (
          <div className="grid grid-cols-1 gap-4 animate-fade-in">

            {/* Step 1: Test */}
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-blue-100 text-blue-700 text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">1</span>
                <h3 className="font-bold text-gray-800">Dùng thử (Preview)</h3>
              </div>
              <button
                onClick={handleImportToLocalStorage}
                className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors text-sm"
              >
                <Sparkles size={16} />
                Nhập vào App để test
              </button>
              <p className="text-xs text-gray-500 mt-2 text-center">Lưu tạm vào trình duyệt, mất khi xóa cache.</p>
            </div>

            {/* Step 2: Save Permanent */}
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-blue-600 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">2</span>
                <h3 className="font-bold text-blue-900">Lưu vĩnh viễn</h3>
              </div>

              <div className="space-y-3">
                {/* Auto Save Button - NEW! */}
                <button
                  onClick={handleAutoSave}
                  disabled={isGenerating}
                  className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold flex items-center justify-center gap-2 transition-colors shadow-md active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Đang lưu...
                    </>
                  ) : (
                    <>
                      <Check size={18} />
                      ✨ Lưu vĩnh viễn tự động
                    </>
                  )}
                </button>
                <p className="text-xs text-green-700 text-center font-semibold">
                  Tự động lưu file và đăng ký vào project!
                </p>

                <div className="border-t border-blue-200 my-2"></div>
                <p className="text-xs text-blue-600 text-center italic">Hoặc làm thủ công:</p>

                <button
                  onClick={handleDownload}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold flex items-center justify-center gap-2 transition-colors shadow-md active:scale-[0.98]"
                >
                  <Download size={18} />
                  Tải file {caseId || 'code'}.ts
                </button>
                <p className="text-xs text-blue-700 text-center">
                  Lưu file này vào folder: <code>data/cases/</code>
                </p>

                <div className="border-t border-blue-200 my-2"></div>

                <button
                  onClick={handleCopyImportLine}
                  className="w-full py-3 bg-white border border-blue-200 text-blue-700 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors text-sm"
                >
                  <FileCode size={16} />
                  Copy dòng đăng ký
                </button>
                <p className="text-xs text-blue-700 text-center">
                  Paste vào file <code>data/cases.ts</code> để kích hoạt.
                </p>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default CaseImport;