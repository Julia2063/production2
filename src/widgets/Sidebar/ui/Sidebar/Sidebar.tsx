/* eslint-disable i18next/no-literal-string */
import { useState } from "react";
import classes from "./Sidebar.module.scss";
import { classnames } from "shared/lib/classnames/classnames";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LanguageSwitcher } from "widgets/LanguageSwitcher.tsx";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const handleToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classnames(
                classes.sidebar,
                { [classes.collapsed]: collapsed },
                [className]
            )}
        >
            <button 
                onClick={handleToggle}
                data-testid="sidebar-toggle"
            >
                Toggle
            </button>
            <div className={classes.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    );
};
