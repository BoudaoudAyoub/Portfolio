import { FaLinkedin } from "react-icons/fa6";
export default function LinkedIn(){
    return(
        <span className="cursor-pointer flex m-auto text-[#F8FAFC] hover:text-slate-500 dark:hover:text-slate-300"
            onClick={() => window.open("https://www.linkedin.com/in/ayoub-boudaoud-a08703180/")} 
        >
            <span className="sr-only">Ayoub Boudaoud's LinkedIn</span>
            <FaLinkedin className="w-5 h-5" fill="currentColor" aria-hidden="true"/>
        </span>
    )
}