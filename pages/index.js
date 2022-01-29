import { ScrollView } from "../easy-ui/core-components";
import TextPlayer from "../components/TextPlayer";
import { UserOnSystemSvg } from "../assets/svg";
import useTheme from "../theme";
export default function Home() {
  const { colors } = useTheme();
  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.background }}>
      <TextPlayer
        style={{
          fontSize: 48,
          textAlign: "center",
          marginLeft: 20,
          marginRight: 20,
          color: colors.defaultText,
        }}
        data={["Hello", "I'm Ayush Pandey", "I'm a front-end developer"]}
      />
      <UserOnSystemSvg width={80} height={80} />
    </ScrollView>
  );
}
