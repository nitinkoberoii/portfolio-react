import React from 'react';
import { ABOUT_ME_CONTENT, ABOUT_ME_EXPERIENCE } from './constants';

const ExperienceBox: React.FC<{
  role: string;
  company: string;
  duration: string;
  bullets: string[];
}> = ({ role, company, duration, bullets }) => (
  <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-lg p-5 mb-6">
    <div className="flex justify-between items-center mb-1">
      <span className="font-bold text-base text-slate-100">{role}</span>
      <span className="text-xs text-slate-400 font-mono">{duration}</span>
    </div>
    <div className="text-sm text-slate-300 mb-2 font-semibold text-left">{company}</div>
    <ul className="list-disc pl-5 text-slate-200 text-sm space-y-1 text-left">
      {bullets.map((b, i) => (
        <li key={i}>{b}</li>
      ))}
    </ul>
  </div>
);

const MainContent: React.FC<{ selectedId: string }> = ({ selectedId }) => {
  const content = (ABOUT_ME_CONTENT as Record<string, any>)[selectedId] || 'Select an item from the sidebar.';
  if (selectedId === 'experience' && Array.isArray(ABOUT_ME_EXPERIENCE)) {
    return (
      <div className="p-6 h-full w-full flex flex-col items-center">
        <div className="w-full max-w-2xl h-full overflow-y-auto pr-2" style={{ maxHeight: '100%' }}>
          {ABOUT_ME_EXPERIENCE.map((exp, idx) => (
            <ExperienceBox key={idx} {...exp} />
          ))}
        </div>
      </div>
    );
  }
  const isCode = typeof content === 'string' && (content.trim().startsWith('/**') || content.includes('function') || content.includes('export'));
  return (
    <div className="p-6 h-full w-full overflow-y-auto">
      {isCode ? (
        <pre className="text-slate-100 text-xs leading-6 font-mono whitespace-pre-wrap">
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