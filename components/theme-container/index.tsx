import { createContext, useContext, useState } from "react";
import useDidMount from "../../hooks/useDidMount";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    localStorage.setItem("theme", dark ? "light" : "dark");
    setDark((old) => !old);
  };

  useDidMount(() => {
    const mode = localStorage.getItem("theme");
    setDark(mode === "dark");
  });

  return (
    <ThemeContext.Provider
      value={{ mode: dark ? "dark" : "light", toggleTheme }}
    >
      {children || void 0}
    </ThemeContext.Provider>
  );
};

const useThemeMode = () => {
  const { mode, toggleTheme } = useContext(ThemeContext);
  return { mode, toggleTheme };
};

export { useThemeMode };
export default ThemeProvider;
