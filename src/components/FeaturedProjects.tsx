"use client";
import Link from "next/link";
import courseData from "../data/projects.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
 
  isFeatured: boolean;
}

function FeaturedProjects() {
  const featuredCourse = courseData.projects.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-700 font-semibold tracking-wide uppercase">
            Featured Projects
          </h2>
          <p className="mt-2 text-3xl landing-8 font-extrabold tracking-tight text-white sm:text-4xl">
            A Peek Into My Work
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-col-1 sm:grid-col-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourse.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {course.description}
                  </p>
                  <Link href={`/courses/${course.slug}`}>Learn More</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default FeaturedProjects;
