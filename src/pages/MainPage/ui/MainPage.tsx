import { BugButton } from "app/providers/ErrorBoundary"
import { useTranslation } from "react-i18next"

const MainPage = () => {
    const { t } = useTranslation('main')
    return (
        <div>
            <BugButton />
            {t('main')}
        </div>
    )
}

export default MainPage