import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/moving-border";
import { cn } from "@/utils/cn";

function HeroSection() {
  return (
    <div
      className={cn(
        "h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
      )}
    >
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="teal" />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Welcome to My Portfolio
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Hi, I am a CSE graduate from BP Poddar Institute of Technology and
          Management. My favorite topics are DBMS,DSA, web development, and OOPs. I
          code in Java for DSA questions and JavaScript for web development.
        </p>
        <div className="mt-4">
          <Link href={"/projects"}>
            <Button
              borderRadius="1.75rem"
              className={cn(
                "bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 transition-transform transform hover:scale-105"
              )}
            >
              View My Projects
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
