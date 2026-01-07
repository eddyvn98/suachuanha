
import React, { useEffect, useState } from 'react';
import { RepairJob } from '../types';
import { getJobs, deleteJob } from '../utils/storage';
import { Clock, Trash2, CheckCircle, XCircle, AlertCircle, PlayCircle } from 'lucide-react';

interface Props {
  onSelectJob: (job: RepairJob) => void;
}

const MyJobs: React.FC<Props> = ({ onSelectJob }) => {
  const [jobs, setJobs] = useState<RepairJob[]>([]);

  const load = () => setJobs(getJobs());
  useEffect(load, []);

  const handleDelete = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (confirm("Xóa việc này?")) {
      deleteJob(id);
      load();
    }
  };

  const statusMap = {
    'SELF_FIXING': { text: 'Đang sửa', color: 'text-blue-600 bg-blue-50', icon: PlayCircle },
    'NEED_PRO': { text: 'Cần thợ', color: 'text-orange-600 bg-orange-50', icon: AlertCircle },
    'DONE': { text: 'Hoàn thành', color: 'text-green-600 bg-green-50', icon: CheckCircle },
    'CANCELLED': { text: 'Đã hủy', color: 'text-gray-600 bg-gray-50', icon: XCircle },
  };

  const activeJobs = jobs.filter(j => ['SELF_FIXING', 'NEED_PRO'].includes(j.status));
  const historyJobs = jobs.filter(j => ['DONE', 'CANCELLED'].includes(j.status));

  const renderJobCard = (job: RepairJob) => {
      const StatusIcon = statusMap[job.status]?.icon || AlertCircle;
      return (
        <div key={job.id} onClick={() => onSelectJob(job)} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex gap-4 cursor-pointer active:scale-[0.99] transition-transform mb-3">
            <div className="text-3xl flex items-start pt-1">{job.caseIcon}</div>
            <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start gap-2">
                    <h3 className="font-bold text-gray-800 truncate">{job.caseLabel}</h3>
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-md whitespace-nowrap flex items-center gap-1 ${statusMap[job.status]?.color}`}>
                        <StatusIcon size={10} />
                        {statusMap[job.status]?.text}
                    </span>
                </div>
                <div className="text-xs text-gray-400 mt-2 flex items-center gap-3">
                    <span className="flex items-center gap-1"><Clock size={12}/> {new Date(job.updatedAt).toLocaleDateString('vi-VN')}</span>
                    {job.status === 'SELF_FIXING' && <span>Bước {job.currentStep + 1}</span>}
                </div>
            </div>
            <button onClick={(e) => handleDelete(e, job.id)} className="text-gray-300 hover:text-red-500 px-2 self-center">
                <Trash2 size={18} />
            </button>
        </div>
      );
  };

  return (
    <div className="p-4 pb-24">
      <h1 className="text-2xl font-bold mb-6 pt-4">Việc của tôi</h1>
      
      {jobs.length === 0 && (
          <div className="text-center text-gray-400 mt-20 flex flex-col items-center">
              <div className="text-6xl mb-4 opacity-20">📋</div>
              <p>Chưa có việc nào được tạo.</p>
          </div>
      )}

      {activeJobs.length > 0 && (
          <div className="mb-8">
              <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 ml-1">Đang thực hiện</h2>
              <div className="space-y-3">
                  {activeJobs.map(renderJobCard)}
              </div>
          </div>
      )}

      {historyJobs.length > 0 && (
          <div>
              <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 ml-1">Lịch sử</h2>
              <div className="space-y-3 opacity-90">
                  {historyJobs.map(renderJobCard)}
              </div>
          </div>
      )}
    </div>
  );
};

export default MyJobs;
