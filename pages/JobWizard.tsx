
import React, { useState, useEffect } from 'react';
import { RepairCase, DiagnosisResult, RepairJob, Trial } from '../types';
import { createJob, saveJob } from '../utils/storage';
import { ArrowLeft, CheckCircle2, AlertTriangle, AlertCircle, Check, ChevronRight, XCircle } from 'lucide-react';

interface Props {
  repairCase: RepairCase;
  existingJob?: RepairJob;
  onBack: () => void;
}

const JobWizard: React.FC<Props> = ({ repairCase, existingJob, onBack }) => {
  // If existing job, start at 'diagnosis' (the list), otherwise 'checklist'
  const [step, setStep] = useState<'checklist' | 'diagnosis' | 'trial'>(existingJob ? 'diagnosis' : 'checklist');
  const [answers, setAnswers] = useState<Record<string, boolean>>(existingJob?.answers || {});
  const [diagnosis, setDiagnosis] = useState<DiagnosisResult | null>(null);
  const [job, setJob] = useState<RepairJob | null>(existingJob || null);
  
  // Track which trial is currently being viewed
  const [activeTrialId, setActiveTrialId] = useState<string | null>(null);

  // Initialize diagnosis
  useEffect(() => {
    // If we have an existing job, re-evaluate to get the diagnosis result
    if (existingJob) {
      if (repairCase.evaluate) {
        setDiagnosis(repairCase.evaluate(existingJob.answers));
      } else {
         // Fallback if no evaluate function (e.g. simple cases)
         setDiagnosis({
            level: 'green',
            title: 'Thông tin',
            message: 'Danh sách các cách xử lý',
            recommendedTrialIds: repairCase.trials.map(t => t.id)
         });
      }
    }
  }, [existingJob, repairCase]);

  const handleChecklistSubmit = () => {
    const result = repairCase.evaluate ? repairCase.evaluate(answers) : { 
        level: 'green', title: 'Thông tin', message: 'Bắt đầu sửa chữa', recommendedTrialIds: repairCase.trials.map(t => t.id) 
    } as DiagnosisResult;
    
    setDiagnosis(result);
    
    if (!job) {
      const newJob = createJob(repairCase.id, repairCase.label, repairCase.icon, result.recommendedTrialIds, answers);
      setJob(newJob);
    } else {
        // Update answers if re-doing checklist (though currently UI doesn't allow going back to checklist easily)
        saveJob({ ...job, answers, updatedAt: new Date().toISOString() });
    }
    setStep('diagnosis');
  };

  const openTrial = (trialId: string) => {
      setActiveTrialId(trialId);
      setStep('trial');
      
      // Update current trial in job for persistence (optional, but good for "continue where left off")
      if (job) {
          saveJob({ 
              ...job, 
              currentTrialId: trialId,
              updatedAt: new Date().toISOString() 
          });
      }
  }

  const handleTrialResult = (success: boolean) => {
    if (!job || !diagnosis || !activeTrialId) return;

    if (success) {
      saveJob({ ...job, status: 'DONE', updatedAt: new Date().toISOString() });
      onBack(); 
    } else {
      // If failed, just go back to the list (diagnosis step)
      const currentFailed = job.failedTrialIds || [];
      const newJob = { 
          ...job, 
          updatedAt: new Date().toISOString(),
          failedTrialIds: currentFailed.includes(activeTrialId) ? currentFailed : [...currentFailed, activeTrialId]
      };
      
      setJob(newJob);
      saveJob(newJob);
      
      setStep('diagnosis');
      setActiveTrialId(null);
    }
  };

  if (step === 'checklist') {
    return (
      <div className="bg-white min-h-screen p-4 pb-24">
        <button onClick={onBack} className="mb-6 text-gray-500"><ArrowLeft /></button>
        <h2 className="text-2xl font-bold mb-2">Kiểm tra nhanh</h2>
        <p className="text-gray-500 mb-6">Trả lời vài câu để chẩn đoán chính xác hơn.</p>

        <div className="space-y-6">
          {repairCase.checklist.map(q => (
            <div key={q.id}>
              <p className="font-medium text-gray-800 mb-3">{q.text}</p>
              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => setAnswers({...answers, [q.id]: false})}
                  className={`py-3 rounded-lg border font-bold transition-colors ${answers[q.id] === false ? 'bg-gray-800 text-white border-gray-800' : 'bg-gray-50 text-gray-600 border-gray-100 hover:bg-gray-100'}`}
                >KHÔNG</button>
                <button 
                  onClick={() => setAnswers({...answers, [q.id]: true})}
                  className={`py-3 rounded-lg border font-bold transition-colors ${answers[q.id] === true ? 'bg-gray-800 text-white border-gray-800' : 'bg-gray-50 text-gray-600 border-gray-100 hover:bg-gray-100'}`}
                >CÓ</button>
              </div>
            </div>
          ))}
        </div>

        <button onClick={handleChecklistSubmit} className="w-full mt-10 bg-primary text-white font-bold py-4 rounded-xl shadow-lg active:scale-[0.98] transition-transform">
          Phân tích
        </button>
      </div>
    );
  }

  if (step === 'diagnosis' && diagnosis) {
    const levelColor = diagnosis.level === 'green' ? 'text-green-600 bg-green-50 border-green-100' : 
                       diagnosis.level === 'yellow' ? 'text-yellow-600 bg-yellow-50 border-yellow-100' : 
                       'text-red-600 bg-red-50 border-red-100';
    const Icon = diagnosis.level === 'green' ? CheckCircle2 : AlertTriangle;

    return (
      <div className="bg-gray-50 min-h-screen p-4 pb-24">
        <button onClick={onBack} className="mb-4 text-gray-500"><ArrowLeft /></button>
        
        {/* Diagnosis Header */}
        <div className={`p-6 rounded-2xl border ${levelColor} mb-8 flex flex-col items-center text-center shadow-sm`}>
           <Icon size={48} className="mb-3" />
           <h2 className="text-xl font-bold mb-2">{diagnosis.title}</h2>
           <p className="text-sm opacity-90">{diagnosis.message}</p>
        </div>

        {/* Recommended Trials List */}
        <div className="mb-4">
            <h3 className="font-bold text-gray-900 text-lg mb-1">Các cách tự xử lý</h3>
            <p className="text-sm text-gray-500 mb-4">Thử theo thứ tự từ trên xuống dưới</p>
            
            <div className="space-y-3">
                {diagnosis.recommendedTrialIds.map((tId, index) => {
                    const trial = repairCase.trials.find(t => t.id === tId);
                    if (!trial) return null;
                    
                    const isCallPro = tId === 'trial-stop';
                    const isFailed = job?.failedTrialIds?.includes(tId);
                    
                    return (
                        <button 
                            key={tId} 
                            onClick={() => openTrial(tId)}
                            className={`w-full text-left p-4 rounded-xl border flex items-center gap-4 transition-all active:scale-[0.99] shadow-sm relative overflow-hidden
                                ${isFailed ? 'bg-gray-100 border-gray-200 opacity-70' : 
                                  isCallPro ? 'bg-blue-50 border-blue-100' : 'bg-white border-gray-200 hover:border-primary/30'}
                            `}
                        >
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0
                                ${isFailed ? 'bg-gray-300 text-white' : 
                                  isCallPro ? 'bg-blue-200 text-blue-700' : 'bg-gray-100 text-gray-500'}
                            `}>
                                {isCallPro ? <AlertCircle size={16}/> : isFailed ? <XCircle size={16}/> : index + 1}
                            </div>
                            
                            <div className="flex-1">
                                <div className={`font-bold ${isFailed ? 'text-gray-500 line-through' : isCallPro ? 'text-blue-800' : 'text-gray-800'}`}>
                                    {trial.title}
                                </div>
                                <div className={`text-xs mt-1 ${isFailed ? 'text-red-500 font-medium' : 'text-gray-500'}`}>
                                    {isFailed ? 'Đã thử nhưng không được' : trial.when}
                                </div>
                            </div>
                            
                            <ChevronRight size={20} className="text-gray-300" />
                        </button>
                    )
                })}
            </div>
        </div>
        
        <div className="mt-8 text-center">
             <button onClick={onBack} className="text-sm text-gray-400 underline">Để sau, quay lại trang chủ</button>
        </div>
      </div>
    );
  }

  if (step === 'trial' && activeTrialId) {
    const trial = repairCase.trials.find(t => t.id === activeTrialId);
    
    // Fallback if trial not found
    if (!trial) {
        setStep('diagnosis');
        return null;
    }

    const isStopTrial = activeTrialId === 'trial-stop';

    return (
      <div className="bg-white min-h-screen p-4 pb-24 flex flex-col">
        <div className="flex justify-between items-center mb-6 pt-2">
            <button onClick={() => setStep('diagnosis')} className="text-gray-500 flex items-center gap-1">
                <ArrowLeft size={20} /> <span className="text-sm font-medium">Quay lại danh sách</span>
            </button>
        </div>

        <div className="flex-1">
            {/* Trial Header */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{trial.title}</h2>
                <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold border border-blue-100">
                    {trial.when}
                </div>
            </div>

            {/* Steps */}
            <div className="space-y-6">
                {trial.steps.map((s, i) => (
                    <div key={i} className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 font-bold flex items-center justify-center shrink-0 mt-1">
                            {i+1}
                        </div>
                        <span className="text-gray-700 text-lg leading-relaxed pt-1">{s}</span>
                    </div>
                ))}
            </div>
            
            {isStopTrial && (
                <div className="mt-8 p-4 bg-yellow-50 text-yellow-800 rounded-xl text-sm border border-yellow-100">
                    <p>Các giải pháp tự sửa đã hết hoặc rủi ro cao. Bạn nên nhờ thợ chuyên nghiệp để đảm bảo an toàn.</p>
                </div>
            )}
        </div>

        {/* Actions */}
        <div className="mt-8 pt-4 border-t border-gray-100">
            {isStopTrial ? (
                 <button onClick={() => { saveJob({ ...job!, status: 'NEED_PRO', updatedAt: new Date().toISOString() }); onBack(); }} className="w-full py-4 rounded-xl bg-primary text-white font-bold shadow-lg shadow-blue-200">
                    Đồng ý tìm thợ
                 </button>
            ) : (
                <div className="grid grid-cols-2 gap-4">
                    <button 
                        onClick={() => handleTrialResult(false)} 
                        className="py-4 rounded-xl bg-gray-100 border border-gray-200 font-bold text-gray-600 active:scale-[0.98] transition-transform"
                    >
                        Không được
                    </button>
                    <button 
                        onClick={() => handleTrialResult(true)} 
                        className="py-4 rounded-xl bg-primary text-white font-bold shadow-lg shadow-blue-200 active:scale-[0.98] transition-transform flex items-center justify-center gap-2"
                    >
                        <Check size={20} />
                        Đã xong!
                    </button>
                </div>
            )}
        </div>
      </div>
    );
  }

  return null;
};

export default JobWizard;
