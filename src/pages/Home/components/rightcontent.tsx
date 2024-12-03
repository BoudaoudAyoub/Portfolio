import { Box } from "@mui/material";
import '../home.scss';
import { FaCode } from "react-icons/fa6";
import { DiScrum } from "react-icons/di";

export default function RightHomeContent(){

    const pro = [
        {
            id: 1,
            pro_name: "Fullstack Developer",
            icon: FaCode
        },
        {
            id: 2,
            pro_name: "Team Leader",
            icon: DiScrum
        }
    ] 

    return(
        <Box className="relative">
            <div className="containerp">
                <div className="flex justify-center items-center profession-box">
                    {pro.map(item => 
                        <div 
                            key={item.id} 
                            className="absolute center flex-col py-8 ml-5 bg-[#F8FAFC] dark:bg-[#1F2937]" 
                            style={{
                                left: 0,
                                transformOrigin: '305px',
                                transform: `rotate(${(360 / 2) * item.id}deg)`
                            }}
                        >
                            <Box className="flex items-center">
                                <item.icon className="w-7 h-7 mr-3"/>
                                <h3 className="text-[#7551FB] dark:text-[#F8FAFC] font-700">{item.pro_name}</h3>
                            </Box>
                        </div>
                    )}
                    <span className="w-[450px] h-[450px] border-[3px] border-[#7551FB] rounded-full"></span>
                </div>
                <span className="absolute top-0 right-0 w-0 h-0 border-[330px] border-l-transparent border-t-[#7551FB] border-b-[#7551FB] border-r-[#7551FB] dark:border-t-gray-900 dark:border-r-gray-900 dark:border-b-gray-900"></span>
            </div>
            <div className="">
                {/* add image  */}
            </div>
        </Box>
    )
}