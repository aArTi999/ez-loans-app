import React, { useState } from "react";
import { allServices, EmiServices } from "../data";
import Button from "./Button";
import Footer from "./Footer";
import Header from "./Header";

const EmiCalculator = () => {
  const [emi, setEmi] = useState({
    loantype: "",
    loancode: "",
    loanamount: "",
    tenure: "",
  });
  const [errMsg, setErrMsg] = useState({
    loantype: "required",
    loancode: "required",
    loanamount: "required",
    tenure: "required",
  });
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");
  const onChange = (e) => {
    const { name, value } = e.target;
    setEmi({ ...emi, [name]: value });
    validateField(name, value);
  };
  const validateField = (name, value) => {
    if (value.length) {
      setErrMsg({ ...errMsg, [name]: "" });
    } else {
      setErrMsg({ ...errMsg, [name]: `${name} is required` });
    }
  };
  const calculateEmi = (amount, rate, time) => {
    let interest = (amount * (rate * 0.01)) / time;
    let emi = (amount / time + interest).toFixed(2);
    setSuccess(`your calculated emi is ${emi}`);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      errMsg.loantype != "" ||
      errMsg.loancode != "" ||
      errMsg.loanamount != "" ||
      errMsg.tenure != ""
    ) {
      return setErr("Please fill all the mandatory fields.");
    }
    let { min, max, tenure, rate } =
      EmiServices[emi.loantype].detail[emi.loancode];
    if (min > emi.loanamount || max < emi.loanamount) {
      return setErr(`Amount should be between ${min} and ${max}`);
    }
    if (tenure != emi.tenure) {
      return setErr(`Tenure should  be equals to ${tenure}`);
    }
    setErr("");
    calculateEmi(emi.loanamount, rate, emi.tenure / 28);
  };
  return (
    <section className="w-full max-h-[100vh]">
      <Header />
      <div className="w-full min-h-[82vh] flex justify-center items-center">
        <div className="w-4/5 md:w-1/2  lg:w-1/2   flex flex-col justify-center  border-solid border-2 border-slate-200 p-3 shadow-md rounded-md bg-slate-100">
          <h2 className="my-1 text-2xl text-sky-500 font-bold text-center ">
            EMI Calculator
          </h2>
          <p className="text-center">
            (please check the minimum and maximum loan amount before checking.)
          </p>
          <form action="" onSubmit={handleSubmit}>
            <div className="flex flex-col my-1">
              <label htmlFor="loantype" className="my-1 text-xl text-slate-500">
                Loan Type:
              </label>

              <select
                name="loantype"
                id=""
                value={EmiServices.loantype}
                onChange={(e) => onChange(e)}
                className="py-1 w-3/4 border-2 border-slate-300 border-solid rounded-md px-2 focus:outline-none active:outline-none"
              >
                <option value="select" selected>
                  --select--
                </option>
                {EmiServices.map((service, index) => (
                  <option value={index}>{service.type}</option>
                ))}
              </select>
              <span className="text-sm text-red-500">
                {errMsg.loantype.length ? errMsg.loantype : ""}
              </span>
            </div>
            <div className="flex flex-col my-1">
              <label htmlFor="loancode" className="my-1 text-xl text-slate-500">
                Code:
              </label>

              <select
                name="loancode"
                value={emi.loancode}
                onChange={(e) => onChange(e)}
                id=""
                className="py-1 w-3/4 border-2 border-slate-300 border-solid rounded-md px-2 focus:outline-none active:outline-none"
              >
                <option value="select" selected>
                  --select--
                </option>
                {emi.loantype &&
                  EmiServices[emi.loantype].detail.map((service, index) => (
                    <option value={index}>{service.type}</option>
                  ))}
              </select>
              <span className="text-sm text-red-500">
                {errMsg.loancode.length ? errMsg.loancode : ""}
              </span>
            </div>
            <div className="flex flex-col my-1">
              <label
                htmlFor="loanamount"
                className="my-1 text-xl text-slate-500"
              >
                Loan Amount:
              </label>
              <input
                name="loanamount"
                value={emi.loanamount}
                onChange={(e) => onChange(e)}
                type="text"
                className="py-1 w-3/4 border-2 border-slate-300 border-solid rounded-md px-2 focus:outline-none active:outline-none"
              />
              <span className="text-sm text-red-500">
                {errMsg.loanamount.length ? errMsg.loanamount : ""}
              </span>
            </div>
            <div className="flex flex-col my-1">
              <label htmlFor="tenure" className="my-1 text-xl text-slate-500">
                Tenure:
              </label>
              <input
                name="tenure"
                value={emi.tenure}
                onChange={(e) => onChange(e)}
                type="text"
                className="py-1 w-3/4 border-2 border-slate-300 border-solid rounded-md px-2 focus:outline-none active:outline-none"
              />
              <span className="text-sm text-red-500">
                {errMsg.tenure.length ? errMsg.tenure : ""}
              </span>
            </div>
            <div className="flex flex-col">
              <div>
                <Button title="Submit" type="submit" />
              </div>
              <span className="text-sm text-red-600">
                {err.length ? err : ""}
              </span>
              <span className="text-sm text-green-600">
                {success.length ? success : ""}
              </span>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </section>
  );
};
export default EmiCalculator;
