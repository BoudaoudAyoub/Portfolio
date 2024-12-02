import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FiDownloadCloud } from "react-icons/fi";


export default function Home() {
  return (
    <section
      className="mx-auto max-w-7xl px-2 sm:px-6 px-8 text-white h-[80vh] flex items-center"
      id="home"
    >
        <div className="home-content">
            <h1 className="text-gray-800 dark:text-gray-200 text-4xl sm:text-5xl font-bold">
                Hi, I'm <span className="text-[#64ffda]">Ayoub Boudaoud</span>
            </h1>
            <h3 className="text-3xl font-semibold text-[#8892b0] py-5">
                <Typewriter
                    words={["Software Engineer"]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000} // Delay before typing again
                />
            </h3>
            <p className="text-gray-500 dark:text-[#e1e1e1] max-w-3xl mx-auto">
                Experienced and highly skilled .NET software developer with over three
                years of experience delivering solutions for various international
                companies, primarily using Microsoft technologies. Proficient in
                working within agile environments to design and implement
                high-quality, high-performance software as a service (SaaS) across
                diverse sectors and industries.
            </p>
            <div className="btn-box flex mt-12 space-x-4">
                <button className="px-5 py-2 bg-[#64ffda] flex items-center text-black rounded-[2px] font-semibold">
                    <span className="text-[14px]">Download cv</span>
                    <FiDownloadCloud className="w-4 h-4 ml-2" />    
                </button>
                <button className="px-6 py-2 border border-[#64ffda] text-[#64ffda] rounded font-semibold hover:bg-[#112240] hover:text-white">
                        Contact Me
                </button>
            </div>
        </div>
    </section>
  );
}
