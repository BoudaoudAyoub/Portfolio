"use client";
import { motion } from 'framer-motion';
import IService from "./components/IService";
import { Box } from '@mui/material';
import React from 'react';

export default function Services() {

    const services: IService[] = [
        {
            id: '01',
            title: "Web development",
            description: "Motivated and results-driven Business School graduate seeking a challenging position within a large organisation as a Business Analyst or Project Manager."
        },
        {
            id: '02',
            title: "Mobile development",
            description: "Motivated and results-driven Business School graduate seeking a challenging position within a large organisation as a Business Analyst or Project Manager."        
        },
        {
            id: '03',
            title: "Design UX UI",
            description: "Motivated and results-driven Business School graduate seeking a challenging position within a large organisation as a Business Analyst or Project Manager."        
        },
        {
            id: '04',
            title: "Reporting",
            description: "Motivated and results-driven Business School graduate seeking a challenging position within a large organisation as a Business Analyst or Project Manager."        
        }
    ]

    return (
        <div className="h-full px-8 xl:px-28">
            <div className="mb-5">
                <Box className="flex mb-[20px] h-[28px] justify-between items-center">
                    <div className='text-[23px] dark:text-[#fff]'>Discover the services I offer.</div>
                </Box>
                <div className='grid grid-col-1 md:grid-cols-2 gap-[40px]'>
                    {services.map((item, index) => {
                        const [ isHover, setIsHover ] = React.useState(false);
                        return(
                            <motion.div
                                key={index}
                                initial={{ opacity: 0}}
                                animate={{ opacity: 1, transition: {
                                    delay: index * 0.9, 
                                    duration: 0.4,
                                    ease: "easeIn"
                                }}}
                                className='cursor-pointer border hover:border-[#348C79] hover:dark:border-[#6941C6] p-6 flex-1 flex flex-col justify-center gap-1 group transition-all duration-500'
                                onMouseEnter={() => setIsHover(true)}
                                onMouseLeave={() => setIsHover(false)}
                            >
                                <div className={`text-[#2D3E50] text-[28px] font-bold ${isHover ? 'text-[#348C79] dark:text-[#6941C6]' : 'dark:text-[#F5F8FA]'}`}>{item.id}. </div>
                                <div className={`text-[#2D3E50] text-[28px] font-bold ${isHover ? 'text-[#348C79] dark:text-[#6941C6]' : 'dark:text-[#F5F8FA]'}`}>{item.title}</div>
                                <div className='text-[#2D3E50] text-[15px] dark:text-[#F5F8FA]'>{item.description}</div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}