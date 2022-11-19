import React, { useState } from "react";
import DropDown from "./DropDown";
import { allServices } from "../data";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const toggle = () => {
    setIsClicked(!isClicked);
  };
  const navigate = useNavigate();

  const onChange = (e) => {
    navigate(`/services/${e.target.value}`);
  };
  return (
    <header className="w-full h-[10vh] bg-sky-500 flex text-white justify-between items-center font-Merriweather relative ">
      <div className="flex md:justify-around lg:justify-around w-full items-center justify-between  lg:w-1/2 md:w-1/2 ">
        <h3
          className="text-2xl font-bold px-4 md:px-0 lg:px-0  md:w-2/5 lg:w-2/5 text-left md:text-center lg:text-center tracking-wider cursor-pointer"
          onClick={() => navigate("/")}
        >
          EzLoans
        </h3>
        <div className="md:hidden lg:hidden px-4 ">
          {isClicked ? (
            <ImCross onClick={() => toggle()} className="text-2xl" />
          ) : (
            <GiHamburgerMenu onClick={() => toggle()} className="text-2xl" />
          )}
        </div>
        {isClicked && (
          <div className="lg:hidden md:hidden overflow-hidden w-2/4 min-h-[30vh] bg-white my-12 absolute top-9 right-0 rounded-bl-lg transition-all ease-in delay-300 ">
            <ul className="divide-y divide-slate-300 shadow-md text-black flex flex-col justify-between text-center items-center ">
              <li className="py-4 w-full " onClick={() => navigate("/about")}>
                About Us
              </li>
              <li className="py-4 w-full ">
                <select
                  name=""
                  id=""
                  onChange={(e) => onChange(e)}
                  className="appearance-none focus:outline-none active:outline-none text-center overflow-hidden"
                >
                  <option disabled selected>
                    Services
                  </option>
                  {allServices.map((service, index) => (
                    <option value={index}>{service.type}</option>
                  ))}
                </select>
              </li>
              <li
                className="py-4 w-full "
                onClick={() => navigate("/emi-calculator")}
              >
                EMI Calculator
              </li>
              <li
                className="py-4 w-full "
                onClick={() => navigate("/register")}
              >
                Register
              </li>
              <li className="py-4 w-full " onClick={() => navigate("/login")}>
                Login
              </li>
            </ul>
          </div>
        )}

        <ul className=" w-4/5 justify-around cursor-pointer hidden md:flex lg:flex ">
          <li onClick={() => navigate("/about")} className="">
            About Us
          </li>
          <li>
            <DropDown options={allServices} title="Services" />
          </li>
        </ul>
      </div>
      <div className=" justify-around items-center w-2/5 hidden md:flex lg:flex ">
        <ul className=" w-full justify-around cursor-pointer flex">
          <li onClick={() => navigate("/emi-calculator")} className="">
            EMI Calculator
          </li>
          <li onClick={() => navigate("/register")} className="">
            Join as a Member
          </li>
          <li onClick={() => navigate("/update-profile")} className="">
            Update Profile
          </li>
          <li onClick={() => navigate("/login")} className="">
            Login
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
