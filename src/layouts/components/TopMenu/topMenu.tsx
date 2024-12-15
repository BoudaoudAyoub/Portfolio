import './topMenu.scss'
import Nav from "./nav";
import GitHub from "../../../components/SMedias/github";
import LinkedIn from '../../../components/SMedias/linkedin';
import useScreenSize from "../../../hooks/Size/useScreenSize";
import Language from "../../../components/language/lanaguage";
import SoftMode from "../../../components/Preferences/softMode";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
export default function TopMenu() {
    const { Width, ScrollY } = useScreenSize();

    return (
        // <header className={`fixed top-0 scrollDown bg-[#F5F8FA] shadow-lg dark:bg-[#2D3E50] w-full dark:border-gray-800 navbar`}>
        <header className={`fixed w-full ${ScrollY > 50 && ('shadow-lg')} px-8 xl:px-[80px] bg-[#F8FAFC] z-[1091] right-0 top-0 backdrop-blur flex-none transition-colors duration-500 lg:z-50 supports-backdrop-blur:bg-white/60 dark:bg-[#1F2937]`}>
            <nav className={`max-w-8xl mx-auto`}>
                <header className={`py-2 border-b border-gray-900/10 lg:px-8 lg:border-0 mx-4 lg:mx-0 h-full`}>
                    <div className="relative flex h-16 items-center justify-between">
                            {Width <= 799 && (
                                <div className="absolute inset-y-0 right-0 flex items-center">
                                    <button className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Open main menu</span>
                                        <Bars3Icon
                                            aria-hidden="true"
                                            className="block size-6 group-data-[open]:hidden"
                                        />
                                        <XMarkIcon
                                            aria-hidden="true"
                                            className="hidden size-6 group-data-[open]:block"
                                        />
                                    </button>
                                </div>
                            )}
                            <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
                                <div className="flex shrink-0 items-center">
                                    <p className="text-[24px] font-[500] font-mono text-[#2D3E50] dark:text-gray-300">
                                        Ayoub.
                                    </p>
                                </div>
                                {Width >= 800 && (
                                    <>
                                        <div className="ml-auto">
                                            <div className="flex space-x-4">
                                                <Nav />
                                            </div>
                                        </div>
                                        <div className="ml-auto">
                                            <div className="flex items-center justify-between">
                                                <Language />
                                                <div className="flex border-l border-slate-200 ml-3 pl-3 dark:border-slate-600">
                                                    <SoftMode />
                                                    <GitHub />
                                                    <span className='ml-6'></span>
                                                    <LinkedIn />
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                    </div>  
                </header>
            </nav>         
        </header>
        // </header>
    );
}