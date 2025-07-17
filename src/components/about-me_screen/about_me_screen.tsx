import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import SnippetPanel from './SnippetPanel';

const AboutMeScreen: React.FC = () => {
  const [selectedId, setSelectedId] = useState('bio');
  const [pdfPath, setPdfPath] = useState<string | null>(null);

  // Clear PDF preview when switching away from certificates
  const handleSetSelectedId = (id: string) => {
    setSelectedId(id);
    if (id !== 'certificates') setPdfPath(null);
  };

  return (
    <div className="flex h-[calc(100vh-56px)] w-full bg-[#181c24]"> {/* prototype navbar bg */}
      <Sidebar selectedId={selectedId} setSelectedId={handleSetSelectedId} />
      <div className="flex-1 flex flex-row">
        <div className="flex-1 border-r border-[#23283a] bg-[#202432]"> {/* main content bg */}
          <MainContent selectedId={selectedId} setPdfPath={setPdfPath} />
        </div>
        <div className="w-[550px] bg-[#181c24]"> {/* right panel bg matches navbar */}
          <SnippetPanel pdfPath={pdfPath} selectedId={selectedId} />
        </div>
      </div>
    </div>
  );
};

export default AboutMeScreen; 