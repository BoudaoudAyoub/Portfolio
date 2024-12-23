import { Box } from "@mui/material";
import { IoIosSend } from "react-icons/io";
import useSoftMode from "../../hooks/SoftMode/useSoftMode";
import React from "react";

export default function Works() {

    const { isSoftMode } = useSoftMode();
    const services = [ 
        'Developement', 
        'Performance Optimization', 
        'Code Review', 
        'System Design', 
        'Devops', 
        'Architecture Design', 
        'Other'
    ]
    const [ lables, setLables ] = React.useState({
        showFirstname: false,
        showLastname: false,
        showEmail: false,
        showPhone: false,
        showService: false,
        showMessage: false

    });

    return(
        <Box className="px-8 xl:px-28 h-full overflow-x-hidden flex">
            <Box className="xl:w-[60%] mx-auto my-10"
                style={{
                    marginBottom: "10px"
                }}
            >
                <span className="block text-center xl:text-left py-5 xl:p-0">
                    <h3 className='text-4xl text-[#2D3E50] dark:text-[#F5F8FA] font-bold'>Contact</h3>
                    <p className='text-sm text-[#2D3E50] dark:text-[#F5F8FA] py-4'>
                        Explore my journey through various roles and companies, where I’ve progressed from jurnior developer to backend engineer to team leadership. This section highlights the different positions I’ve held, the experiences gained in each that demonstrates my growth and adaptability across diverse environments and teams
                    </p>
                </span>
                <form className="w-full mt-">
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full md:w-1/2 px-3 grid grid-rows-1 gap-2">
                            <div className="w-full md:w-1/2">
                                {lables.showFirstname && (
                                    <p className="text-[11px] fade-in dark:text-[#F5F6F7]">
                                        First Name
                                    </p>
                                )}
                            </div>
                            <input className="text-sm appearance-none block w-full text-gray-700 border rounded-[2px] border border-gray-300 py-3 px-4 leading-tight focus:outline-none dark:text-[#F5F8FA] dark:border-[#2D3E50] dark:bg-[#2D3E50] focus:border-[#348C79] dark:focus:border-[#6941C6]" 
                                    id="grid-first-name" 
                                    type="text"
                                    placeholder="Firstname"
                                    autoComplete="false"
                                    onChange={(v) => setLables({...lables, showFirstname: v.target.value})}
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3 grid grid-rows-1 gap-2 mt-2 md:mt-0">
                            <div className="w-full md:w-1/2">
                                {lables.showLastname && (
                                    <p className={`text-[11px] fade-in dark:text-[#F5F6F7] ${lables.showFirstname && lables.showFirstname}`}>
                                        Last Name
                                    </p>
                                )}
                            </div>
                            <input className="text-sm appearance-none block w-full text-gray-700 border border-gray-300 rounded-[2px] py-3 px-4 leading-tight focus:outline-none dark:text-[#F5F8FA] dark:border-[#2D3E50] dark:bg-[#2D3E50] focus:border-[#348C79] dark:focus:border-[#6941C6]" 
                                    id="grid-last-name" 
                                    type="text" 
                                    placeholder="Lastname"
                                    autoComplete="false"
                                    onChange={(v) => setLables({...lables, showLastname: v.target.value})}
                            />
                        </div>
                    </div>
                    <div className="block -mx-3 mb-4">
                        <div className="flex flex-wrap">
                            <div className="w-full px-3">
                                {lables.showEmail && (
                                    <div className="w-full md:w-1/2">                                        
                                        <p className="text-[11px] fade-in dark:text-[#F5F6F7]">
                                            Email
                                        </p>
                                    </div>
                                )}
                                <input className="text-sm appearance-none block w-full text-gray-700 border border-gray-300 rounded-[2px] py-3 px-4 leading-tight focus:outline-none dark:text-[#F5F8FA] dark:border-[#2D3E50] dark:bg-[#2D3E50] focus:border-[#348C79] dark:focus:border-[#6941C6]" 
                                        id="email" 
                                        type="email"
                                        placeholder="Email Address"
                                        autoComplete="false"
                                        onChange={(v) => setLables({...lables, showEmail: v.target.value})}
                                />
                            </div>
                        </div>
                    </div>                    
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                            {lables.showPhone && (
                                <div className="w-full md:w-1/2 pb-2">
                                    <p className="text-[11px] fade-in  dark:text-[#F5F6F7]">
                                        Number Phone
                                    </p>
                                </div>                            
                            )}
                            <input className="text-sm appearance-none block w-full border border-gray-300 rounded-[2px] py-3 px-4 leading-tight focus:outline-none dark:text-[#F5F8FA] dark:border-[#2D3E50] dark:bg-[#2D3E50] focus:border-[#348C79] dark:focus:border-[#6941C6]" 
                                    id="phone" 
                                    type="phone"
                                    placeholder="Phone Number"
                                    autoComplete="false"
                                    onChange={(v) => setLables({...lables, showPhone: v.target.value})}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-3">
                        <div className="w-full px-3">
                            {lables.showService && (
                                <div className="w-full md:w-1/2 pb-2">
                                    <p className="text-[11px] fade-in dark:text-[#F5F6F7]">
                                        Service
                                    </p>
                                </div> 
                            )}
                            <div className="inline-block relative w-full">
                                <select
                                    className="cursor-pointer text-gray-400 dark:text-[#F5F8FA] py-3 text-sm block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded-[2px] leading-tight focus:outline-none dark:border-[#2D3E50] dark:bg-[#2D3E50] focus:border-[#348C79] dark:focus:border-[#6941C6]"
                                    style={{
                                        color: isSoftMode ? "#e1e1e1" : lables.showService ? "#000" : "#A6ADB7",
                                    }}
                                    defaultValue=""
                                    onChange={(v) => setLables({...lables, showService: v})}
                                >
                                    <option value="" disabled hidden>Select Service</option>
                                    {services.map((service, index) => (
                                        <option key={index} value={service} className="text-gray-600 dark:text-[#F5F6F7]">{service}</option>
                                    ))}
                                </select>

                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400 dark:text-gray-400">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                            <div className="w-full md:w-1/2 pb-2">
                                {lables.showMessage && (
                                    <p className="text-[11px] fade-in dark:text-[#F5F6F7]">
                                        Message
                                    </p>
                                )}
                            </div> 
                            <textarea className="outline-none border p-4 text-sm rounded-[4px] w-full dark:text-[#F5F8FA] dark:border-[#2D3E50] dark:bg-[#2D3E50] focus:border-[#348C79] dark:focus:border-[#6941C6]"
                                    placeholder="Type your message here..."
                                    onChange={(v) => setLables({...lables, showMessage: v.target.value})}
                            />

                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                            <button type="button" className="font-medium rounded-[2px] text-sm px-4 py-2 text-center inline-flex items-center me-2 mb-2 border border-[#348C79] bg-[#348C79] dark:border-[#6941C6] dark:bg-[#6941C6]">
                                <IoIosSend className="mr-1 w-4 h-4 text-white" />
                                <span className="text-[12px] text-white dark:text-[#F5F8FA]">Send Message</span>
                            </button>
                        </div>
                    </div>
                </form>
            </Box>
        </Box>
    )
}