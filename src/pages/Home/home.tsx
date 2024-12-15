import LeftHomeContent from "./components/leftcontent";
import RightHomeContent from "./components/rightcontent"; 
import { Statistics } from "./components/Statistics/statistics";

export default function Home() {
  return (
    <>
      <div className="h-screen px-8 xl:px-[48px] xl:pl-28 flex flex-col justify-center items-center space-y-8 h-full overflow-x-hidden">
        <div className="h-auto w-full flex justify-center">
          <div className="flex flex-col xl:flex-row items-center justify-between w-full">
            <LeftHomeContent />
            <RightHomeContent />
          </div>
        </div>
        <div className="h-auto w-full flex justify-center">
          <Statistics />
        </div>
      </div>
    </>
  );
}