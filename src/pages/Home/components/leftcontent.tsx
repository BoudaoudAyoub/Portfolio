import { Box } from "@mui/material";
import { FiDownloadCloud } from "react-icons/fi";
import { Typewriter } from "react-simple-typewriter";
import download from "../../../actions/download";
export default function LeftHomeContent(){
    return(
        <Box className="inline-flex max-w-[38rem] pl-8 m-auto">
            <Box className={`flex-grow flex-shrink-0 basis-0 `}>
                <h1 className="text-gray-800 dark:text-gray-200 text-4xl sm:text-5xl font-bold">
                    Hi, I'm <span className="text-[#7551FB]">Ayoub Boudaoud</span>
                </h1>
                <h3 className="text-3xl font-semibold text-[#8892b0] py-5">
                    <Typewriter
                        words={["Software Engineer"]}
                        loop={0}
                        cursor
                        cursorStyle="|"
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={3000} // Delay before typing again
                    />
                </h3>
                <p className="text-gray-500 dark:text-[#e1e1e1] max-w-3xl mx-auto text-wrap">
                    Experienced and highly skilled .NET software developer with over three
                    years of experience delivering solutions for various international
                    companies, primarily using Microsoft technologies. Proficient in
                    working within agile environments to design and implement
                    high-quality, high-performance software as a service (SaaS) across
                    diverse sectors and industries.
                </p>
                <div className="btn-box flex mt-12 space-x-4">
                <span
                    className="cursor-pointer flex text-black rounded-[6px] py-[0.8rem] px-[1.9rem] shadow-xl border border-gray-100"
                        onClick={() => download("src/files/cvPDF/Ayoub.Boudaoud.pdf", "Ayoub.Boudaoud", 'pdf')}
                >
                        <span className="text-[14px]">Download cv</span>
                        <FiDownloadCloud className="w-4 h-4 ml-2" />    
                    </span>
                </div>
            </Box>
        </Box>
    )
}