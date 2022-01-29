import { FlatList, Linking, Touch, View } from "../../easy-ui/core-components";
import { FacebookSvg, InstagramSvg, LinkedinSvg } from "../../assets/svg";
import useTheme from "../../theme";
import { facebookUrl, instagramUrl, linkedinUrl } from "../../constants/urls";

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
    <Touch key={`footer-link-${index}`} onPress={onPress}>
      <SVGIcon width={30} height={30} fill={colors[fill]} />
    </Touch>
  );
};

const Footer = () => {
  const { colors } = useTheme();

  return (
    <View style={{ backgroundColor: colors.background }}>
      <View
        style={{
          justifyContent: "center",
          flexDirection: "row",
          gap: 20,
          padding: 20,
        }}
      >
        <FlatList
          // style={{ marginTop: 24 }}
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
    </View>
  );
};

export default Footer;
