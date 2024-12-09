import dataset from '../dataset'
export default function AboutMe(){
    return(
        <ul className='grid grid-col-1 xl:grid-cols-2 gap-y-6 gap-x-4'>
            {dataset.aboutMe.map((elm, index) => (
                <li key={index}
                    className='cursor-pointer grid gap-2 p-2 rounded bg-[#E9F3FB] dark:bg-[#2D3E50] border-b-4 border-[#348C79] dark:border-[#4D29CC] hover:-translate-y-1 transition-all'
                >
                    <span className='dark:text-[#F5F8FA] text-[#2D3E50] semibold'>{elm.fieldName} :</span>
                    <span className='dark:text-[#F5F8FA] text-[#2D3E50] text-sm'>{elm.fieldValue}</span>
                </li>
            ))}
        </ul>
    )
}