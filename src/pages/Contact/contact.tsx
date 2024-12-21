import { Box } from "@mui/material";

export default function Works() {
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
                <form className="w-full mt-4">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <input className="text-sm appearance-none block w-full text-gray-700 border rounded-[2px] border border-gray-300 py-3 px-4 mb-3 leading-tight focus:outline-none dark:text-[#F5F8FA] dark:border-[#2D3E50] dark:bg-[#2D3E50] focus:border-[#348C79] dark:focus:border-[#6941C6]" 
                                    id="grid-first-name" 
                                    type="text"
                                    placeholder="Firstname"
                                    autoComplete="false"
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <input className="text-sm appearance-none block w-full text-gray-700 border border-gray-300 rounded-[2px] py-3 px-4 leading-tight focus:outline-none dark:text-[#F5F8FA] dark:border-[#2D3E50] dark:bg-[#2D3E50] focus:border-[#348C79] dark:focus:border-[#6941C6]" 
                                    id="grid-last-name" 
                                    type="text" 
                                    placeholder="Lastname"
                                    autoComplete="false"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <input className="text-sm appearance-none block w-full text-gray-700 border border-gray-300 rounded-[2px] py-3 px-4 mb-3 leading-tight focus:outline-none dark:text-[#F5F8FA] dark:border-[#2D3E50] dark:bg-[#2D3E50] focus:border-[#348C79] dark:focus:border-[#6941C6]" 
                                    id="email" 
                                    type="email"
                                    placeholder="Email Address"
                                    autoComplete="false"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <input className="text-sm appearance-none block w-full text-gray-400 border border-gray-300 rounded-[2px] py-3 px-4 mb-3 leading-tight focus:outline-none dark:text-[#F5F8FA] dark:border-[#2D3E50] dark:bg-[#2D3E50] focus:border-[#348C79] dark:focus:border-[#6941C6]" 
                                    id="phone" 
                                    type="phone"
                                    placeholder="Phone Number"
                                    autoComplete="false"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <div className="inline-block relative w-full">
                                <select className="text-gray-400 block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded-[2px] leading-tight focus:outline-none dark:text-[#F5F8FA] dark:border-[#2D3E50] dark:bg-[#2D3E50] focus:border-[#348C79] dark:focus:border-[#6941C6]">
                                    <option>Select Service</option>
                                    <option>Web Development</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-400">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <textarea className="p-4 text-sm rounded-[4px] w-full dark:text-[#F5F8FA] dark:border-[#2D3E50] dark:bg-[#2D3E50] focus:border-[#348C79] dark:focus:border-[#6941C6]"
                                    placeholder="Type your message here..."
                            />

                        </div>
                    </div>
                    {/* <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-4">
                                    <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                                        Username
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                            <input
                                                id="username"
                                                name="username"
                                                type="text"
                                                placeholder="janesmith"
                                                className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">
                                        About
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                        id="about"
                                        name="about"
                                        rows={3}
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        defaultValue={''}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </form>
            </Box>
        </Box>
    )
}