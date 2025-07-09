import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import SnippetPanel from './SnippetPanel';

const AboutMeScreen: React.FC = () => {
  const [selectedId, setSelectedId] = useState('bio');

  return (
    <div className="flex h-[calc(100vh-56px)] w-full bg-slate-950">
      <Sidebar selectedId={selectedId} setSelectedId={setSelectedId} />
      <div className="flex-1 flex flex-row">
        <div className="flex-1 border-r border-slate-800 bg-slate-950">
          <MainContent selectedId={selectedId} />
        </div>
        <div className="w-[420px] bg-slate-950">
          <SnippetPanel />
        </div>
      </div>
    </div>
  );
};

export default AboutMeScreen; 