import classes from './Navbar.module.scss'
import { classnames } from "shared/lib/classnames/classnames"
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink"

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className } : NavbarProps) => {
    return (
        <div className={classnames(classes.navbar, {}, [className ])}>
            <div className={classes.links}>
                <AppLink to="/" theme={AppLinkTheme.SECONDARY}>
                    Main Page
                </AppLink>
                <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
                    About Page
                </AppLink>
            </div>
            
        </div>
       
    )
}