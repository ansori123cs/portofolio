import Image from "next/image";
import React from "react";

interface CustomButtonProps {
  label: string;
}

const Custombutton: React.FC<CustomButtonProps> = (props) => {
  return (
    <button className="button-custom text-white bg-black flex justify-between gap-x-2 items-center cursor-pointer">
      <Image
        src="/RT_LT_arrow.png"
        alt="arrow right"
        width={40}
        height={10}
        className="hidden rotate-180 button-custom-hover:block"
      />
      <h1 className="font-bona text-3xl font-bold">{props.label}</h1>
      <Image
        src="/RT_LT_arrow.png"
        alt="arrow right"
        width={40}
        height={10}
        className="hidden button-custom-hover:block"
      />
    </button>
  );
};

export default Custombutton;
