import React from "react";
import { Img, Text } from "./..";

export default function WEBVersionLightfield({ viewFive, placeholder, imageTwo, ...props }) {
  return (
    <div {...props}>
      {!!viewFive ? (
        <div className="h-[48px] w-full border-deep_orange-100 border border-solid bg-white-A700 absolute rounded-md" />
      ) : null}
      <div className="flex justify-between items-start w-[93%] bottom-[14.97px] right-0 left-0 gap-5 m-auto absolute">
        {!!placeholder ? (
          <Text as="p" className="!text-gray-900_a3">
            {placeholder}
          </Text>
        ) : null}
        {!!imageTwo ? <Img src={imageTwo} alt="image_two" className="h-[6px] mt-1" /> : null}
      </div>
    </div>
  );
}
