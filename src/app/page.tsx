import React from "react";
import Navbar from "../../components/Navbar";
import SectionOne from "../../components/SectionOne";
import ServiceSection from "../../components/ServiceSection";
import InsightSection from "../../components/InsightSection";
import Footer from "../../components/Footer";
import Form from "../../components/Form";

const page = () => {
  return (
    <>
      <Navbar />
      <SectionOne />
      <ServiceSection />
      <InsightSection />
      <Form />
      <Footer />
    </>
  );
};

export default page;
