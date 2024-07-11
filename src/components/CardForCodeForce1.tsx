"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

// Define props type
interface CF {
  handle: string;
  firstName: string;
  country: string;
  rank: string;
  rating: number;
  avatar: string;
}
export function CardForCF({
  handle,
  firstName,
  country,
  rank,
  rating,
  avatar,
}: CF) {
  return (
    <div className="bg-gray-700 p-4 rounded-lg shadow-md text-left">
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Username: {handle}
          </CardItem>
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            First Name: Roshan
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Resides In:India
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={avatar}
              height={1000}
              width={1000}
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Ranking: {rank}
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Rating: Unrated
            </CardItem>
            <Link
              href="https://codeforces.com/profile/RoshanJha23/"
              target="_blank"
            >
              Visit Site
            </Link>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
