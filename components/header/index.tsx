import { useState } from "react";
import { MEDIUM_SIZE, SMALL_SIZE } from "../../constants/screenSize";
import { View } from "../../easy-ui/core-components";
import useDidMount from "../../hooks/useDidMount";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import useTheme from "../../theme";
import { useEventListener } from "../listener";
import { links } from "./links";
import RenderLink from "./RenderLink";
import ToggleMenu from "./ToggleMenu";
import ToggleTheme from "./ToggleTheme";

const Header = (props) => {
  const { listen, dispatch } = useEventListener();
  const [isOpened, setIsOpened] = useState(false);
  const toggleMenu = () => {
    setIsOpened((old) => !old);
  };
  useDidMount(() => {
    listen("temp", (props) => {
    });
  });

  const { width } = useWindowDimensions();
  let direction: "column" | "row" = width >= SMALL_SIZE ? "row" : "column";
  const mediumSize = width < MEDIUM_SIZE;
  const smallSize = width < SMALL_SIZE;
  let linksVisible = true;
  if (width >= SMALL_SIZE) {
    linksVisible = true;
  } else {
    linksVisible = isOpened;
  }
  const { colors } = useTheme();

  return (
    <View style={{ backgroundColor: colors.background }}>
      <View
        style={{
          flexDirection: direction,
          marginLeft: smallSize ? 8 : mediumSize ? 8 : "15%",
          marginRight: smallSize ? 0 : mediumSize ? 0 : "15%",
          ...(!smallSize && { alignItems: "center" }),
        }}
      >
        {direction === "column" ? (
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <ToggleTheme />
            <ToggleMenu isOpened={isOpened} toggleMenu={toggleMenu} />
          </View>
        ) : (
          void 0
        )}
        {linksVisible
          ? links.map((item) => {
              return <RenderLink {...item} />;
            })
          : void 0}
        {direction === "row" ? (
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <ToggleTheme />
          </View>
        ) : (
          void 0
        )}
      </View>
    </View>
  );
};

export default Header;
