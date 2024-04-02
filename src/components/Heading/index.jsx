import React from "react";

const sizes = {
  "2xl": "text-7xl font-extrabold md:text-5xl",
  xl: "text-[56px] font-extrabold md:text-5xl sm:text-[42px]",
  s: "text-sm font-black",
  md: "text-2xl font-bold md:text-[22px]",
  xs: "text-xs font-bold",
  lg: "text-[40px] font-extrabold md:text-[38px] sm:text-4xl",
};

const Heading = ({ children, className = "", size = "lg", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-epilogue ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
