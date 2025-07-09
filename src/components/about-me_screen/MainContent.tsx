import React from 'react';
import { ABOUT_ME_CONTENT } from './constants';

const MainContent: React.FC<{ selectedId: string }> = ({ selectedId }) => {
  const content = (ABOUT_ME_CONTENT as Record<string, string>)[selectedId] || 'Select an item from the sidebar.';
  const isCode = content.trim().startsWith('/**') || content.includes('function') || content.includes('export');

  return (
    <div className="p-6 h-full overflow-y-auto">
      {isCode ? (
        <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 text-xs leading-6 font-mono whitespace-pre-wrap border border-slate-800 shadow-inner">
          {content}
        </pre>
      ) : (
        <div className="prose prose-invert max-w-none text-slate-200 text-sm whitespace-pre-line">
          {content}
        </div>
      )}
    </div>
  );
};

export default MainContent; 