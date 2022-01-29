import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties, FC } from "react";
import { SMALL_SIZE } from "../../constants/screenSize";
import { Text, View } from "../../easy-ui/core-components";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import useTheme from "../../theme";
import { fontFamily } from "../../theme/fontFamily";

const RenderLink: FC<{ title: string; link: string }> = ({ title, link }) => {
  const router = useRouter();
  const isActive = link === router.pathname;
  const { width } = useWindowDimensions();

  const textContainer: CSSProperties = {};
  if (width < SMALL_SIZE) {
    textContainer.alignItems = "center";
  }
  const { colors } = useTheme();

  return (
    <Link href={link || ""}>
      <View
        style={{
          cursor: "pointer",
          paddingLeft: 16,
          paddingRight: 16,
          paddingTop: 8,
          paddingBottom: 8,
          ...textContainer,
        }}
      >
        <Text
          style={{
            color: isActive ? colors.pinkV1 : colors.defaultText,
            fontWeight: isActive ? 700 : 700,
            fontFamily: fontFamily.roboto,
          }}
        >
          {title}
        </Text>
      </View>
    </Link>
  );
};

export default RenderLink;
