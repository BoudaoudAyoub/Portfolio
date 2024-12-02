import Options from "./options";
import SoftMode from "../../../components/softMode";
import Language from "../../../components/language/lanaguage";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import useWidthSize from "../../../hooks/Size/useWidthSize";

export default function TopMenu() {
    const boxWidth = useWidthSize();
    return (
        <Disclosure as="nav" className="dark:bg-gray-800 dark:border-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 px-8 pt-5">
                <div className="relative flex h-16 items-center justify-between">
                    {boxWidth <= 799 && (
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
                            <p className="text-[24px] font-[500] font-mono dark:text-gray-300">
                                Ayoub.
                            </p>
                        </div>
                        {boxWidth >= 800 && (
                            <>
                                <div className="ml-auto">
                                    <div className="flex space-x-4">
                                        <Options optionTypeId={1} />
                                    </div>
                                </div>
                                <div className="ml-auto">
                                    <div className="flex space-x-4">
                                        <Language />
                                        <SoftMode />
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                {boxWidth <= 800 && (
                    <DisclosurePanel className="bg-red-200">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            <Options optionTypeId={2} />
                        </div>
                    </DisclosurePanel>
                )}            
            </div>            
        </Disclosure>
    );
}