import LeftHomeContent from "./components/leftcontent";
import RightHomeContent from "./components/rightcontent"; 
import { Statistics } from "./components/Statistics/statistics";

export default function Home() {
  return (
    <>
      <div className="h-full px-8 xl:px-[48px] xl:pl-28 xl:pb-12">
        <div className="mx-auto h-full xl:pb-[10x]">
          <div className="flex flex-col xl:flex-row items-center justify-between">
            <LeftHomeContent />
            <RightHomeContent />
          </div>
        </div>
      </div>
      <div className="h-full px-8 xl:px-28">
        <Statistics />
      </div>
    </>
  );
}