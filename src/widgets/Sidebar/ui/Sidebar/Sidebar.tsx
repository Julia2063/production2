
import { useState } from "react";
import classes from "./Sidebar.module.scss";
import { classnames } from "shared/lib/classnames/classnames";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LanguageSwitcher } from "widgets/LanguageSwitcher.tsx";
import { useTranslation } from "react-i18next";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const { t } = useTranslation()

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
                {t('Toggle')} 
            </button>
            <div className={classes.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    );
};
