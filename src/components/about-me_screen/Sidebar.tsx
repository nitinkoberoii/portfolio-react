import React, { useState } from 'react';
import { ABOUT_ME_SIDEBAR } from './constants';
import consoleIcon from '../../assets/console.png';
import bulbIcon from '../../assets/bulb.png';
import hobbyIcon from '../../assets/hobby.png';
import collapseIcon from '../../assets/collapse.png';
import expandIcon from '../../assets/expand.png';
import folderIcon from '../../assets/folder.png';
import markdownIcon from '../../assets/markdown.png';

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
        className={`flex items-center cursor-pointer py-1 px-2 rounded transition-colors ${selectedId === item.id ? 'bg-slate-950' : ''}`}
        onClick={handleClick}
      >
        {isBranch && (
          <span style={{ marginRight: 4 }}>
            <img
              src={isOpen ? collapseIcon : expandIcon}
              alt={isOpen ? 'Collapse' : 'Expand'}
              style={{ width: 18, height: 18, verticalAlign: 'middle', filter: 'brightness(0.8)' }}
            />
          </span>
        )}
        {/* Icon logic: folder.png for branch, markdown.png for leaf */}
        <img
          src={isBranch ? folderIcon : markdownIcon}
          alt={isBranch ? 'Folder' : 'Markdown'}
          style={{ width: 18, height: 18, marginRight: 4, verticalAlign: 'middle', filter: 'brightness(0.95)' }}
        />
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

const ICONS = [
  { key: 'console', src: consoleIcon, alt: 'console' },
  { key: 'bulb', src: bulbIcon, alt: 'bulb' },
  { key: 'hobby', src: hobbyIcon, alt: 'hobby' },
];

const VerticalIconBar = ({ activeIcon, setActiveIcon }: { activeIcon: string; setActiveIcon: (key: string) => void }) => (
  <div className="flex flex-col items-center py-4 gap-4 bg-slate-900 border-r border-slate-800 w-12 h-full">
    {ICONS.map(icon => (
      <img
        key={icon.key}
        src={icon.src}
        alt={icon.alt}
        className="w-6 h-6 cursor-pointer transition"
        style={{
          filter: icon.key === activeIcon ? 'brightness(0) saturate(0) invert(1)' : 'opacity(0.8)',
        }}
        onClick={() => setActiveIcon(icon.key)}
      />
    ))}
  </div>
);

const getSidebarItemsForIcon = (icon: string) => {
  if (icon === 'console') {
    return ABOUT_ME_SIDEBAR.filter(item => item.id === 'professional-info');
  }
  if (icon === 'bulb') {
    // Return personal-info and contacts, with a divider between them
    return ABOUT_ME_SIDEBAR.filter(item => item.id === 'personal-info' || item.id === 'contacts');
  }
  if (icon === 'hobby') {
    return ABOUT_ME_SIDEBAR.filter(item => item.id === 'hobbies');
  }
  return ABOUT_ME_SIDEBAR;
};

const Sidebar: React.FC<{ selectedId: string; setSelectedId: (id: string) => void }> = ({ selectedId, setSelectedId }) => {
  const [openMap, setOpenMap] = useState<{ [id: string]: boolean }>({ 'personal-info': true });
  const [activeIcon, setActiveIcon] = useState<string>('console');

  return (
    <div className="flex h-full">
      <VerticalIconBar activeIcon={activeIcon} setActiveIcon={setActiveIcon} />
      <div className="bg-slate-900 h-full w-56 p-2 border-r border-slate-800 overflow-y-auto">
        {activeIcon === 'bulb' ? (
          <>
            <SidebarItem
              key={ABOUT_ME_SIDEBAR.find(i => i.id === 'personal-info')?.id}
              item={ABOUT_ME_SIDEBAR.find(i => i.id === 'personal-info')}
              level={0}
              openMap={openMap}
              setOpenMap={setOpenMap}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
            />
            <hr className="my-2 border-slate-700" />
            <SidebarItem
              key={ABOUT_ME_SIDEBAR.find(i => i.id === 'contacts')?.id}
              item={ABOUT_ME_SIDEBAR.find(i => i.id === 'contacts')}
              level={0}
              openMap={openMap}
              setOpenMap={setOpenMap}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
            />
          </>
        ) : (
          getSidebarItemsForIcon(activeIcon).map((item) => (
            <SidebarItem
              key={item.id}
              item={item}
              level={0}
              openMap={openMap}
              setOpenMap={setOpenMap}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Sidebar; 