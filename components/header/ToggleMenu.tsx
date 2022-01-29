import { FC, memo } from "react";
import { CrossSvg, MenuSvg } from "../../assets/svg";
import { Touch } from "../../easy-ui/core-components";
import useTheme from "../../theme";

interface Props {
  isOpened: boolean;
  toggleMenu: () => any;
}

const ToggleMenu: FC<Props> = ({ isOpened, toggleMenu }) => {
  const { colors } = useTheme();
  return (
    <Touch style={{ padding: 10 }} onPress={toggleMenu}>
      {isOpened ? (
        <CrossSvg fill={colors.defaultText} width={24} height={24} />
      ) : (
        <MenuSvg fill={colors.defaultText} width={24} height={24} />
      )}
    </Touch>
  );
};

export default memo(ToggleMenu);
