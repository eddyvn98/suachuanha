
import React, { useState, useEffect } from 'react';
import { Search, ArrowLeft, ChevronRight, Utensils, Bath, Sofa, Clock, PlayCircle, CheckCircle, AlertCircle } from 'lucide-react';
import { ALL_CASES } from '../data/cases';
import { RepairCase, RepairJob } from '../types';
import { getCustomCases, getJobs } from '../utils/storage';

interface Props {
  onSelectCase: (c: RepairCase) => void;
  onSelectJob?: (j: RepairJob) => void;
}

type ViewState = 'home' | 'method' | 'room' | 'structure-list' | 'system-list' | 'device' | 'outdoor-location' | 'issue';

// Mapping for pretty labels and icons. 
const CATEGORY_META: Record<string, { label: string; icon: string }> = {
    sink: { label: 'Bồn rửa', icon: '🚰' },
    faucet: { label: 'Vòi nước', icon: '🚰' },
    stove: { label: 'Bếp', icon: '🔥' },
    toilet: { label: 'Bồn cầu', icon: '🚽' },
    shower: { label: 'Vòi sen', icon: '🚿' },
    'floor-drain': { label: 'Cống sàn', icon: '🕳️' },
    fridge: { label: 'Tủ lạnh', icon: '❄️' },
    'air-conditioner': { label: 'Máy lạnh', icon: '❄️' },
    fan: { label: 'Quạt', icon: '💨' },
    light: { label: 'Đèn', icon: '💡' },
    socket: { label: 'Ổ cắm', icon: '🔌' },
    wall: { label: 'Tường', icon: '🧱' },
    ceiling: { label: 'Trần', icon: '☁️' },
    floor: { label: 'Sàn', icon: '🟫' },
    roof: { label: 'Mái', icon: '🏠' },
    window: { label: 'Cửa sổ', icon: '🪟' },
    door: { label: 'Cửa', icon: '🚪' },
    drain: { label: 'Cống/Thoát nước', icon: '🕳️' },
    smell: { label: 'Mùi lạ', icon: '💨' },
    sound: { label: 'Tiếng ồn', icon: '🔊' },
    general: { label: 'Vấn đề chung', icon: '❓' },
    switch: { label: 'Công tắc', icon: '🔘' },
    breaker: { label: 'Cầu dao (CB)', icon: '⚡' },
};

