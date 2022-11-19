import React from "react";
import Header from "./Header";
import money2 from "../assets/money2.jpg";
import home from "../assets/home.jpg";
import { allServices } from "../data";
import Footer from "./Footer";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full min-h-screen ">
      <Header />
      <div
        className="min-w-full h-[50vh]"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${money2})`,
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-3xl text-white font-bold w-1/2 px-10 py-5">
          If you're not making mistakes, then you're not doing anything.....
        </h2>
      </div>
      <div className="my-10">
        <h3 className="text-2xl font-bold text-center text-sky-500 ">
          An Hub For Your Financial Needs
        </h3>
        <p className="text-md tracking-wider text-center w-1/2 mx-auto my-5">
          We offer the extensive array of services by providing loans to
          citizens, Money Transfer, Wealth Management and also leading on
          providing micro loans to agriculture and small businesses in rural
          regions.
        </p>
      </div>
      <div className="flex flex-col">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-center text-sky-500 ">
            Our Services
          </h3>
        </div>
        <div className="flex flex-col justify-center items-center md:items-start lg:items-start md:justify-around lg:justify-around px-4 gap-10 md:flex-row lg:flex-row my-12 ">
          {allServices.map((service, index) => (
            <div className="w-4/5 max-h-1/3 md:w-1/4 lg:w-1/4 border-solid border-2 border-slate-200 p-3 shadow-md rounded-md text-center">
              <img src={service.imgUrl} />
              <h5 className="my-3">{service.type}</h5>
              <p>{service.description}</p>
              <Button
                title="more details"
                onClick={() => navigate(`services/${index}`)}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};
export default Home;
