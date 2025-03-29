import { Loader } from "shared/ui/Loader/Loader";
import classes from "./PageLoader.module.scss";
import { classnames } from "shared/lib/classnames/classnames";

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {

    return (
        <div
            className={classnames(
                classes.pageLoader,
                {},
                [className]
            )}
        >
            <Loader />
        </div>
    );
};
