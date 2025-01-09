import { GoDownload } from "react-icons/go";
import download from "../../../actions/download";
import { Typewriter } from 'react-simple-typewriter';
import { useTranslation } from "react-i18next";
export default function LeftHomeContent(){
    const { t } = useTranslation();
    return(
        <div className="text-center xl:text-left py-4 order-2 xl:order-none xl:w-[50%]">
            <h1 className="text-[30px] xl:text-[50px] leading-[1.1] font-semibold my-4">
                <span className="dark:text-[#F5F8FA]">{t(`homeContent.title1`)}</span> <br /><span className=" text-[#348C79] dark:text-[#6941C6]">Ayoub Boudaoud</span>
            </h1>
            <span className="text-xl dark:text-[#F5F8FA]">
                <Typewriter
                    words={[t(`homeContent.devTitles.t1`), t(`homeContent.devTitles.t2`)]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={3000}
                />
            </span>
            <p className="max-w-[500px] xl:max-w-full mt-4 mb-9 dark:text-[#F5F8FA]">
                {t(`homeContent.resume`)}
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
                <button
                    className="border border-[#348C79] dark:border-[#6941C6]  py-2 px-4 rounded-full uppercase flex items-center gap-2"
                    onClick={() => download("src/files/cvPDF/Ayoub.Boudaoud.pdf", "Ayoub.Boudaoud", 'pdf')}
                >
                    <span className={`text-[10px] text-[#348C79] dark:text-[#6941C6] font-bold`}>{t(`homeContent.downloadcv`)}</span>
                    <GoDownload className="w-3 h-3 ml-2 text-[#348C79] dark:text-[#6941C6] font-bold" />    
                </button>
            </div>
        </div>
    )
}