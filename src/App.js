import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUS from "./components/AboutUS";
import EmiCalculator from "./components/EmiCalculator";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import ServicePage from "./components/ServicePage";
import UpdateProfile from "./components/UpdateProfile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUS />} />
        <Route path="/services/:id" element={<ServicePage />} />
        <Route path="/update-profile" element={<UpdateProfile />} />
        <Route path="/emi-calculator" element={<EmiCalculator />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
