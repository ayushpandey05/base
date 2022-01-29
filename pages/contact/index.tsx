import { CommingSoonSvg } from "../../assets/svg";
import { View } from "../../easy-ui/core-components";
import useTheme from "../../theme";

const Contact = () => {
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
      <CommingSoonSvg fill={colors.defaultText} />
    </View>
  );
};

export default Contact;
