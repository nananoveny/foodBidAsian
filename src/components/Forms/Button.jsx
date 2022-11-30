import React from "react";
import cn from "classnames";

export const colorSchemeValue = {
  none: "",
  primary: "bg-sig-red text-white",
  danger: "bg-red-600 text-white",
  info: "bg-sky-500 text-white",
  light: "text-gray-500 bg-white border border-gray-300",
  yel: "bg-[#ec971f] text-white ",
  dark: "bg-black text-white",
};

const Button = ({ className, color = "primary", children, ...props }) => {
  return (
    <button
      className={cn(
        "box-border py-1.5 px-3 max-h-10 rounded cursor-pointer disabled:opacity-70 disabled:cursor-no-drop whitespace-nowrap transition duration-500 ease select-none focus:outline-none focus:shadow-outline",
        colorSchemeValue[color],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
