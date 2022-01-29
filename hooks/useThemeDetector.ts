import { useEffect, useState } from "react";

const useThemeDetector = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      // dark mode
      setIsDarkTheme(true);
    } else {
      setIsDarkTheme(false);
    }
  }, []);
  return isDarkTheme;
};

export default useThemeDetector;
