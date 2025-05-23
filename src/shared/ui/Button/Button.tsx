import { ButtonHTMLAttributes } from "react";
import classes from "./Button.module.scss";
import { classnames } from "shared/lib/classnames/classnames";

export enum ButtonTheme {
  CLEAR = "clear",
  OUTLINE = "outline",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

export const Button = ({
    className,
    children,
    theme,
    ...props
}: ButtonProps) => {
    return (
        <button
            className={classnames(classes.button, {}, [className, classes[theme]])}
            {...props}
        >
            {children}
        </button>
    );
};
