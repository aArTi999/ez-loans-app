import React from "react";

const Footer = () => {
  return (
    <div className="bg-sky-500 text-white font-bold  min-h-[8vh] w-full flex items-center justify-center">
      copyright &copy; {new Date().getFullYear()} EzLoans All Rights Reserved.
    </div>
  );
};
export default Footer;
