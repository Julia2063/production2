
import { useState } from "react";
import classes from "./Sidebar.module.scss";
import { classnames } from "shared/lib/classnames/classnames";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LanguageSwitcher } from "widgets/LanguageSwitcher.tsx";
import { useTranslation } from "react-i18next";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "app/config/routesConfig/routesConfig";

import MainIcon from "shared/assets/icons/home.svg"
import AboutIcon from "shared/assets/icons/about.svg"

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
            <Button
                className={classes.collapseBtn}
                onClick={handleToggle}
                data-testid="sidebar-toggle"
                theme={ButtonTheme.BACKGROUNDINVERTED}
                square={true}
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'} 
            </Button>
            <div className={classes.items}>
                <AppLink 
                    to={RoutePath.main} 
                    theme={AppLinkTheme.SECONDARY}
                    className={classes.item}
                >
                    <MainIcon className={classes.icon}/>
                    <span className={classes.link}>{t('main')}</span> 
                </AppLink>
                <AppLink 
                    to={RoutePath.about} 
                    theme={AppLinkTheme.SECONDARY}
                    className={classes.item}
                >
                    <AboutIcon className={classes.icon} />
                    <span className={classes.link}>{t('about')}</span>
                </AppLink>
            </div>
            <div className={classes.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher short={collapsed} />
            </div>
        </div>
    );
};
