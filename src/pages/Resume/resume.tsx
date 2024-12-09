"use client";
import dataset, { IHeader } from './dataset';
import { motion } from 'framer-motion';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs';
import { useState } from 'react';
import AboutMe from './components/aboutMe';
import Education from './components/education';
import Experience from './components/experience';
import Skills from './components/skills';
export default function Resume() {
    const [currentTab, setCurrentTab] = useState<IHeader>(dataset.headers[0]);
    const GetComponent = () => {
        switch (currentTab.title) {
            case dataset.headers[0].title:
                return <Experience />
            case dataset.headers[1].title:
                return <Education />
            case dataset.headers[2].title:
                return <Skills />
            case dataset.headers[3].title:
                return <AboutMe />
            default:
                break;
        }
    }
    return(
        <div className="px-8 xl:px-28" style={{height: `${currentTab.h}vh`}}>
            <motion.div
                initial={{opacity: 0}}
                animate={{
                    opacity: 1,
                    transition: { delay: 1, duration: 0.4, ease: "easeIn" }
                }}
                className='min-h-[80vh] flex items-center justify-center xl:px-0 py-12'
            >
                <div className={`w-full h-screen ${scrollX <= 1000 ? 'flow' : ''}`}>
                    <Tabs 
                        defaultValue={currentTab.title} 
                        onValueChange={(value) => {
                            const current = dataset.headers.find(i => i.title.includes(value));
                            setCurrentTab(current !== undefined ? current : dataset.headers[0])
                        }} 
                        className="flex flex-col xl:flex-row w-full"
                    >
                        <TabsList className="flex flex-col w-full w-[300px] xl:w-[500px] mx-auto xl:mx-0 gap-4 pt-2">
                            {dataset.headers.map((item, index) => (
                                <TabsTrigger
                                    key={index}
                                    value={item.title}
                                    className={`inline-flex items-center w-full bg-[#D3D8DA] 
                                                dark:bg-[#2D3E50] text-[#2D3E50] dark:text-[#F5F8FA]
                                                data-[state=active]:bg-[#348C79] data-[state=active]:text-[#F5F8FA]
                                                justify-center whitespace-nowrap rounded-[2px] 
                                                p-3 text-balance front-medium ring-offset-white transition-all
                                                disabled-pointer-events-none disabled:opacity-50 
                                                data-[state=active]:dark:bg-[#6941C6] shadow-sm duration-300`}
                                >
                                    {item.title}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                        <div className='w-full h-[70vh] px-12'>
                            <TabsContent value={currentTab.title}
                                        className='w-full'
                            >
                                <motion.div
                                    initial={{opacity: 0}}
                                    animate={{
                                        opacity: 1,
                                        transition: { delay: 0.5, duration: 0.2, ease: "easeIn" }
                                    }}
                                    style={{height: '50vh'}}
                                >
                                    <span className="block text-center xl:text-left py-5 xl:p-0">
                                        <h3 className='text-4xl text-[#2D3E50] dark:text-[#F5F8FA] font-bold'>{currentTab.displayName}</h3>
                                        <p className='text-sm text-[#2D3E50] dark:text-[#F5F8FA] py-4'>{currentTab.description}</p>
                                    </span>
                                    <ScrollArea className='h-[200px]'>
                                        {GetComponent()}
                                    </ScrollArea>
                                </ motion.div>   
                            </TabsContent> 
                        </div>
                    </Tabs>
                </div>
            </motion.div>
        </div>
    )
}