"use client";
import React from "react";

const skills = [
  {
    title: "Languages",
    description: "Java, JavaScript, TypeScript, SQL, NoSQL, HTML, CSS",
    icon: "🖥️",
  },
  {
    title: "Databases",
    description: "MongoDB, PostgreSQL, MySQL, Redis,Prisma",
    icon: "🗄️",
  },
  {
    title: "Tools and Frameworks",
    description: "Node.js, React.js, Next.js, Docker, Tailwind CSS, Git",
    icon: "🔧",
  },
  {
    title: "My Coding Profiles",
    description: "LeetCode, GFG, CodeForce",
    icon: "💻",
  },


  
];

function WhyChooseMe() {
  return (
    <div className="py-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Why Choose Me</h2>
          <p className="text-xl">
            Discover the unique skills and advantages I bring to the table.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform transition-transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-700">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyChooseMe;
