import { useThemeMode } from "../components/theme-container";
import { lightColors, darkColors } from "./colors";
import { darkInputTheme, lightInputTheme } from "./input";

const useTheme = () => {
  const { mode } = useThemeMode();
  const colors = mode === "dark" ? darkColors : lightColors;
  const inputTheme = mode === "dark" ? darkInputTheme : lightInputTheme;

  return { colors, inputTheme };
};

export default useTheme;
