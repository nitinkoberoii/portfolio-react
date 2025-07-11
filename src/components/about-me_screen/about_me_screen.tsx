import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import SnippetPanel from './SnippetPanel';

const AboutMeScreen: React.FC = () => {
  const [selectedId, setSelectedId] = useState('bio');

  return (
    <div className="flex h-[calc(100vh-56px)] w-full bg-[#181c24]"> {/* prototype navbar bg */}
      <Sidebar selectedId={selectedId} setSelectedId={setSelectedId} />
      <div className="flex-1 flex flex-row">
        <div className="flex-1 border-r border-[#23283a] bg-[#202432]"> {/* main content bg */}
          <MainContent selectedId={selectedId} />
        </div>
        <div className="w-[550px] bg-[#181c24]"> {/* right panel bg matches navbar */}
          <SnippetPanel />
        </div>
      </div>
    </div>
  );
};

export default AboutMeScreen; 