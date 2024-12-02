import { DisclosureButton as DisclosureButton } from "@headlessui/react";
import React from "react";

export interface IMenuOptions {
    key: number;
    link: string;
    name: string;
    isActive: boolean;
}

interface OptionsProps {
    optionTypeId: number;
}

export default function Options({ optionTypeId }: OptionsProps) {
    const options: IMenuOptions[] = [
        { key: 1, name: "Home", link: "home", isActive: true },
        { key: 2, name: "Education", link: "education", isActive: false },
        { key: 3, name: "Experience", link: "experience", isActive: false },
        { key: 4, name: "Projects", link: "projects", isActive: false },
        { key: 5, name: "Skills", link: "skills", isActive: false },
        { key: 6, name: "Contact", link: "contact", isActive: false },
    ];

    const [optionsTabs, setOptionsTabs] = React.useState<IMenuOptions[]>(options);

    const setCurrentActive = (key: number) => {
        const newItems = optionsTabs.map((item) =>
            item.key === key ? { ...item, isActive: true } : { ...item, isActive: false }
        );
        setOptionsTabs(newItems);
    };

    return (
        <>
            {optionsTabs.map((item) =>
                optionTypeId === 1 ? (
                    <span
                        key={item.key}
                        onClick={() => setCurrentActive(item.key)}
                        className={classNames(
                            `${item.isActive ? "text-red-500" : "text-gray-700 dark:text-gray-300"} hover:text-gray-800 dark:hover:text-gray-100`,
                            "cursor-pointer rounded-md px-3 py-2 text-sm font-medium"
                        )}
                    >
                        {item.name}
                    </span>
                ) : (
                    <DisclosureButton
                        key={item.key}
                        onClick={() => setCurrentActive(item.key)}
                        className={classNames(
                             `${item.isActive ? "text-red-500" : "text-gray-700 dark:text-gray-300"} hover:text-gray-800 dark:hover:text-gray-100`,
                            "cursor-pointer rounded-md px-3 py-2 text-sm font-medium"
                        )}
                    >
                        {item.name}
                    </DisclosureButton>
                )
            )}
        </>
    );
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}