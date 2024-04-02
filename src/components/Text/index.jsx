import React from "react";

const sizes = {
  xs: "text-sm font-normal",
  s: "text-base font-normal",
  md: "text-xl font-normal",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-epilogue ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
