import { FC } from "react";

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return (
    <div className="mt-24 p-8 text-center bg-gray-100 rounded-lg shadow-lg max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">K-12 Education</h1>
      <img
        src="/school-pic.jpg"
        alt="Calcutta Public School"
        className="w-full h-auto rounded-lg mb-6"
      />
      <p className="text-lg text-gray-700 leading-relaxed">
        I completed my K-12 education at <strong>Calcutta Public School</strong>
        . I scored <strong>86%</strong> in my 10th grade and{" "}
        <strong>83%</strong> in my 12th grade.
      </p>
    </div>
  );
};

export default Page;
