"use client";
import { motion } from 'framer-motion';
import IService from "./components/IService";

export default function Services() {

    const services: IService[] = [
        {
            id: 1,
            title: "Web development",
            description: "Hellllooo"
        }
    ]

  return (
    <div className="h-full px-8 xl:px-[48px] xl:pl-28 xl:pb-12">
        <div className="flex flex-col justify-center">
            <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: 1, transition: {
                    delay: 2.4, 
                    duration: 0.4,
                    ease: "easeIn"
                }}}
                className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
            >
                {services.map((item, index) => {
                    return(
                        <div key={item.id}>
                            <div>{item.title}</div>
                            <div>{item.description}</div>
                            <div className='border-b'></div>
                        </div>
                    )
                })}
            </motion.div>
        </div>
    </div>
  );
}