import { FC } from "react";

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return (
    <div className="mt-24 p-8 text-center bg-gray-100 rounded-lg shadow-lg max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Graduation</h1>
      <img
        src="/college-pic.jpg"
        alt="BPPIMT"
        className="w-full h-auto rounded-lg mb-6"
      />
      <p className="text-lg text-gray-700 leading-relaxed">
        I graduated with a Bachelor of Technology (B.Tech) degree from
        <strong>
          {" "}
          B.P. Poddar Institute of Management and Technology (BPPIMT)
        </strong>
        , Kolkata. I achieved a CGPA of 7.3.
      </p>
    </div>
  );
};

export default Page;
