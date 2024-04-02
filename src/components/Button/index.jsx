import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-md",
  circle: "rounded-[50%]",
};
const variants = {
  fill: {
    purple_A200: "bg-purple-A200 text-white-A700",
    white_A700: "bg-white-A700 shadow-xs text-gray-900",
    deep_orange_400_01: "bg-deep_orange-400_01 text-white-A700",
  },
  outline: {
    white_A700_4b: "border-white-A700_4b border border-solid text-white-A700",
  },
};
const sizes = {
  xs: "h-[48px] px-[27px] text-sm",
  sm: "h-[48px] px-[11px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "sm",
  color = "deep_orange_400_01",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["purple_A200", "white_A700", "deep_orange_400_01", "white_A700_4b"]),
};

export { Button };
