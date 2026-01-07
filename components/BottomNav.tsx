
import React from 'react';
import { Home, Briefcase, Users, Info } from 'lucide-react';

interface Props {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const BottomNav: React.FC<Props> = ({ activeTab, setActiveTab }) => {
  const items = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'my-jobs', label: 'Việc của tôi', icon: Briefcase },
    { id: 'ask', label: 'Nhờ thợ', icon: Users },
    { id: 'info', label: 'Info', icon: Info },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 h-[60px] pb-safe z-50 flex justify-around items-center max-w-[480px] mx-auto">
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center justify-center w-full h-full ${isActive ? 'text-primary' : 'text-gray-400'}`}
          >
            <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
            <span className="text-[10px] font-medium mt-1">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default BottomNav;
