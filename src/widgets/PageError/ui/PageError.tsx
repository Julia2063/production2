import classes from "./PageError.module.scss";
import { classnames } from "shared/lib/classnames/classnames";
import { useTranslation } from "react-i18next";

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {

    const { t } = useTranslation()

    const handleReload = () => {
        location.reload()
    }

    return (
        <div
            className={classnames(
                classes.pageError,
                {},
                [className]
            )}
        >
            <p>
                {t('somethingWrong')}
            </p>
            <button onClick={handleReload}>
                {t('tryReload')}
            </button>

        </div>
    );
};