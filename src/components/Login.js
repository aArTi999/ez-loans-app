import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Footer from "./Footer";
import Header from "./Header";

const Login = () => {
  const API_URL = "http://localhost:4000/members";
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [errMsg, setErrMsg] = useState({
    username: "required",
    password: "required",
  });
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    validateField(name, value);
  };
  const validateField = (name, value) => {
    if (value.length) {
      setErrMsg({ ...errMsg, [name]: "" });
    }
    switch (name) {
      case "password":
        setErrMsg({
          ...errMsg,
          [name]:
            value.length < 8 || value.length > 12
              ? "Password should have 8 to 12 characters"
              : "",
        });
        break;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (errMsg.username != "" || errMsg.password != "") {
      return alert("Please enter all values");
    }
    axios
      .get(`${API_URL}?username=${user.username}&password=${user.password}`)
      .then((response) => {
        console.log(response.data);
        if (response.data.length > 0) {
          localStorage.setItem("finance", JSON.stringify(response.data[0]));
          setSuccess("user logged in successfully");
          setErr("");
          navigate(`/`);
        }
        setErr("Invalid Credentials");
      })
      .catch((err) => {
        console.log(err);
        setErr("Invalid Credentials");
      });
  };
  return (
    <section className="w-full max-h-[100vh]">
      <Header />
      <div className="w-full min-h-[82vh] flex justify-center items-center">
        <div className="w-4/5 md:w-1/3  lg:w-1/3   flex flex-col justify-center  border-solid border-2 border-slate-200 p-3 shadow-md rounded-md bg-slate-100">
          <h2 className="my-1 text-2xl text-sky-500 font-bold text-center ">
            Login
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col my-1">
              <label htmlFor="username" className="my-1 text-xl text-slate-500">
                UserID:
              </label>
              <input
                name="username"
                value={user.username}
                onChange={(e) => handleChange(e)}
                type="text"
                className="py-1 w-3/4 border-2 border-slate-300 border-solid rounded-md px-2 focus:outline-none active:outline-none"
              />
              <span className="text-sm text-red-700">
                {errMsg.username.length ? errMsg.username : ""}
              </span>
            </div>

            <div className="flex flex-col my-1">
              <label htmlFor="password" className="my-1 text-xl text-slate-500">
                Password:
              </label>
              <input
                name="password"
                value={user.password}
                onChange={(e) => handleChange(e)}
                type="password"
                className="py-1 w-3/4 border-2 border-slate-300 border-solid rounded-md px-2 focus:outline-none active:outline-none"
              />
              <span className="text-sm text-red-700">
                {errMsg.password.length ? errMsg.password : ""}
              </span>
            </div>
            <div className="flex flex-col">
              <Button title="Login" type="submit" />
              <span className="text-sm text-red-700 text-center">
                {err.length ? err : ""}
              </span>
              <span className="text-sm text-red-700 text-center">
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
export default Login;
