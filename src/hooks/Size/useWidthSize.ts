import React from "react";
export default function useWidthSize() {
    const [boxWidth, setBoxWidth] = React.useState<number>(window.innerWidth);
    
    React.useEffect(() => {
        const handleResize = () => setBoxWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return boxWidth;
}