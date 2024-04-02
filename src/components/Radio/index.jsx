import React from "react";
import PropTypes from "prop-types";

const variants = {
  primary:
    "border-blue_gray-100 border border-solid bg-white-A700 checked:border-blue_gray-100 checked:border checked:border-solid checked:bg-white-A700 checked:focus:bg-white-A700 checked:focus:border-blue_gray-100",
};
const sizes = {
  xs: "",
  sm: "h-[16px] w-[16px] rounded-lg",
};

const Radio = React.forwardRef(
  ({ className = "", name = "", label = "", id = "radio_id", variant = "primary", size = "xs", ...restProps }, ref) => {
    return (
      <label className={className + " flex items-center gap-[5px] cursor-pointer"}>
        <input
          className={` ${(size && sizes[size]) || ""} ${(variant && variants[variant]) || ""}`}
          ref={ref}
          type="radio"
          name={name}
          {...restProps}
          id={id}
        />
        <span>{label}</span>
      </label>
    );
  },
);

Radio.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["primary"]),
};

export { Radio };
