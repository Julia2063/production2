import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const BugButton = () => {

    const { t } = useTranslation()

    const [isError, setIsError] = useState(false);

    const handleClick = () => {
        setIsError(true)
    }

    useEffect(() => {
        if(isError) {
            throw new Error
        }
    }, [isError])

    return (
        <button onClick={handleClick}>
            {t('addError')} 
        </button>
    );
};