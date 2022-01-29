import { MoonSvg, SunSvg } from "../../assets/svg";
import { Touch } from "../../easy-ui/core-components";
import useTheme from "../../theme";
import { useThemeMode } from "../theme-container";

const ToggleTheme = () => {
  const { mode, toggleTheme } = useThemeMode();
  const { colors } = useTheme();
  return (
    <Touch style={{ padding: 10 }} onPress={toggleTheme}>
      {mode == "dark" ? (
        <MoonSvg width={24} height={24} fill={colors.defaultText} />
      ) : (
        <SunSvg width={24} height={24} fill={colors.defaultText} />
      )}
    </Touch>
  );
};

export default ToggleTheme;
