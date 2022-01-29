import { useThemeMode } from "../components/theme-container";
import { lightColors, darkColors } from "./colors";

const useTheme = () => {
  const { mode } = useThemeMode();
  const colors = mode === "dark" ? darkColors : lightColors;

  return { colors };
};

export default useTheme;
