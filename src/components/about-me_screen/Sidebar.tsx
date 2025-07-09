import React, { useState } from 'react';
import { ABOUT_ME_SIDEBAR } from './constants';

// Placeholder icon component
const Icon = ({ name }: { name: string }) => (
  <span style={{ display: 'inline-block', width: 18, textAlign: 'center' }}>{/* icon placeholder */}📁</span>
);

function SidebarItem({ item, level, openMap, setOpenMap, selectedId, setSelectedId }: any) {
  const isBranch = item.type === 'branch' || item.children;
  const isOpen = openMap[item.id];
  const hasChildren = Array.isArray(item.children) && item.children.length > 0;

  const handleClick = () => {
    if (isBranch) {
      setOpenMap((prev: any) => ({ ...prev, [item.id]: !isOpen }));
    } else {
      setSelectedId(item.id);
    }
  };

  return (
    <div style={{ marginLeft: level * 14 }}>
      <div
        className={`flex items-center cursor-pointer py-1 px-2 rounded transition-colors ${selectedId === item.id ? 'bg-slate-800' : ''}`}
        onClick={handleClick}
      >
        {isBranch && (
          <span style={{ marginRight: 4 }}>{isOpen ? '▼' : '▶'}</span>
        )}
        <Icon name={item.icon} />
        <span className="ml-1 text-sm">{item.label}</span>
      </div>
      {isBranch && isOpen && hasChildren && (
        <div>
          {item.children.map((child: any) => (
            <SidebarItem
              key={child.id}
              item={child}
              level={level + 1}
              openMap={openMap}
              setOpenMap={setOpenMap}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const Sidebar: React.FC<{ selectedId: string; setSelectedId: (id: string) => void }> = ({ selectedId, setSelectedId }) => {
  const [openMap, setOpenMap] = useState<{ [id: string]: boolean }>({ 'personal-info': true });

  return (
    <div className="bg-slate-900 h-full w-56 p-2 border-r border-slate-800 overflow-y-auto">
      {ABOUT_ME_SIDEBAR.map((item) => (
        <SidebarItem
          key={item.id}
          item={item}
          level={0}
          openMap={openMap}
          setOpenMap={setOpenMap}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
      ))}
    </div>
  );
};

export default Sidebar; 