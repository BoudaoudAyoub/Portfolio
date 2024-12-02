export interface IMenuOptions{
    key: number;
    link: string;
    name: string;
} 

export default function Options(){

    const options: (IMenuOptions)[] = [
        { key: 1, name: 'Home', link: 'home' },
        { key: 2, name: 'Education', link: 'education' },
        { key: 3, name: 'Experience', link: 'experience' },
        { key: 4, name: 'Projects', link: 'projects' },
        { key: 5, name: 'Skills', link: 'skills' },
        { key: 6, name: 'Contact', link: 'contact' },
    ];

    return(
        options.map((item) => (
            <a
                key={item.key}
                href={item.link}
                //aria-current={item.current ? 'page' : undefined}
                className={classNames('text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100',
                    'rounded-md px-3 py-2 text-sm font-medium',
                )}
            >
                {item.name}
            </a>
        ))
    )
} 

function classNames(...classes: (string)[]) { return classes.filter(Boolean).join(' ') }