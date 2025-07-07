import React from "react";
import { PROFILE } from "../constants";
import gitIcon from "../assets/git.png";
import twitterIcon from "../assets/twitter.png";
import linkedinIcon from "../assets/linkedin.png";

const HelloScreen: React.FC = () => {
  return (
    <>
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
              <a href="#hello" className="px-6 h-full flex items-center text-indigo-200 hover:text-orange-400 font-mono border-b-2 border-orange-400 shadow-[0_2px_8px_#fb923c40]" style={{color: '#fb923c'}}>
                _hello
              </a>
              <div className="w-px bg-slate-800 h-8 self-center" />
              <a href="#about-me" className="px-6 h-full flex items-center text-indigo-200 hover:text-orange-400 font-mono">
                _about-me
              </a>
              <div className="w-px bg-slate-800 h-8 self-center" />
              <a href="#projects" className="px-6 h-full flex items-center text-indigo-200 hover:text-orange-400 font-mono">
                _projects
              </a>
              <div className="w-px bg-slate-800 mx-2 h-full self-stretch" style={{minHeight: '100%'}}></div>
            </nav>
          </div>
          {/* Spacer */}
          <div className="flex-1" />
          {/* Right nav option */}
          <nav className="flex items-center h-full">
            <div className="w-px bg-slate-800 h-8 self-center mr-2" />
            <a href="#contact-me" className="px-8 h-full flex items-center text-indigo-200 hover:text-orange-400 font-mono">
              _contact-me
            </a>
          </nav>
        </div>
      </header>
      {/* Main Content (left panel only) */}
      <main className="flex-1 flex flex-row items-center justify-center w-full z-10 gap-8"> 
        {/* Left: Intro */}
        <div className="flex-1 flex flex-col justify-center items-start max-w-[700px] pl-8">
          <p className="text-slate-300 text-base mb-4 tracking-wide font-mono">Hi all. I am</p>
          <h1 className="text-[64px] font-bold mb-2 tracking-wide text-slate-100 font-mono leading-[1.1] drop-shadow-[0_2px_8px_#a3bffa40]">{PROFILE.name}</h1>
          <h2 className="text-2xl font-semibold mb-8 font-mono text-indigo-400" style={{textShadow: '0 2px 8px #818cf840'}}>&gt; {PROFILE.role}</h2>
          <pre className="text-slate-300 font-mono text-base mb-4 bg-transparent p-0 leading-6">{`// complete the game to continue\n// find my profile on Github:`}</pre>
          <div className="bg-transparent rounded px-0 py-0 font-mono text-lg">
            <span className="text-teal-300">const </span>
            <span className="text-teal-400">githubLink</span>
            <span className="text-slate-300"> = </span>
            <a href={PROFILE.github} className="text-orange-400 underline">"{PROFILE.github}"</a>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="flex justify-between items-center px-16 py-3 border-t border-slate-800 text-indigo-200 text-base bg-slate-900/80 backdrop-blur-sm w-full z-10 font-mono">
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
    </>
  );
};

export default HelloScreen; 