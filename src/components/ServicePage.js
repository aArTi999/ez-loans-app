import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { allServices } from "../data";
import { useParams } from "react-router-dom";
const ServicePage = () => {
  const param = useParams();
  return (
    <section className="w-full max-h-[100vh]">
      <Header />
      <div className="w-full min-h-[82vh]">
        <div className="w-full p-12">
          <h2 className="md:text-6xl lg:text-6xl text-3xl text-center md:text-left lg:text-left text-sky-500 font-bold tracking-wide my-3">
            {allServices[param.id].type}
          </h2>
          <p className="my-5 md:my-3 lg:my-3 text-center md:text-left lg:text-left tracking-wider text-lg">
            {allServices[param.id].description}
          </p>
          <hr />
          {allServices[param.id].code != "WM" ? (
            allServices[param.id].detail.map((detail) => (
              <div className="my-3 text-center md:text-left lg:text-left gap-5 md:gap-0 lg:gap-0">
                <h4 className="text-2xl my-2">Type: {detail.type}</h4>
                <ul className="leading-7 text-md">
                  <li>Minimum Amount: {detail.min}.</li>
                  <li>Maximum Amount: {detail.max}</li>
                  <li>Tenure: {detail.tenure} (days/month)</li>
                </ul>
              </div>
            ))
          ) : (
            <div className="my-3   ">
              <ul className="leading-7 text-md flex flex-col gap-2 list-disc">
                {allServices[param.id].detail.map((detail) => (
                  <li>{detail}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </section>
  );
};
export default ServicePage;
