import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { classnames } from "shared/lib/classnames/classnames"
import LightTheme from '../../../shared/assets/icons/theme-light.svg'
import DarkTheme from '../../../shared/assets/icons/theme-dark.svg'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
    className?: string,
}

export const ThemeSwitcher = ({ className } : ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button 
            onClick={toggleTheme}
            
            theme={ButtonTheme.CLEAR}
        >
            {theme === Theme.LIGHT ? <LightTheme /> : <DarkTheme />} 
        </Button>
    )
}