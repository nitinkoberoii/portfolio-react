import React, { useState } from 'react';
import { ABOUT_ME_SNIPPETS } from './constants';
import { Highlight, themes } from 'prism-react-renderer';

export interface SnippetPanelProps {
  pdfPath?: string | null;
}

const SnippetPanel: React.FC<SnippetPanelProps> = ({ pdfPath }) => {
  const [openDetails, setOpenDetails] = useState<{ [id: string]: boolean }>({});
  const [stars, setStars] = useState<{ [id: string]: number }>(
    Object.fromEntries(ABOUT_ME_SNIPPETS.map(s => [s.id, s.stars]))
  );

  const handleToggleDetails = (id: string) => {
    setOpenDetails(prev => ({ ...prev, [id]: !prev[id] }));
  };
  const handleStar = (id: string) => {
    setStars(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  if (pdfPath) {
    console.log('Loading PDF in iframe:', pdfPath);
    return (
      <div className="p-4 w-full h-full flex flex-col">
        <div className="flex-1 bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
          <iframe
            src={pdfPath}
            className="w-full h-full"
            title="Certificate Preview"
            style={{ minHeight: '500px' }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 w-full max-w-xl mx-auto">
      {ABOUT_ME_SNIPPETS.map(snippet => (
        <div key={snippet.id} className="mb-6 bg-slate-900 rounded-xl border border-slate-800 shadow-lg overflow-hidden">
          <div className="flex items-center px-4 pt-3 pb-1 text-xs text-slate-400">
            <span className="mr-2">{snippet.username}</span>
            <span className="mr-2">• Created {snippet.created}</span>
            <button
              className="ml-auto mr-2 px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs"
              onClick={() => handleToggleDetails(snippet.id)}
            >
              details
            </button>
            <span className="flex items-center gap-1">
              <button
                className="px-1 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-yellow-400 border border-slate-700 text-xs"
                onClick={() => handleStar(snippet.id)}
                title="Star this snippet"
              >★</button>
              <span className="ml-1 text-slate-300">{stars[snippet.id] || 0} stars</span>
            </span>
          </div>
          <div className="px-4 pb-3">
            <Highlight theme={themes.duotoneDark} code={snippet.code} language={snippet.language}>
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={"text-xs font-mono leading-6 bg-transparent p-0 m-0 text-left " + className} style={{ ...style, background: "none", boxShadow: "none" }}>
                  {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line, key: i })}>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
            {openDetails[snippet.id] && (
              <div className="mt-2 p-2 bg-slate-800 rounded text-slate-200 text-xs border border-slate-700">
                {snippet.details}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SnippetPanel; 