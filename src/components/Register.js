import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Footer from "./Footer";
import Header from "./Header";

const Register = () => {
  const API_URL = "http://localhost:4000/members";
  const [user, setUser] = useState({
    username: "",
    mobile: "",
    password: "",
  });
  const navigate = useNavigate();
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");
  const [errMsg, setErrMsg] = useState({
    username: "required",
    mobile: "required",
    password: "required",
  });
  const validateFields = (name, value) => {
    if (value.length) {
      setErrMsg({ ...errMsg, [name]: "" });
      switch (name) {
        case "mobile":
          setErrMsg({
            ...errMsg,
            mobile:
              value.length == 10
                ? ""
                : "Mobile Number should contain 10 digits",
          });
          break;
        case "password":
          setErrMsg({
            ...errMsg,
            password:
              value.length < 8 || value.length > 12
                ? "Password should contain minimum of 8 characters and maximum of 12 characters"
                : "",
          });
          break;
      }
    } else {
      setErrMsg({ ...errMsg, [name]: `${name} is required` });
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    validateFields(name, value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (errMsg.username != "" || errMsg.password != "" || errMsg.mobile != "") {
      return setErr("All mandatory fields are required.");
    } else {
      setErr("");
    }
    axios
      .post(API_URL, user)
      .then((res) => {
        setSuccess("User added successfully!!");
        setUser({
          username: "",
          mobile: "",
          password: "",
        });
        navigate("/login");
      })
      .catch((err) => setErr("Something went wrong"));
  };
  return (
    <section className="w-full min-h-[100vh]">
      <Header />
      <div className="w-full min-h-[82vh] flex justify-center items-center">
        <div className="w-4/5 md:w-1/3  lg:w-1/3  flex flex-col justify-center  border-solid border-2 border-slate-200 p-3 shadow-md rounded-md bg-slate-100">
          <h2 className="my-1 text-2xl text-sky-500 font-bold text-center ">
            Join As A Member
          </h2>

          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="flex flex-col my-1">
              <label htmlFor="username" className="my-1 text-xl text-slate-500">
                Username:
              </label>
              <input
                name="username"
                type="text"
                value={user.username}
                onChange={(e) => handleChange(e)}
                className="py-1 w-3/4 border-2 border-slate-300 border-solid rounded-md px-2 focus:outline-none active:outline-none"
              />
              <span className="text-sm text-red-600">
                {errMsg.username.length ? errMsg.username : ""}
              </span>
            </div>
            <div className="flex flex-col my-1">
              <label htmlFor="mobile" className="my-1 text-xl text-slate-500">
                Mobile No:
              </label>
              <input
                name="mobile"
                type="text"
                value={user.mobile}
                onChange={(e) => handleChange(e)}
                className="py-1 w-3/4 border-2 border-slate-300 border-solid rounded-md px-2 focus:outline-none active:outline-none"
              />
              <span className="text-sm text-red-600">
                {errMsg.mobile.length ? errMsg.mobile : ""}
              </span>
            </div>
            <div className="flex flex-col my-1">
              <label htmlFor="password" className="my-1 text-xl text-slate-500">
                Password:
              </label>
              <input
                name="password"
                type="password"
                value={user.password}
                onChange={(e) => handleChange(e)}
                className="py-1 w-3/4 border-2 border-slate-300 border-solid rounded-md px-2 focus:outline-none active:outline-none"
              />
              <span className="text-sm text-red-600">
                {errMsg.password.length ? errMsg.password : ""}
              </span>
            </div>
            <div className="flex flex-col">
              <div>
                <Button title="Sign Up" type="submit" />{" "}
              </div>
              <span className="text-center text-sm text-red-600">
                {err.length ? err : ""}
              </span>
              <span className="text-center text-sm text-green-700">
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
export default Register;
