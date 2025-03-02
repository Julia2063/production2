import { Link, LinkProps } from "react-router-dom";
import classes from "./AppLink.module.scss";
import { classnames } from "shared/lib/classnames";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  RED = "red",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink = ({
    className,
    children,
    to,
    theme = AppLinkTheme.PRIMARY,
    ...props
}: AppLinkProps) => {
    return (
        <Link
            to={to}
            className={classnames(classes.appLink, {}, [className, classes[theme]])}
            {...props}
        >
            {children}
        </Link>
    );
};
