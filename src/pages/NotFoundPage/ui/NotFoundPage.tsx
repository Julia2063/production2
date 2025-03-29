import { useTranslation } from "react-i18next"
import classes from './NotFoundPage.module.scss'

const NotFoundPage = () => {
    const { t } = useTranslation()
    return (
        <div className={classes.notFoundPage}>
            {t('notFound')}
        </div>
    )
}

export default NotFoundPage