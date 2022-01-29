import { useState } from "react";
import { CrossSvg, MenuSvg } from "../../assets/svg";
import { SMALL_SIZE } from "../../constants/screenSize";
import { View, Touch, Text } from "../../easy-ui/core-components";
import useDidMount from "../../hooks/useDidMount";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import useTheme from "../../theme";
import { useEventListener } from "../listener";
import { useThemeMode } from "../theme-container";
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
      console.log("@@@props", props);
    });
  });

  const { toggleTheme } = useThemeMode();
  const { width } = useWindowDimensions();
  let direction = width >= SMALL_SIZE ? "row" : "column";

  let linksVisible = true;
  if (width >= SMALL_SIZE) {
    linksVisible = true;
  } else {
    linksVisible = isOpened;
  }
  const { colors } = useTheme();

  return (
    <View
      style={{ flexDirection: direction, backgroundColor: colors.background }}
    >
      {direction === "column" ? (
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
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
      {/* <Touch onPress={toggleTheme}>Toggle Theme</Touch> */}
    </View>
  );
};

export default Header;
