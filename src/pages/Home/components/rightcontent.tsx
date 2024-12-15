"use client";
import useSoftMode from '../../../hooks/SoftMode/useSoftMode';
import { motion } from 'framer-motion'; 
export default function RightHomeContent(){
    const { isSoftMode } = useSoftMode();
    return(
        <div className="order-1 xl:order-none">
            <div className="w-full xl:w-[450px] relative">
                <motion.div
                    initial={{opacity: 0}}
                    animate={{
                        opacity: 4,
                        transition: { delay: 0.5, duration: 0.5, ease: "easeIn" },
                    }}
                >
                    <div className="mt-[28px] xl:mt-0 flex w-[350px] h-[350x] xl:w-full xl:h-full absolute">
                        <img
                            src="/imgs/me.png"
                            alt="Ayoub Boudaoud"
                            className="object-contain m-auto rounded-full"
                        />
                    </div>  
                </motion.div>
                <motion.svg
                    className="w-[350px] xl:w-full h-[350px] xl:h-[420px] p-2"
                    fill={"transparent"}
                    viewBox="0 0 580 580"
                    xmlns="http://www.w3.org/2000/svg"
                    initial={{opacity: 0}}
                    animate={{
                        opacity: 4,
                        transition: { delay: 0.5, duration: 0.5, ease: "easeIn" },
                    }}
                >
                <motion.circle
                    cx="290"
                    cy="290"
                    r="250"
                    stroke={isSoftMode ? "#6941C6" : "#348C79" }
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ 
                        strokeDasharray: "36 10 0 0" 
                    }}
                    animate={{
                        strokeDasharray: ["15 100 25 25", "16 25 92 72", "4 100 22 22"],
                        rotate: [0, 360]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />
                </motion.svg>
            </div>
        </div>
    )
}