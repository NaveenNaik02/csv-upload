import React, { useState } from "react";

type ButtonProps = {
  text?: string;
  icon?: React.ReactNode;
  dropDownValues: string[];
  rowId: string;
  callback: (rowId: string, selectedTag: string) => void;
};

const DropDownButton = ({
  text,
  icon,
  dropDownValues,
  rowId,
  callback,
}: ButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (value?: string) => {
    setIsOpen((prev) => !prev);
    if (value) {
      callback(rowId, value);
    }
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => toggleDropdown()}
        className="flex items-center justify-center p-1 w-36 gap-3 rounded-md border border-solid border-gray-200 bg-white text-[#231F20] focus:outline-none text-sm font-normal"
      >
        {text}
        {icon}
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-36 rounded-xl bg-white border border-solid border-gray-200">
          <ul className="p-2">
            {dropDownValues.map((value, index) => (
              <li
                key={index}
                onClick={() => toggleDropdown(value)}
                className="cursor-pointer rounded-xl py-1 px-2 hover:bg-gray-100"
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDownButton;
