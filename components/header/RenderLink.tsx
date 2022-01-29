import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { SMALL_SIZE } from "../../constants/screenSize";
import { Text, View } from "../../easy-ui/core-components";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const RenderLink: FC<{ title: string; link: string }> = ({ title, link }) => {
  const router = useRouter();
  const isActive = link === router.pathname;
  const { width } = useWindowDimensions();

  const textContainer = {};
  if (width < SMALL_SIZE) {
    textContainer.alignItems = "center";
  }

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
        <Text style={{ color: isActive ? "red" : "black", fontWeight: 700 }}>{title}</Text>
      </View>
    </Link>
  );
};

export default RenderLink;
