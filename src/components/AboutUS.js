import React from "react";
import Button from "./Button";
import Footer from "./Footer";
import Header from "./Header";

const AboutUS = () => {
  return (
    <section className="w-full max-h-[100vh]">
      <Header />
      <div className="w-full min-h-[82vh] flex justify-center items-center">
        <div className="md:w-1/2 lg:w-1/2 w-full p-12">
          <h2 className="text-3xl text-center md:text-left lg:text-left text-sky-500 font-bold tracking-wide my-3">
            About Us
          </h2>
          <p className="text-justify md:text-left lg:text-left  tracking-wide text-lg my-10 md:my-3 lg:my-3 ">
            EzLoans is a finance management company which is providing the
            extensive array of services by providing loans to citizens, Money
            Transfer, Wealth Management and also leading on providing micro
            loans to agriculture and small businesses in rural regions.
          </p>
          <div className="w-full flex justify-center md:justify-start lg:justify-start my-10 md:my-0 lg:my-0 ">
            <Button title="Explore More" />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};
export default AboutUS;
