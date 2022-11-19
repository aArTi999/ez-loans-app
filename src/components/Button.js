import React from "react";

const Button = ({ title, onClick, type = "button" }) => {
  return (
    <button
      className="bg-sky-500 text-white font-bold px-6 py-2 rounded-md my-2"
      onClick={onClick}
      type={type}
    >
      {title}
    </button>
  );
};
export default Button;
