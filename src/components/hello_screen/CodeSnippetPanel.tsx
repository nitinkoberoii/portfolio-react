import React, { useEffect, useRef, useState } from "react";
import { CODE_SNIPPETS } from "../../constants";
import { Highlight, themes } from "prism-react-renderer";

const SNIPPET_BG = "#0f172a"; // darkest blue (Tailwind slate-900)
const INTERVAL = 2500; // ms between scrolls
const ANIMATION_DURATION = 1200; // ms for smoother transition
const SNIPPET_HEIGHT = 168; // px, height+gap of one snippet (reduced gap for seamlessness)
const VISIBLE_COUNT = 3; // always show 3: top, focus, bottom
const FOCUS_IDX = 1; // always focus the middle (index 1)
const FOCUS_LAG = 150; // ms lag for focus handoff

const CodeSnippetPanel: React.FC = () => {
  const snippets = CODE_SNIPPETS;
  const numSnippets = CODE_SNIPPETS.length;
  const [baseIdx, setBaseIdx] = useState(0); // index of the top snippet in the window
  const [focusIdx, setFocusIdx] = useState(1); // index in window (0-3) that is focused
  const [isAnimating, setIsAnimating] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const focusTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Helper to get the actual snippet index for the focused snippet
  const getFocusedSnippetIdx = (base: number, focus: number) => (base + focus) % numSnippets;

  useEffect(() => {
    function scheduleNext() {
      timeoutRef.current = setTimeout(() => {
        setIsAnimating(true);
        setTransitioning(true);
        // Start scroll animation
        // After FOCUS_LAG ms, update focus to the new center snippet
        focusTimeoutRef.current = setTimeout(() => {
          setFocusIdx(2); // new center after scroll (since window moves up)
        }, FOCUS_LAG);
        // After animation, update baseIdx and reset animation, and reset focusIdx to 1 (old center)
        setTimeout(() => {
          setIsAnimating(false);
          setTransitioning(false);
          setBaseIdx((prev) => (prev + 1) % numSnippets);
          setFocusIdx(1); // reset focus to the new center for the next cycle
        }, ANIMATION_DURATION);
        scheduleNext();
      }, INTERVAL);
    }
    scheduleNext();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (focusTimeoutRef.current) clearTimeout(focusTimeoutRef.current);
    };
  }, [numSnippets]);

  // When baseIdx changes, focus always stays on the middle (index 1)
  useEffect(() => {
    setFocusIdx(1);
  }, [baseIdx]);

  // Calculate the window of 4 snippets for smooth scroll, using modulo for infinite loop
  const windowSnippets = Array.from({ length: 4 }, (_, i) => {
    const idx = (baseIdx + i) % numSnippets;
    return { code: snippets[idx], idx };
  });

  // When animating, scroll up by SNIPPET_HEIGHT px; when resetting, jump to 0 instantly
  const scrollStyle = isAnimating
    ? {
        transform: `translateY(-${SNIPPET_HEIGHT}px)`,
        transition: `transform ${ANIMATION_DURATION}ms cubic-bezier(0.77,0,0.175,1)`
      }
    : {
        transform: `translateY(0px)`,
        transition: transitioning ? "none" : `transform 0s` // no transition on reset
      };

  return (
    <div
      className="flex flex-col items-center w-full relative"
      style={{ height: SNIPPET_HEIGHT * VISIBLE_COUNT, minHeight: SNIPPET_HEIGHT * VISIBLE_COUNT, overflow: "hidden" }}
    >
      <div
        className="flex flex-col items-center w-full gap-6"
        style={scrollStyle}
      >
        {windowSnippets.map(({ code, idx }, i) => (
        <div
            key={idx + '-' + i}
            className={`relative w-full max-w-[520px] rounded-2xl border border-slate-700 shadow-xl overflow-hidden transition-all duration-700 ${
              i === focusIdx ? "opacity-100 z-10 blur-0" : "opacity-40 blur-[1.5px] z-0"
          }`}
          style={{
            background: SNIPPET_BG,
              boxShadow: i === focusIdx ? "0 4px 32px 0 #0f172acc" : "0 2px 16px 0 #0f172a80",
              minHeight: 140,
              transition: `all ${ANIMATION_DURATION}ms cubic-bezier(0.4,0,0.2,1)`
          }}
        >
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
    </div>
  );
};

export default CodeSnippetPanel; 