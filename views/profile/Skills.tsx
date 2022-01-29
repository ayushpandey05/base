import Progress from "../../components/Progress";
import { Text, View } from "../../easy-ui/core-components";
import useTheme from "../../theme";
import { fontFamily } from "../../theme/fontFamily";

const title = "Skills";

const Skills = () => {
  const { colors } = useTheme();
  return (
    <View style={{ marginTop: 24 }}>
      <Text
        style={{
          color: colors.defaultText,
          fontSize: 24,
          fontWeight: 500,
          fontFamily: fontFamily.roboto,
        }}
      >
        {title}
      </Text>
      <Progress title="React" percentage={80} />
      <Progress title="React Native" percentage={80} />
      <Progress title="Next.js" percentage={80} />
      <Progress title="Node.js" percentage={30} />
      <Progress title="Mongo" percentage={20} />
      <Progress title="Express.js" percentage={40} />
    </View>
  );
};

export default Skills;
