import React from "react";

type ButtonProps = {
  text: string;
  color?: string;
  icon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
const Button = ({ text, icon, onClick, color = "#605BFF" }: ButtonProps) => {
  const buttonStyle: Record<string, string> = {
    backgroundColor: color,
  };

  return (
    <button
      style={buttonStyle}
      className="flex items-center justify-center p-2 rounded-lg text-white focus:outline-none w-full"
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </button>
  );
};

export default Button;
