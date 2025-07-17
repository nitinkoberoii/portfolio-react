import React from 'react';
import { ABOUT_ME_CONTENT } from './constants';
import { ABOUT_ME_EXPERIENCE } from './professional-info/experienceData';
import { skillCategories } from './professional-info/skillsData';
import { CERTIFICATES } from './professional-info/certificatesData';
import type { CertificateData } from './professional-info/certificatesData';

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

const SkillsBox: React.FC<{ name: string; images: { src: string; alt: string }[] }> = ({ name, images }) => (
  <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-lg p-5 mb-6 w-full">
    <div className="font-bold text-base text-slate-100 mb-3 text-left">{name}</div>
    <div className="flex flex-wrap gap-4">
      {images.map((img, idx) => (
        <div key={idx} className="flex flex-col items-center w-20">
          <img src={img.src} alt={img.alt} className="h-12 w-12 object-contain mb-1" />
          <span className="text-xs text-slate-300 text-center mt-1">{img.alt}</span>
        </div>
      ))}
    </div>
  </div>
);

interface CertificateBoxProps {
  cert: CertificateData;
  setPdfPath?: (path: string | null) => void;
}

const CertificateBox: React.FC<CertificateBoxProps> = ({ cert, setPdfPath }) => (
  <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-lg p-5 mb-6 w-full">
    <div className="flex justify-between items-start mb-2">
      <span className="font-bold text-base text-slate-100">{cert.org}</span>
      <div className="flex flex-col items-end">
        <span className="text-xs text-slate-400 font-mono">{cert.date}</span>
        <button
          className="mt-1 px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs"
          onClick={() => setPdfPath && setPdfPath(cert.pdfPath)}
        >
          Preview
        </button>
      </div>
    </div>
    <div className="overflow-y-auto scrollbar-hide text-slate-200 text-sm max-h-24 p-2 bg-slate-800 rounded">
      {cert.content}
    </div>
  </div>
);

export interface MainContentProps {
  selectedId: string;
  setPdfPath?: (path: string | null) => void;
}

const MainContent: React.FC<MainContentProps> = ({ selectedId, setPdfPath }) => {
  const content = (ABOUT_ME_CONTENT as Record<string, any>)[selectedId] || 'Select an item from the sidebar.';
  if (selectedId === 'experience' && Array.isArray(ABOUT_ME_EXPERIENCE)) {
    return (
      <div className="p-6 h-full w-full flex flex-col items-center">
        <div className="w-full max-w-2xl h-full overflow-y-auto pr-2 scrollbar-hide" style={{ maxHeight: '100%' }}>
          {ABOUT_ME_EXPERIENCE.map((exp, idx) => (
            <ExperienceBox key={idx} {...exp} />
          ))}
        </div>
      </div>
    );
  }
  if (selectedId === 'skills') {
    return (
      <div className="p-6 h-full w-full flex flex-col items-center">
        <div className="w-full max-w-2xl h-full overflow-y-auto pr-2 scrollbar-hide" style={{ maxHeight: '100%' }}>
          {skillCategories.map((cat, idx) => (
            <SkillsBox key={idx} name={cat.name} images={cat.images} />
          ))}
        </div>
      </div>
    );
  }
  if (selectedId === 'certificates') {
    return (
      <div className="p-6 h-full w-full flex flex-col items-center">
        <div className="w-full max-w-2xl h-full overflow-y-auto pr-2 scrollbar-hide" style={{ maxHeight: '100%' }}>
          {CERTIFICATES.map((cert, idx) => (
            <CertificateBox key={idx} cert={cert} setPdfPath={setPdfPath} />
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