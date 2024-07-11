"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import ProjectData from "./projdata.json";
import Link from "next/link";
import { cn } from "@/utils/cn";

function Page() {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
        All Projects ({ProjectData.projects.length})
      </h1>
      <div className="flex flex-wrap justify-center">
        {ProjectData.projects.map((project) => (
          <CardContainer key={project.id} className="inter-var m-4">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {project.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {project.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={project.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={project.title}
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  <Link
                    href={project.liveurl}
                    target="_blank"
                    className={cn("bg-white text-2xl text-black")}
                  >
                    Live
                  </Link>
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  <Link
                    href="https://www.github.com/roshan-jha-23"
                    target="_blank"
                  >
                    Details
                  </Link>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
      <div className="flex flex-row items-center justify-center">
        <h2 className="text-2xl font-semibold justify-center items-start">
          Many More to come....
        </h2>
      </div>
    </div>
  );
}

export default Page;
