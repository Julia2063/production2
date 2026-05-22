import { FC, ReactNode, useEffect, useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(
    () =>
      (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT,
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);

  }, [theme])

  const defaultProps = useMemo(() => {
    return {
      theme,
      setTheme,
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
