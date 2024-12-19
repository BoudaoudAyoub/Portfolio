import CountUp from 'react-countup';
import IStatistics from "./IStatistics";
export const Statistics = () => {

    const stats: IStatistics[] = [
        {
           num: 5,
           name: "Years of expérience" 
        },
        {
            num: 8,
            name: "Technologies mastred" 
        },
        {
            num: 300,
            name: "Code commits" 
        }
    ]

    return(
        <div className="flex flex-wrap gap-6 max-w-[88vm] mx-auto xl:w-full mr-[4rem]">
            {stats.map((item, index) => {
                return(
                    <div className={`flex-1 flex gap-3 items-center justify-center 
                        ${index === 0 ? 'xl:justify-start' : index === stats.length - 1 ? 'xl:justify-end' : ''} text-[18px] text-[#1A3235] dark:text-[#F3F6FE]`} 
                        key={index}
                    >
                        <CountUp 
                            end={item.num}
                            duration={5}
                            delay={2}
                            className="text-4xl text-[30px] front-extrabold"
                        />
                        <p className={`xl:max-w-[100%] ${item.name.length < 15 ? "max-w-[100px]": "max-w-[150px]"} leading-snug`}>{item.name}</p>
                    </div>
                )
            })}
        </div>
    )
}