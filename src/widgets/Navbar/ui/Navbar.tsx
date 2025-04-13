import classes from './Navbar.module.scss'
import { classnames } from "shared/lib/classnames/classnames"
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink"
import { useTranslation } from 'react-i18next'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className } : NavbarProps) => {

    const { t } = useTranslation()
    return (
        <div className={classnames(classes.navbar, {}, [className ])}>
            <div className={classes.links}>
                <AppLink to="/" theme={AppLinkTheme.SECONDARY}>
                    {t('main')} 
                </AppLink>
                <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
                    {t('about')}
                </AppLink>
            </div>
            
        </div>
       
    )
}