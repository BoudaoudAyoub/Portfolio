import dataset from '../dataset'
import { FaRegBuilding } from "react-icons/fa";
export default function Education(){
    return(
        dataset.educations.map((elm, index) => {
            return(
                <ul>
                    {index > 0 && (
                        <span className={`flex w-[91%] ml-auto border-b-[1px] my-5 border-gray-300 dark:border-gray-600`}></span>
                    )}
                    <div className={`flex`} key={index}
                        style={{
                            marginBottom: index == dataset.educations.length - 1 ? '100px' : ''
                        }}
                    >
                        <div className='w-[50px] h-[50px] p-1'>
                            {elm.logoUrl ? (
                                <img src={`../../../public/imgs/${elm.logoUrl}`} className='rounded' />
                            ):(
                                <FaRegBuilding className='w-[80%] h-[80%] m-auto text-gray-500' />
                            )}
                        </div>
                        <div className='grow block px-4'>
                            <div className='dark:text-[#F5F8FA] font-semibold'>{elm.institution}</div>
                            {!elm.isNested && (
                                <div className='text-[12px] mb-1 dark:text-[#F5F8FA]'>{elm.degree}</div>
                            )}
                            <div className='text-[12px] dark:text-[#F5F8FA]'>{elm.duration}</div>
                            {!elm.isNested && (
                                <div className='text-[12px] dark:text-[#F5F8FA]'>{elm.location}</div>
                            )}
                        </div>
                    </div>                
                    {elm.isNested && (
                        <div className='w-full'>
                           {elm.items?.map((item, index) => {
                                return(
                                    <div key={index} className='py-4 px-[4rem] relative'>
                                        <span className="absolute block rounded-full h-2 w-2 bg-border-low-emphasis top-[26px] left-[22px] bg-gray-500"></span>
                                        <span className='dark:text-[#F5F8FA] font-semibold'>{item.degree}</span>
                                        <div className='block'>
                                            <div className='text-[12px] dark:text-[#F5F8FA]'>{item.duration}</div>
                                            <div className='text-[12px] dark:text-[#F5F8FA]'>{item.location}</div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </ul>
            )
        })
    )
}