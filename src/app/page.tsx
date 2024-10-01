import Image from "next/image";
import Card from "./components/Card";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Card name="Takia" age={23} rollno={488009} class="Monday 2 to 5" image="/checktapak.png"/>
        <Card name="Harsh" age={35} rollno={757603} class="Monday 2 to 5" image="/harsh.png"/>
        <Card name="Momin" age={30} rollno={344500} class="Monday 2 to 5" image="/momin.png"/>
      </main>
      </div>
  );
}
