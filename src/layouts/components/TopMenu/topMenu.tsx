import './topMenu.scss'
import Nav from "./nav";
import GitHub from "../../../components/SMedias/github";
import LinkedIn from '../../../components/SMedias/linkedin';
import useScreenSize from "../../../hooks/Size/useScreenSize";
import Language from "../../../components/language/lanaguage";
import SoftMode from "../../../components/Preferences/softMode";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Disclosure, DisclosureButton } from "@headlessui/react";
export default function TopMenu() {
    const { Width, ScrollY } = useScreenSize();

    return (
        <Disclosure as="nav" className={`${ScrollY > 200 ? 'fixed scrollDown bg-[#F5F8FA] shadow-lg dark:bg-[#2D3E50]' : 'relative banner-fade-out'} w-full dark:border-gray-800 navbar`}>
            <div className={`${ScrollY > 200 ? "py-1" : "py-3"} px-8 xl:px-28`}>
                <div className="relative flex h-16 items-center justify-between">
                    {Width <= 799 && (
                        <div className="absolute inset-y-0 right-0 flex items-center">
                            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none">
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
                            </DisclosureButton>
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
                {/* {Width <= 800 && (
                    <DisclosurePanel className="bg-red-200">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            <Options optionTypeId={2} scrollY={ScrollY} />
                        </div>
                    </DisclosurePanel>
                )}             */}
            </div>            
        </Disclosure>
    );
}