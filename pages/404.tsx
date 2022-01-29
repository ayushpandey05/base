import { View } from "../easy-ui/core-components";
import useTheme from "../theme";
import { Page404Svg } from "../assets/svg";
const PageNotFound = () => {
  const { colors } = useTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: colors.background,
      }}
    >
      <Page404Svg />
    </View>
  );
};

export default PageNotFound;
