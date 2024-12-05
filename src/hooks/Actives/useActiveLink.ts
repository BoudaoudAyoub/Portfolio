import React from "react";
import { IMenuOptions } from "../../layouts/components/TopMenu/nav";
export default function useActive(menu: IMenuOptions[]) {

    const [activeLink, setActiveLink] = React.useState({ key: 0, isActive: false });
    
    const handleActiveChange = (index: number, isActive: Boolean) => {
        if(activeLink.key === index && activeLink.isActive) return;
        const linkRow = menu.find((item) => item.key === index);
        setActiveLink(linkRow && isActive ? { key: linkRow.key, isActive: true } : { key: 0, isActive: false });
    }

    return { activeLink, handleActiveChange };
}