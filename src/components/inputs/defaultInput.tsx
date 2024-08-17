import React from "react";

interface DefaultInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  placeHolder?: string;
}

const DefaultInput = ({ className, placeHolder }: DefaultInputProps) => {
  return <input type="text" className={className} placeholder={placeHolder} />;
};

export { DefaultInput };
