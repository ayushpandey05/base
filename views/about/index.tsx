import { CommingSoonSvg } from "../../assets/svg";
import { View, Text } from "../../easy-ui/core-components";
import useTheme from "../../theme";

const About = () => {
  const { colors } = useTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CommingSoonSvg fill={colors.defaultText} width="20%" height="20%" />
    </View>
  );
};

export default About;
