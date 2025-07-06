import React from "react";

const Screw = () => (
  <div className="w-3 h-3 rounded-full bg-slate-700 border border-slate-900" />
);

const SnakeGame: React.FC = () => {
  return (
    <div className="relative w-[420px] h-[420px] flex items-center justify-center">
      {/* Screws at corners */}
      <div className="absolute top-2 left-2 z-20"><Screw /></div>
      <div className="absolute top-2 right-2 z-20"><Screw /></div>
      <div className="absolute bottom-2 left-2 z-20"><Screw /></div>
      <div className="absolute bottom-2 right-2 z-20"><Screw /></div>
      {/* Gradient panel background */}
      <div className="absolute inset-0 rounded-xl border border-slate-700 bg-slate-800/40" />
      {/* Content */}
      <div className="relative z-10 flex flex-row w-full h-full p-6 gap-6">
        {/* Left: Game area fills most of the height */}
        <div className="flex flex-col items-center justify-between h-full w-[210px]">
          <div className="w-full flex-1 bg-slate-900 rounded-lg border border-slate-800 shadow-inner flex flex-col items-center justify-between py-4">
            {/* Snake and food will be rendered here */}
            <span className="text-slate-500">[Snake Game]</span>
            <button className="mt-auto px-4 py-2 bg-orange-400 text-slate-900 rounded font-mono text-base shadow hover:bg-orange-300 transition">start-game</button>
          </div>
        </div>
        {/* Right: Instructions at top, food in middle, skip at bottom */}
        <div className="flex flex-col justify-between h-full w-[140px]">
          {/* Instructions at top */}
          <div className="bg-slate-900 border border-slate-800 rounded p-2 text-xs text-indigo-200 font-mono">
            <div>// use keyboard</div>
            <div>// arrows to play</div>
            <div className="flex flex-col items-center mt-2 gap-1">
              <kbd className="px-2 py-1 bg-slate-800 rounded border border-slate-700">↑</kbd>
              <div className="flex gap-1">
                <kbd className="px-2 py-1 bg-slate-800 rounded border border-slate-700">←</kbd>
                <kbd className="px-2 py-1 bg-slate-800 rounded border border-slate-700">↓</kbd>
                <kbd className="px-2 py-1 bg-slate-800 rounded border border-slate-700">→</kbd>
              </div>
            </div>
          </div>
          {/* Food left in the middle */}
          <div className="flex flex-col items-center">
            <div className="text-xs text-indigo-200 font-mono mb-1 mt-2">// food left</div>
            <div className="grid grid-cols-5 grid-rows-2 gap-x-3 gap-y-2">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="w-3 h-3 rounded-full bg-teal-400 opacity-80 shadow-[0_0_8px_2px_#2dd4bf]" />
              ))}
            </div>
          </div>
          {/* Skip button at the bottom */}
          <button className="self-end px-4 py-1 border border-indigo-200 text-indigo-200 rounded bg-transparent hover:bg-slate-800 transition text-sm font-mono mt-2">skip</button>
        </div>
      </div>
    </div>
  );
};

export default SnakeGame; 