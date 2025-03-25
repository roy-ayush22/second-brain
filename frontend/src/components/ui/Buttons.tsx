import { ReactElement } from "react";

type Variants = "primary" | "secondary";
export interface ButtonProps {
  variant: Variants;
  size: "sm" | "md" | "lg";
  text: String;
  // onClick: () => void;
  startIcon: ReactElement;
  endIcon: ReactElement;
}
const defaultStyles = "rounded-md p-4 flex ";

const sizeStyles = {
  sm: "py-1 px-2 rounded-sm",
  md: "py-2 px-4 rounded-md",
  lg: "py-4 px-6 rounded-lg",
};

const variantStyles = {
  primary: "bg-purple-600 text-white ",
  secondary: "bg-purple-200 text-purple-400",
};

export const Button = (props: ButtonProps) => {
  return (
    <button className={`${sizeStyles[props.size]} ${variantStyles[props.variant]}`}>
      <div className="flex">
        {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null}
        {props.text}
        {props.endIcon}
      </div>
    </button>
  );
};