const Home: React.FC<Props> = ({ onSelectCase, onSelectJob }) => {
  const [viewState, setViewState] = useState<ViewState>('home');
  const [history, setHistory] = useState<ViewState[]>([]);
  const [filters, setFilters] = useState({ area: '', method: '', room: '', device: '', category: '' });
  const [search, setSearch] = useState('');
  const [mergedCases, setMergedCases] = useState<RepairCase[]>(ALL_CASES);
  const [recentJobs, setRecentJobs] = useState<RepairJob[]>([]);

  // Load data on mount
  useEffect(() => {
    const custom = getCustomCases();
    setMergedCases([...ALL_CASES, ...custom]);
    
    // Load recent jobs
    const jobs = getJobs();
    // Sort by update time desc and take top 2
    const sorted = jobs.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()).slice(0, 2);
    setRecentJobs(sorted);
  }, []);

  const navigate = (next: ViewState) => {
    setHistory([...history, viewState]);
    setViewState(next);
  };

  const back = () => {
    const prev = history.pop();
    if (prev) {
      setViewState(prev);
      setHistory([...history]);
    }
  };

  // --- Filter Helpers ---
  const handleArea = (area: string) => { 
      setFilters({ ...filters, area, device: '', category: '' }); 
      if (area === 'outdoor') {
          navigate('outdoor-location');
      } else {
          navigate('method'); 
      }
  };

  const handleOutdoorLocation = (category: string) => {
      setFilters({ ...filters, device: category });
      navigate('issue');
  };

  const handleMethod = (method: string) => { 
      setFilters({ ...filters, method }); 
      if(method === 'room') navigate('room');
      else if(method === 'structure') navigate('structure-list');
      else if(method === 'system') navigate('system-list');
  };
  
  const handleRoom = (room: string) => { setFilters({ ...filters, room }); navigate('device'); };
  const handleDevice = (device: string) => { setFilters({ ...filters, device }); navigate('issue'); };
  
  // Specific Category Handler for System/Structure views
  const handleCategory = (category: string) => { setFilters({ ...filters, device: category }); navigate('issue'); };

  // --- Data Filtering for Issues ---
  const getIssues = () => {
    return mergedCases.filter(c => {
      // Outdoor Logic
      if (filters.area === 'outdoor') {
          if (c.area !== 'outdoor') return false;
          if (filters.device && c.category !== filters.device) return false;
          return true;
      }

      // Indoor Logic
      if (c.area === 'outdoor') return false;

      // Filter by device/category for Indoor
      if (filters.device) {
          return c.category === filters.device;
      }
      
      return true;
    });
  };

  // --- Helper to find categories available in a specific room ---
  const getCategoriesForRoom = (room: string) => {
      let roomCategories = new Set<string>();
      
      mergedCases.forEach(c => {
          let belongs = false;
          if (room === 'kitchen') {
              if (c.area === 'kitchen') belongs = true;
              if (['sink', 'faucet', 'stove', 'fridge', 'dishwasher', 'socket', 'smell', 'general'].includes(c.category)) belongs = true;
          } else if (room === 'wc') {
              if (['toilet', 'shower', 'sink', 'faucet', 'floor-drain', 'water-heater', 'smell'].includes(c.category)) belongs = true;
          } else if (room === 'living') {
              if (c.area === 'living-bedroom') belongs = true;
              if (['fan', 'air-conditioner', 'light', 'socket', 'switch', 'floor', 'wall', 'ceiling', 'door', 'window', 'sound', 'smell'].includes(c.category)) belongs = true;
          }
          if (belongs) roomCategories.add(c.category);
      });

      return mapCategories(roomCategories);
  };

  const getCategoriesForMethod = (method: string) => {
      let cats = new Set<string>();
      mergedCases.forEach(c => {
          let belongs = false;
          if (method === 'structure') {
              if (['wall', 'ceiling', 'floor', 'window', 'door', 'roof', 'structure'].includes(c.category)) belongs = true;
              if (c.area === 'structure') belongs = true;
          } else if (method === 'system') {
              if (['electric', 'water', 'internet', 'gas', 'smell', 'sound', 'general'].includes(c.area)) belongs = true;
              if (['socket', 'switch', 'breaker', 'pipe', 'faucet', 'drain', 'smell', 'sound', 'general'].includes(c.category)) belongs = true;
          }
          if (belongs) cats.add(c.category);
      });
      return mapCategories(cats);
  }

  const mapCategories = (catSet: Set<string>) => {
      return Array.from(catSet).map(catId => {
          const meta = CATEGORY_META[catId];
          if (meta) return { id: catId, ...meta };
          
          // Auto-discovery fallback
          const sampleCase = mergedCases.find(c => c.category === catId);
          return {
              id: catId,
              label: catId.charAt(0).toUpperCase() + catId.slice(1), 
              icon: sampleCase?.icon || '🔧'
          };
      }).sort((a,b) => a.label.localeCompare(b.label));
  }

  const renderHeader = (title: string, subtitle?: string) => (
    <div className="mb-6">
       {viewState !== 'home' && (
         <button onClick={back} className="mb-4 text-gray-500 hover:bg-gray-100 p-2 rounded-full -ml-2">
           <ArrowLeft size={24} />
         </button>
       )}
       <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
       {subtitle && <p className="text-gray-500 text-sm mt-1">{subtitle}</p>}
    </div>
  );

  const renderCard = (icon: React.ReactNode, title: string, onClick: () => void, colorClass = "bg-white") => (
    <button onClick={onClick} className={`w-full ${colorClass} p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4 active:scale-[0.98] transition-transform text-left`}>
       <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-2xl">{icon}</div>
       <span className="text-lg font-bold text-gray-800 flex-1">{title}</span>
       {viewState !== 'home' && <ChevronRight className="text-gray-300" />}
    </button>
  );

  const renderJobMiniCard = (job: RepairJob) => {
      const isDone = job.status === 'DONE';
      return (
          <button 
            key={job.id} 
            onClick={() => onSelectJob && onSelectJob(job)}
            className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl shadow-sm w-full active:scale-[0.98] transition-transform text-left"
          >
              <div className="text-xl">{job.caseIcon}</div>
              <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold text-gray-800 truncate">{job.caseLabel}</div>
                  <div className="text-xs text-gray-500 flex items-center gap-1">
                      {isDone ? <span className="text-green-600 flex items-center gap-1"><CheckCircle size={10}/> Hoàn thành</span> : 
                                <span className="text-blue-600 flex items-center gap-1"><PlayCircle size={10}/> Đang sửa</span>}
                      <span className="text-gray-300">•</span>
                      <span className="text-gray-400">{new Date(job.updatedAt).toLocaleDateString('vi-VN')}</span>
                  </div>
              </div>
              <ChevronRight size={16} className="text-gray-300" />
          </button>
      );
  }

  // --- Views ---
  if (viewState === 'home') {
    return (
      <div className="p-4">
        <div className="text-center py-6">
          <h1 className="text-2xl font-bold mb-2">Tự sửa chữa nhà</h1>
          <p className="text-gray-500 text-sm">Hướng dẫn từng bước, an toàn</p>
        </div>
        
        <div className="relative mb-6">
            <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
            <input 
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary outline-none shadow-sm" 
                placeholder="Tìm kiếm vấn đề..."
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
             {search && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 z-20 max-h-60 overflow-y-auto">
                  {mergedCases.filter(c => c.label.toLowerCase().includes(search.toLowerCase())).map(c => (
                      <button key={c.id} onClick={() => onSelectCase(c)} className="w-full text-left p-3 border-b border-gray-50 flex items-center gap-3 hover:bg-gray-50">
                          <span className="text-xl">{c.icon}</span>
                          <div className="font-medium text-sm">{c.label}</div>
                      </button>
                  ))}
                  {mergedCases.filter(c => c.label.toLowerCase().includes(search.toLowerCase())).length === 0 && (
                      <div className="p-4 text-center text-gray-500 text-sm">Không tìm thấy kết quả</div>
                  )}
              </div>
          )}
        </div>

        {recentJobs.length > 0 && (
            <div className="mb-8 animate-fade-in">
                <div className="flex justify-between items-center mb-3 px-1">
                    <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Gần đây</h2>
                </div>
                <div className="space-y-2">
                    {recentJobs.map(renderJobMiniCard)}
                </div>
            </div>
        )}

        <h2 className="text-center text-gray-500 font-semibold text-sm mb-4">Vấn đề ở đâu?</h2>
        <div className="flex gap-4">
            <button onClick={() => handleArea('indoor')} className="flex-1 bg-white p-6 rounded-2xl border border-gray-200 flex flex-col items-center gap-3 shadow-sm active:scale-[0.98]">
                <span className="text-4xl">🏠</span>
                <span className="font-bold text-lg">Trong nhà</span>
            </button>
            <button onClick={() => handleArea('outdoor')} className="flex-1 bg-white p-6 rounded-2xl border border-gray-200 flex flex-col items-center gap-3 shadow-sm active:scale-[0.98]">
                <span className="text-4xl">⛈️</span>
                <span className="font-bold text-lg">Ngoài nhà</span>
            </button>
        </div>
      </div>
    );
  }

  if (viewState === 'method') {
      return (
          <div className="p-4">
              {renderHeader("Bạn muốn tìm theo cách nào?", "Chọn cách bạn muốn tìm")}
              <div className="space-y-4">
                  {renderCard("🚪", "Theo phòng", () => handleMethod('room'))}
                  {renderCard("🧱", "Theo cấu kiện (Tường/Sàn)", () => handleMethod('structure'))}
                  {renderCard("🔧", "Theo hệ thống (Điện/Nước/Mùi)", () => handleMethod('system'))}
              </div>
          </div>
      )
  }

  if (viewState === 'room') {
      return (
          <div className="p-4">
              {renderHeader("Phòng nào?", "Chọn phòng bạn đang ở")}
              <div className="space-y-4">
                  {renderCard(<Utensils className="text-yellow-600"/>, "Bếp", () => handleRoom('kitchen'))}
                  {renderCard(<Bath className="text-blue-500"/>, "Nhà tắm / WC", () => handleRoom('wc'))}
                  {renderCard(<Sofa className="text-green-600"/>, "Phòng khách / Ngủ", () => handleRoom('living'))}
              </div>
          </div>
      )
  }

  if (viewState === 'device') {
      const devices = getCategoriesForRoom(filters.room);
      return (
          <div className="p-4">
              {renderHeader("Thiết bị nào?", "Chọn thiết bị bạn đang nhìn thấy")}
              <div className="space-y-4">
                  {devices.length > 0 ? devices.map(d => 
                      renderCard(d.icon, d.label, () => handleDevice(d.id))
                  ) : (
                      <div className="text-center text-gray-500 py-10">Chưa có thiết bị nào trong mục này.</div>
                  )}
              </div>
          </div>
      )
  }

  if (viewState === 'structure-list') {
      const items = getCategoriesForMethod('structure');
      return (
          <div className="p-4">
              {renderHeader("Cấu kiện nào?", "Chọn thành phần ngôi nhà")}
              <div className="space-y-4">
                  {items.length > 0 ? items.map(d => 
                      renderCard(d.icon, d.label, () => handleCategory(d.id))
                  ) : (
                      <div className="text-center text-gray-500 py-10">Chưa có dữ liệu.</div>
                  )}
              </div>
          </div>
      )
  }

  if (viewState === 'system-list') {
      const items = getCategoriesForMethod('system');
      return (
          <div className="p-4">
              {renderHeader("Hệ thống nào?", "Chọn hệ thống gặp sự cố")}
              <div className="space-y-4">
                  {items.length > 0 ? items.map(d => 
                      renderCard(d.icon, d.label, () => handleCategory(d.id))
                  ) : (
                      <div className="text-center text-gray-500 py-10">Chưa có dữ liệu.</div>
                  )}
              </div>
          </div>
      )
  }

  if (viewState === 'outdoor-location') {
      return (
          <div className="p-4">
              {renderHeader("Ngoài nhà - Chỗ nào?", "Chọn vị trí bạn đang nhìn thấy")}
              <div className="space-y-4">
                  {renderCard("🏠", "Mái nhà", () => handleOutdoorLocation('roof'))}
                  {renderCard("🕳️", "Cống ngoài / Sân", () => handleOutdoorLocation('drain'))}
                  {renderCard("🧱", "Tường ngoài", () => handleOutdoorLocation('wall'))}
                  {renderCard("🚪", "Cổng / Hàng rào", () => handleOutdoorLocation('fence'))}
                  {renderCard("❓", "Khác", () => handleOutdoorLocation('other'))}
              </div>
          </div>
      )
  }

  if (viewState === 'issue') {
      const issues = getIssues();
      const pageTitle = filters.area === 'outdoor' ? "Vấn đề ngoài trời" : "Vấn đề gì?";
      return (
          <div className="p-4">
              {renderHeader(pageTitle, "Chọn vấn đề bạn đang gặp phải")}
              <div className="space-y-4">
                  {issues.length > 0 ? issues.map(c => (
                      <div key={c.id} onClick={() => onSelectCase(c)} className="w-full bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4 active:scale-[0.98] transition-transform cursor-pointer">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-2xl">{c.icon}</div>
                        <div className="flex-1">
                            <div className="font-bold text-gray-800">{c.label}</div>
                            <div className="text-xs text-gray-500 mt-1 line-clamp-1">{c.description}</div>
                        </div>
                        <ChevronRight className="text-gray-300" />
                      </div>
                  )) : (
                      <div className="text-center text-gray-500 mt-10">
                          <p className="mb-2">Chưa có dữ liệu cho mục này.</p>
                          <p className="text-xs">Thử tạo Case mới bằng AI ở mục Info.</p>
                      </div>
                  )}
              </div>
          </div>
      )
  }

  return null;
};

export default Home;
