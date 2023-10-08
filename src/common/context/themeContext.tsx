import { createContext, useContext, useState } from "react";
import "../../index.scss";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ThemeContext = createContext({} as any);
export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(false);

  const changeAppTheme = () => setTheme(!theme);
  const contextValue: ContextValueProps = { changeAppTheme, theme };

  return (
    <ThemeContext.Provider value={contextValue}>
      <div className={theme === true ? "darkTheme" : "defaultTheme"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

interface Props {
  children: React.ReactNode;
}

interface ContextValueProps {
  changeAppTheme: () => void;
  theme: boolean;
}
