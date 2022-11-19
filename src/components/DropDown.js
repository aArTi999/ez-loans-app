import React from "react";
import { useNavigate } from "react-router-dom";

const DropDown = ({ options, title }) => {
  const navigate = useNavigate();
  const onChange = (e) => {
    navigate(`/services/${e.target.value}`);
  };
  return (
    <div className="relative bg-sky-500">
      <select
        className="bg-sky-500  text-white outline-none px-3 appearance-none"
        onChange={(e) => onChange(e)}
      >
        <option className="bg-sky-700 " disabled selected>
          {title}
        </option>
        {options.map((option, index) => (
          <option className="bg-sky-700 " value={index}>
            {option.type}
          </option>
        ))}
      </select>
    </div>
  );
};
export default DropDown;
