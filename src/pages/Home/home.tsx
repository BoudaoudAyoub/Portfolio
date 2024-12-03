
import LeftHomeContent from "./components/leftcontent";
import RightHomeContent from "./components/rightcontent";
export default function Home() {
  return (
    <section className="w-full h-[90vh] grid grid-cols-2 gap-1">
        <LeftHomeContent />
        <RightHomeContent />
    </section>
  );
}