import { classnames } from "shared/lib/classnames/classnames";
import "./Loader.scss";

interface LoaderProps {
  static?: boolean;
}

export const Loader = ({ static: isStatic = false }: LoaderProps) => {
    return (
        <div className={classnames('lds-ellipsis', { 'lds-ellipsis--static': isStatic })}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};
