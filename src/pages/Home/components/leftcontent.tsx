import { GoDownload } from "react-icons/go";
import download from "../../../actions/download";
import { Typewriter } from 'react-simple-typewriter';
export default function LeftHomeContent(){
    return(
        <div className="text-center xl:text-left py-4 order-2 xl:order-none xl:w-[50%]">
            <h1 className="text-[30px] xl:text-[50px] leading-[1.1] font-semibold my-4">
                <span className="dark:text-[#F5F8FA]">Hi, I'm</span> <br /><span className=" text-[#348C79] dark:text-[#6941C6]">Ayoub Boudaoud</span>
            </h1>
            <span className="text-xl dark:text-[#F5F8FA]">
                <Typewriter
                    words={["Software Engineer | High Quality Code"]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={3000}
                />
            </span>
            <p className="max-w-[500px] xl:max-w-full mt-4 mb-9 dark:text-[#F5F8FA]">
                I bring expertise in crafting innovative solutions through a strong command of 
                diverse programming languages and modern technologies. My skill set enables me to
                design scalable systems and optimize user experiences. With a focus on quality and innovation, 
                I consistently deliver impactful digital solutions
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
                <button
                    className="border border-[#348C79] dark:border-[#6941C6]  py-2 px-4 rounded-full uppercase flex items-center gap-2"
                    onClick={() => download("src/files/cvPDF/Ayoub.Boudaoud.pdf", "Ayoub.Boudaoud", 'pdf')}
                >
                    <span className={`text-[10px] text-[#348C79] dark:text-[#6941C6] font-bold`}>Download cv</span>
                    <GoDownload className="w-3 h-3 ml-2 text-[#348C79] dark:text-[#6941C6] font-bold" />    
                </button>
            </div>
        </div>
    )
}