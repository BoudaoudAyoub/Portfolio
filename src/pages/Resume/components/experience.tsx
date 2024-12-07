import { Box } from '@mui/material'
import dataset from '../dataset'
export default function Experience(){
    return(
        dataset.exp.map((elm, index) => {
            return(
                <>
                    <Box className="flex" key={index}>
                        <div className='w-[50px] h-[50px] p-1'>
                            <img src={`../../../public/imgs/${elm.logoUrl}`} className='rounded' />
                        </div>
                        <div className='grow block px-4'>
                            <div className='dark:text-[#F5F8FA] font-semibold'>{elm.company}</div>
                            <div className='text-[12px] dark:text-[#F5F8FA]'>{elm.duration}</div>
                        </div>
                    </Box>                
                    {elm.isNested && (
                        <div className='w-full mp-[15px]'>
                           {elm.items.map((item, index) => {
                                return(
                                    <div key={index} className='py-4 px-[4rem] relative'>
                                        <span className="absolute block rounded-full h-2 w-2 bg-border-low-emphasis top-[26px] left-[22px] bg-gray-500"></span>
                                        <span className='dark:text-[#F5F8FA] font-semibold'>{item.position}</span>
                                        <div className='block'>
                                            <div className='text-[12px] dark:text-[#F5F8FA]'>{item.duration}</div>
                                            <div className='text-[12px] dark:text-[#F5F8FA]'>{item.location}</div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </>
            )
        })
    )
}