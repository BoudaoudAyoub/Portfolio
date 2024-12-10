import React from 'react';
import useActiveLink from '../../../hooks/Actives/useActiveLink';
import { useLocation } from 'react-router-dom';

export interface IMenuOptions {
    key: number;
    link: string;
    name: string;
    path: string;
    isActive: boolean;
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export default function Nav() {
    const l = useLocation();
    const options: IMenuOptions[] = [
        { key: 1, name: "Home", link: "home", isActive: true, path: "/" },
        { key: 2, name: "Services", link: "education", isActive: false, path: "/services" },
        { key: 3, name: "Resume", link: "experience", isActive: false, path: "/resume" },
        { key: 4, name: "Work", link: "projects", isActive: false, path: "/work" },
        { key: 5, name: "Contact", link: "contact", isActive: false, path: "/contact" },
    ];

    const { activeLink, handleActiveChange } = useActiveLink(options);

    // Creates a use effect to set the active menu tab after the page Refresh
    React.useEffect(() => {
        (() => {
            let menuActiveRecord = options.find(item => item.path.includes(l?.pathname?.split('/')[1]));
            handleActiveChange(menuActiveRecord?.key ?? 1, true);
        })();
    },[l]);

    const isCurrentRowActive = (key: number) => {
        return activeLink?.key === key && (activeLink?.isActive ?? false);
    } 

    return (
        <>
            {options.map((item) =>
                <span
                    key={item.key}
                    onClick={() => {
                        handleActiveChange(item.key, !isCurrentRowActive(item.key));
                        window.history.pushState({ from: location.pathname }, "", item.path);
                        location.reload();
                    }}                    
                    className={classNames(
                        `${isCurrentRowActive(item.key) ? ('text-[#348C79] dark:text-[#6941C6]'):('text-[#2D3E50] dark:text-[#F5F8FA]')}`,
                        "cursor-pointer select-none rounded-md px-3 py-2 text-sm font-medium"
                    )}
                >
                    {item.name}
                </span>
            )}
        </>
    );
}