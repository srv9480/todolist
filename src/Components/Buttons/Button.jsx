import React from "react";
import { getClasses } from "../utils/getClasses";
import './styles.sass'

const buttonTypes = {
  primary: "primary",
  secondary: "secondary",
};

export default function Button({ children, type, variant, ...rest }) {
  return (
    <button
      className={getClasses([
        styles.button,
        styles[`button--${buttonTypes[variant]}`],
      ])}
      type={type === "submit" ? "submit" : "button"}
      {...rest}
    >
      {children}
    </button>
  );
}

function SelectButton({ children, ...rest }) {
  return (
    <select
      className={getClasses([styles.button, styles.button__select])}
      {...rest}
    >
      {children}
    </select>
  );
}
export { SelectButton };
