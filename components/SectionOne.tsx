import Image from "next/image";

import ContentContainer from "./ContentContainer";
const SectionOne = () => {
  return (
    <div className=" relative h-screen text-white">
      <Image
        src="/img/p-hero.png"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt="Background"
      />

      <ContentContainer>
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="absolute px-4 md:px-20 inset-0 w-full md:w-[800px] flex flex-col justify-center items-start p-4 text-left">
          <h1 className="text-4xl text-left font-bold mb-4">
            Empowering the Future of Human Resources
          </h1>
          <p className="mb-6">
            As a pioneering think tank and consultancy, HR Leaders Institute is
            at the forefront of transforming HR practices. We are focused on
            driving sustainable, inclusive, and business-focused futures for
            companies across the world.
          </p>

          <button className="bg-[#EA8219] py-2 px-4 rounded  transition duration-300">
            Contact us
          </button>
        </div>
      </ContentContainer>
    </div>
  );
};

export default SectionOne;
