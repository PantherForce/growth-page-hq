// components/ServiceSection.tsx
import React from "react";
import Image from "next/image";
import { services } from "./services";
import { Service } from "./service";
import ContentContainer from "./ContentContainer";

const ServiceSection: React.FC = () => {
  return (
    <ContentContainer>
      <div id="services" className="py-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-8 md:gap-16 mb-16`}
          >
            <div className="w-full md:flex-1">
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={400}
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <div className="flex flex-col w-full md:flex-1">
              <h3 className="text-2xl text-[#EA8219] font-semibold mb-4">
                {service.title}
              </h3>
              <p className="mb-4">{service.description}</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                {service.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <button className="mt-auto bg-[#EA8219] w-1/2 md:w-1/4 rounded-2xl text-white  py-2 px-4 transition duration-300 ease-in-out hover:bg-blue-700">
                Contact us
              </button>
            </div>
          </div>
        ))}
      </div>
    </ContentContainer>
  );
};

export default ServiceSection;
