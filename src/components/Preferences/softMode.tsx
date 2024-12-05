import useSoftMode from '../../hooks/SoftMode/useSoftMode';
import { MdLightMode } from "react-icons/md";
import { AiFillMoon } from "react-icons/ai";
export default function SoftMode() {
  const { isSoftMode, setSoftMode } = useSoftMode();
    return (
        <button 
            type="button" 
            className="mr-4 flex items-center outline-none p-[6px] rounded text-[#093D3F] hover:text-[#ebf3e4] dark:hover:text-gray-700 transition-all duration-300 ease-in-out"
            onClick={() => setSoftMode(!isSoftMode)}
            id="headlessui-listbox-button-:R2lkcr6:" 
            aria-haspopup="listbox" 
            aria-expanded="false" 
            aria-labelledby="headlessui-label-:R1lkcr6: headlessui-listbox-button-:R2lkcr6:">
            <MdLightMode className={`text-[#2D3E50] dark:text-[#F5F8FA] dark:hidden w-5 h-5 inline hover:fill-[#093D3F] dark:fill-white`} />
            <AiFillMoon 
                className={`hidden w-5 h-5 dark:inline dark:text-gray-300`}
            />
        </button>
    );
}