import {
  FlatList,
  Linking,
  ScrollView,
  Text,
  View,
  Touch,
} from "../../easy-ui/core-components";
import TextPlayer from "../../components/TextPlayer";
import {
  UserOnSystemSvg,
  DeveloperSvg,
  FacebookSvg,
  LinkedinSvg,
  InstagramSvg,
} from "../../assets/svg";
import useTheme from "../../theme";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { MEDIUM_SIZE, SMALL_SIZE } from "../../constants/screenSize";
import { facebookUrl, instagramUrl, linkedinUrl } from "../../constants/urls";
import { fontFamily } from "../../theme/fontFamily";
const data = {
  title: "Ayush Pandey",
  animTitle: ["Hi all, I'm Ayush", "I'm a frontend developer"],
  description:
    "A passionate Front-end Developer (Mobile and Web) having an experience of building Web applications with Reactjs/Nextjs and Cross Platform Mobile Apps With React Native.",
};

const socialLinks = [
  { SVGIcon: FacebookSvg, url: facebookUrl, fill: "facebook" },
  { SVGIcon: InstagramSvg, url: instagramUrl, fill: "instagram" },
  { SVGIcon: LinkedinSvg, url: linkedinUrl, fill: "linkedin" },
];

const renderLinks = ({ item, index }) => {
  const { SVGIcon, url, fill } = item;
  const onPress = () => {
    Linking.openURL(url, "_blank");
  };
  const { colors } = useTheme();
  return (
    <Touch key={`home-social-link-${index}`} onPress={onPress}>
      <SVGIcon width={50} height={50} fill={colors[fill]} />
    </Touch>
  );
};

const Home = () => {
  const { colors } = useTheme();
  const { width } = useWindowDimensions();

  const mediumSize = width < MEDIUM_SIZE;
  const smallSize = width < SMALL_SIZE;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        overflow: "hidden",
      }}
    >
      <ScrollView style={{ flex: 1, marginTop: mediumSize ? 0 : "10%" }}>
        <Text
          style={{
            color: colors.defaultText,
            fontStyle: "italic",
            fontSize: 48,
            fontWeight: 700,
            marginLeft: mediumSize ? 32 : "15%",
            fontFamily: fontFamily.comforter,
          }}
        >
          {data.title}
        </Text>
        <View
          style={{
            flexDirection: mediumSize ? "column" : "row",
            marginLeft: mediumSize ? 32 : "15%",
            marginRight: mediumSize ? 32 : "15%",
          }}
        >
          <View style={{ flex: 1, justifyContent: "center" }}>
            <TextPlayer
              style={{
                fontSize: 38,
                color: colors.defaultText,
                marginBottom: 12,
                marginTop: 24,
                fontFamily: fontFamily.supermercado,
              }}
              data={data.animTitle}
            />
            <Text
              style={{
                color: colors.defaultText,
                fontSize: 24,
                fontWeight: 300,
                wordSpacing: 16,
                fontFamily: fontFamily.roboto,
              }}
            >
              {data.description}
            </Text>
            <FlatList
              style={{ marginTop: 24 }}
              contentContainerStyle={{
                gap: 24,
                justifyContent: "center",
                flex: 1,
              }}
              horizontal
              data={socialLinks}
              renderItem={renderLinks}
            />
          </View>
          <View style={{ flex: 1 }}>
            <DeveloperSvg fill={colors.background} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
