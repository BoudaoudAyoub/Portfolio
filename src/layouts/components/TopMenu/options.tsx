import React from "react";
export interface IMenuOptions{
    key: number;
    link: string;
    name: string;
    isActive: boolean;
} 

export default function Options(){

    const options: (IMenuOptions)[] = [
        { key: 1, name: 'Home', link: 'home', isActive: true },
        { key: 2, name: 'Education', link: 'education', isActive: false },
        { key: 3, name: 'Experience', link: 'experience', isActive: false },
        { key: 4, name: 'Projects', link: 'projects', isActive: false },
        { key: 5, name: 'Skills', link: 'skills', isActive: false },
        { key: 6, name: 'Contact', link: 'contact', isActive: false },
    ];

    const [ optionsTabs, setOptions ] = React.useState<(IMenuOptions)[]>(options);

    const setCurrentActive = (key: number) => {
        let newItems = options.map(item => item.key === key ? {...item, isActive: true} : 
            {...item, isActive: false});
        setOptions(newItems);
    }

    return(
        optionsTabs.map((item) => (
            <span
                key={item.key}
                onClick={() => setCurrentActive(item.key)}
                className={classNames(`${item.isActive ? 'text-red-500' : 'text-gray-700 dark:text-gray-300 '} hover:text-gray-800 dark:hover:text-gray-100`,
                    'cursor-pointer rounded-md px-3 py-2 text-sm font-medium',
                )}
            >
                {item.name}
            </span>
        ))
    )
} 

function classNames(...classes: (string)[]) { return classes.filter(Boolean).join(' ') }