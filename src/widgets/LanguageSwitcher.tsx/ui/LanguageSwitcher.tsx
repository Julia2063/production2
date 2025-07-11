
import classes from './LanguageSwitcher.module.scss'
import { classnames } from "shared/lib/classnames/classnames"
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

interface LanguageSwitcherProps {
    className?: string,
    short?: boolean
}

export const LanguageSwitcher = ({ className, short } : LanguageSwitcherProps) => {

    const { t, i18n } = useTranslation()

    const handleToggle = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
    }

    return (
        <Button 
            onClick={handleToggle}
            className={classnames(classes.languageSwitcher, {}, [className])}
            theme={ButtonTheme.CLEAR}
        >
            {t(short ? 'shortLang' : 'lang')} 
        </Button>
    )
}