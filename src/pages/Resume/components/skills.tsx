import dataset from '../dataset'
import { Tooltip, TooltipContent, TooltipTrigger } from '@radix-ui/react-tooltip';
export default function Skills(){
    return(
        dataset.skills.map((elm, index) => {
            return(
                <>
                    {/* {index > 0 && (
                        <span className={`flex ml-auto mr-[10px] border-b-[1px] my-5 border-gray-300 dark:border-gray-600`}></span>
                    )}                 */}
                    <div key={index} className={`block mb-4 ${index === dataset.skills.length - 1 ? 'mb-5' : ''}`}>
                        <div className='pb-3 text-[13px] font-bold text-[#2D3E50] dark:text-[#F5F8FA]'><span>{elm.category}</span></div>
                        <div className='grid grid-cols-3 md:grid-cols-5 xl:grid-cols-5 gap-3'>
                            {elm.items.map((item, i) => (
                                <Tooltip key={i}>
                                    <TooltipTrigger className={`cursor-pointer flex items-center justify-center w-[100px] h-[100px] bg-[#E9F3FB] dark:bg-[#2D3E50] border border-gray-300 dark:border-gray-600 rounded hover:boder-[#348C79] hover:border-[#348C79] dark:hover:border-[#6941C6] transition-all`}>                                           
                                        {!item.isImg ? (
                                            <item.icon className='w-10 h-10 text-[#2D3E50] dark:text-[#E9F3FB]' />
                                        ):(
                                            <img src={item.imge} className='w-10 h-10' />
                                        )}
                                    </TooltipTrigger>                                    
                                    <TooltipContent className='b-auto px-4 rounded bg-[#2D3E50] dark:bg-[#E9F3FB] shadow-md text-[#E9F3FB] dark:text-[#2D3E50]'>
                                        <p className='text-sm text-bold'>{item.name}</p>
                                    </TooltipContent>
                                </Tooltip>
                            ))}
                        </div>                        
                    </div>  
                </>
            )
        })
    )
}