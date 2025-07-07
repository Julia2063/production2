import { ButtonHTMLAttributes } from "react";
import classes from "./Button.module.scss";
import { classnames } from "shared/lib/classnames/classnames";

export enum ButtonTheme {
  CLEAR = "clear",
  OUTLINE = "outline",
  BACKGROUND = 'background',
  BACKGROUNDINVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

export const Button = ({
    className,
    children,
    theme,
    square,
    size = ButtonSize.M,
    ...props
}: ButtonProps) => {

    const mods: Record<string, boolean> = { 
        [classes.square]: square,
    };
    
    return (
        <button
            className={classnames(classes.button, mods, [className, classes[size], classes[theme]])}

            {...props}
        >
            {children}
        </button>
    );
};
