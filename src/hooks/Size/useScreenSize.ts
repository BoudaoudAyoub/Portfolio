import React from "react";

interface IScreenSize {
    Width: number;
    Height: number;
    ScrollX: number;
    ScrollY: number;
}

export default function useScreenSize(): IScreenSize {
    const [state, setState] = React.useState<IScreenSize>({
        Width: window.innerWidth,
        Height: window.innerHeight,
        ScrollX: window.scrollX,
        ScrollY: window.scrollY,
    });

    React.useEffect(() => {
        const updateState = () => {
            setState({
                Width: window.innerWidth,
                Height: window.innerHeight,
                ScrollX: window.scrollX,
                ScrollY: window.scrollY,
            });
        };

        window.addEventListener("resize", updateState);
        window.addEventListener("scroll", updateState);

        return () => {
            window.removeEventListener("resize", updateState);
            window.removeEventListener("scroll", updateState);
        };
    });

    return state;
}