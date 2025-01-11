import i18n from "i18next";
import { Menu, MenuButton, MenuItems } from '@headlessui/react';
import { Box } from "@mui/material";
import { FR } from 'country-flag-icons/react/3x2';
import { GoGlobe } from "react-icons/go";
import ILanguageItem from "./ILanguageItem";
import { LanguageItem } from "./languageItem";

const Languages: ILanguageItem[] = [
    { 
        key: 1,
        name: "en",
        displayName: "English",
        alias:"EN",
        Flag: GoGlobe
    },
    {
        key: 2,
        name: "fr", 
        displayName: "Français",
        alias:"FR",
        Flag: FR
    }
];

export default function Language() {
    // Safely get the current language or default to the first language if not set
    const currentLanguage = Languages.find(lang => lang.name === i18n?.language) || Languages[0];

    return (
        <Menu as="div" className="relative inline-block text-left">
            <Box>
                <MenuButton 
                    className={`flex items-center outline-none p-[6px] rounded text-amber-300 transition-all duration-300 ease-in-out`}
                    onMouseLeave={() => console.log(false)}
                >
                    <div className={`flex items-center text-[#2D3E50] dark:text-[#F5F8FA] pt-[1px]`}>
                        {currentLanguage && (
                            <>
                                <currentLanguage.Flag className="h-4 w-5" />
                                <p className="pl-1 text-[12px] font-semibold">
                                    {currentLanguage.alias}
                                </p>
                            </>
                        )}
                    </div>
                </MenuButton>
            </Box>
            <MenuItems
                transition
                className="rounded bg-white absolute w-[160px] border border-[#e1e1e1] shadow-md right-0 mt-2 z-50 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
                <div className="block px-2 py-4">
                    <Box className="justify-center h-auto">
                        {Languages.map(item => 
                            <LanguageItem 
                                language={item}
                            />
                        )}
                    </Box>
                </div>
            </MenuItems>
        </Menu>
    );
}
