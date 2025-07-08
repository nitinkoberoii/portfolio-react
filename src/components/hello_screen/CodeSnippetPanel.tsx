import React from "react";
import { CODE_SNIPPETS } from "../../constants";
import { Highlight, themes } from "prism-react-renderer";

const SNIPPET_BG = "#0f172a"; // darkest blue (Tailwind slate-900)

const CodeSnippetPanel: React.FC = () => {
  // Always focus the middle snippet
  const focusIdx = Math.floor(CODE_SNIPPETS.length / 2);

  return (
    <div className="flex flex-col items-center w-full gap-8">
      {CODE_SNIPPETS.map((code, idx) => (
        <div
          key={idx}
          className={`relative w-full max-w-[520px] rounded-2xl transition-all duration-300 border border-slate-700 shadow-xl overflow-hidden ${
            idx === focusIdx ? "opacity-100 z-10" : "opacity-40 blur-[1.5px] z-0"
          }`}
          style={{
            background: SNIPPET_BG,
            boxShadow: idx === focusIdx ? "0 4px 32px 0 #0f172acc" : "0 2px 16px 0 #0f172a80",
          }}
        >
          {/* Code block with syntax highlighting */}
          <div className="px-6 py-6">
            <Highlight theme={themes.duotoneDark} code={code} language="typescript">
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default CodeSnippetPanel; 