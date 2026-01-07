
import React, { useState } from 'react';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import MyJobs from './pages/MyJobs';
import JobWizard from './pages/JobWizard';
import CaseImport from './pages/CaseImport';
import { RepairCase, RepairJob } from './types';
import { ALL_CASES } from './data/cases';
import { getCustomCases } from './utils/storage';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedCase, setSelectedCase] = useState<RepairCase | null>(null);
  const [activeJob, setActiveJob] = useState<RepairJob | null>(null);

  // Helper to resolve case data (from static or custom)
  const getCaseById = (id: string) => {
    return ALL_CASES.find(c => c.id === id) || getCustomCases().find(c => c.id === id);
  }

  // -- Navigation Logic --
  
  // 1. Wizard Mode (Full Screen)
  if (selectedCase || activeJob) {
    const repairCase = selectedCase || getCaseById(activeJob?.caseId || '');
    
    if (!repairCase) {
        // Fallback if case not found (e.g. deleted custom case)
        setActiveJob(null);
        setSelectedCase(null);
        return <div className="p-4 text-center mt-20">Không tìm thấy dữ liệu vấn đề.</div>; 
    }

    return (
        <div className="max-w-[480px] mx-auto bg-gray-50 min-h-screen shadow-2xl relative overflow-hidden">
            <JobWizard 
                repairCase={repairCase}
                existingJob={activeJob || undefined}
                onBack={() => { setSelectedCase(null); setActiveJob(null); }}
            />
        </div>
    );
  }

  // 2. Import View (Full Screen)
  if (activeTab === 'import') {
      return (
        <div className="bg-[#f0f2f5] min-h-screen font-sans flex justify-center">
            <div className="w-full max-w-[480px] bg-white min-h-screen shadow-2xl relative">
                <CaseImport onBack={() => setActiveTab('info')} />
            </div>
        </div>
      );
  }

  // 3. Tab Mode
  return (
    <div className="bg-[#f0f2f5] min-h-screen font-sans flex justify-center">
      <div className="w-full max-w-[480px] bg-white min-h-screen shadow-2xl relative">
        
        {/* Content Area */}
        <div className="h-full overflow-y-auto custom-scrollbar">
            {activeTab === 'home' && <Home onSelectCase={setSelectedCase} onSelectJob={setActiveJob} />}
            {activeTab === 'my-jobs' && <MyJobs onSelectJob={setActiveJob} />}
            {activeTab === 'ask' && (
                <div className="p-8 text-center pt-20">
                    <div className="text-6xl mb-4">👷</div>
                    <h2 className="text-xl font-bold mb-2">Kết nối thợ</h2>
                    <p className="text-gray-500 text-sm">Tính năng đang phát triển.</p>
                </div>
            )}
            {activeTab === 'info' && (
                <div className="p-8 text-center pt-20">
                    <h2 className="text-xl font-bold mb-2">Về ứng dụng</h2>
                    <p className="text-gray-500 text-sm mb-8">Phiên bản 2.1 (Import Supported)</p>
                    
                    <button 
                        onClick={() => setActiveTab('import')}
                        className="bg-blue-50 text-blue-600 px-6 py-3 rounded-lg font-bold border border-blue-100"
                    >
                        Tools: Import Case từ GPT
                    </button>
                </div>
            )}
        </div>

        <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
};

export default App;
