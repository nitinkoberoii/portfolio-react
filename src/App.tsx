import React, { useState } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PROFILE } from "./constants";
import gitIcon from "./assets/git.png";
import twitterIcon from "./assets/twitter.png";
import linkedinIcon from "./assets/linkedin.png";
import CodeSnippetPanel from "./components/hello_screen/CodeSnippetPanel";
import HelloScreen from "./components/hello_screen/hello_screen";
import AboutMeScreen from "./components/about-me_screen/about_me_screen";

function App() {
  const [currentScreen, setCurrentScreen] = useState<'hello' | 'about-me' | 'projects' | 'contact-me'>('hello');

  return (
    <div className="fixed inset-0 w-full h-full bg-slate-900 overflow-hidden flex flex-col">
      {/* Teal gradient (top left of game panel) */}
      <div className="absolute z-0 pointer-events-none" style={{
        left: '50%', top: '15%', width: '500px', height: '400px',
        background: 'radial-gradient(ellipse 60% 60% at 50% 40%, #38bdf8cc 0%, transparent 80%)',
        filter: 'blur(15px)',
      }} />
      {/* Indigo gradient (bottom right of game panel) */}
      <div className="absolute z-0 pointer-events-none" style={{
        left: '55%', top: '30%', width: '600px', height: '400px',
        background: 'radial-gradient(ellipse 60% 60% at 60% 60%, #6366f1b3 0%, transparent 80%)',
        filter: 'blur(15px)',
      }} />
      {/* Header Navigation Bar */}
      <header className="relative w-full z-10">
        <div className="flex items-stretch border-b border-slate-800 w-full h-16 bg-slate-900/80 backdrop-blur-sm">
          {/* Name and left nav */}
          <div className="flex items-stretch">
            <div className="flex items-center px-8 text-lg font-bold tracking-widest font-mono text-slate-100 h-full">{PROFILE.name}</div>
            {/* Vertical pipe separator */}
            <div className="w-px bg-slate-800 mx-2 h-full self-stretch" style={{minHeight: '100%'}}></div>
            {/* Left nav options */}
            <nav className="flex items-center h-full">
              <button
                className={`px-6 h-full flex items-center font-mono transition-colors duration-200 border-b-4 ${currentScreen === 'hello' ? 'border-orange-400 text-orange-200' : 'border-transparent text-indigo-200 hover:text-orange-400'} bg-transparent`}
                onClick={() => setCurrentScreen('hello')}
                style={{ outline: 'none', background: 'transparent', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
              >
                _hello
              </button>
              <div className="w-px bg-slate-800 mx-2 h-full self-stretch" style={{minHeight: '100%'}}></div>
              <button
                className={`px-6 h-full flex items-center font-mono transition-colors duration-200 border-b-4 ${currentScreen === 'about-me' ? 'border-orange-400 text-orange-200' : 'border-transparent text-indigo-200 hover:text-orange-400'} bg-transparent`}
                onClick={() => setCurrentScreen('about-me')}
                style={{ outline: 'none', background: 'transparent', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
              >
                _about-me
              </button>
              <div className="w-px bg-slate-800 mx-2 h-full self-stretch" style={{minHeight: '100%'}}></div>
              <button
                className={`px-6 h-full flex items-center font-mono transition-colors duration-200 border-b-4 ${currentScreen === 'projects' ? 'border-orange-400 text-orange-200' : 'border-transparent text-indigo-200 hover:text-orange-400'} bg-transparent`}
                onClick={() => setCurrentScreen('projects')}
                style={{ outline: 'none', background: 'transparent', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
              >
                _projects
              </button>
              <div className="w-px bg-slate-800 mx-2 h-full self-stretch" style={{minHeight: '100%'}}></div>
            </nav>
          </div>
          {/* Spacer */}
          <div className="flex-1" />
          {/* Right nav option */}
          <nav className="flex items-center h-full">
          <div className="w-px bg-slate-800 mx-2 h-full self-stretch" style={{minHeight: '100%'}}></div>
            <button
              className={`px-8 h-full flex items-center font-mono transition-colors duration-200 border-b-4 ${currentScreen === 'contact-me' ? 'border-orange-400 text-orange-200' : 'border-transparent text-indigo-200 hover:text-orange-400'} bg-transparent`}
              onClick={() => setCurrentScreen('contact-me')}
              style={{ outline: 'none', background: 'transparent', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
            >
              _contact-me
            </button>
          </nav>
        </div>
      </header>
      {/* Main Content */}
      <main className="flex-1 flex flex-row items-center justify-center w-full z-10 gap-8">
        {currentScreen === 'hello' && (
          <>
            {/* Left: Intro */}
            <div className="flex-1 flex flex-col justify-center items-start max-w-[700px] pl-8">
              <p className="text-slate-300 text-base mb-4 tracking-wide font-mono">Hi all. I am</p>
              <h1 className="text-[64px] font-bold mb-2 tracking-wide text-slate-100 font-mono leading-[1.1] drop-shadow-[0_2px_8px_#a3bffa40]">{PROFILE.name}</h1>
              <h2 className="text-2xl font-semibold mb-8 font-mono text-indigo-600" style={{textShadow: '0 2px 8px #818cf840'}}>&gt; {PROFILE.role}</h2>
              <pre className="text-slate-300 font-mono text-base mb-4 bg-transparent p-0 leading-6">{`// complete the game to continue\n// find my profile on Github:`}</pre>
              <div className="bg-transparent rounded px-0 py-0 font-mono text-lg">
                <span className="text-indigo-700">const </span>
                <span className="text-teal-400">githubLink</span>
                <span className="text-slate-300"> = </span>
                <a href={PROFILE.github} className="text-red-400 underline">"{PROFILE.github}"</a>
              </div>
            </div>
            {/* Right: Game Placeholder */}
            <div className="flex-1 flex justify-center items-center max-w-[600px] pr-8">
              <CodeSnippetPanel />
            </div>
          </>
        )}
        {currentScreen === 'about-me' && <AboutMeScreen />}
        {/* You can add more screens for 'projects' and 'contact-me' here */}
      </main>
      {/* Footer */}
      <footer className="fixed bottom-0 left-0 w-full flex justify-between items-center px-16 py-3 border-t border-slate-800 text-indigo-200 text-base bg-slate-900/80 backdrop-blur-sm z-50 font-mono">
        <div className="flex items-center gap-0">
          <span className="text-base font-mono px-2" style={{fontWeight: 500}}>find me in:</span>
          <div className="w-px bg-slate-800 h-6 self-center mx-2" />
          <a href={PROFILE.socials.twitter} className="flex items-center px-2"><img src={twitterIcon} alt="twitter" className="w-5 h-5" /></a>
          <div className="w-px bg-slate-800 h-6 self-center mx-2" />
          <a href={PROFILE.socials.linkedin} className="flex items-center px-2"><img src={linkedinIcon} alt="linkedin" className="w-5 h-5" /></a>
        </div>
        <div className="flex items-center gap-0 font-mono text-base">
          <div className="w-px bg-slate-800 h-6 self-center mx-2" />
          <span>{PROFILE.username}</span>
          <img src={gitIcon} alt="git" className="w-5 h-5 ml-2" />
        </div>
      </footer>
    </div>
  )
}

export default App
