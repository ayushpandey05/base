import { MEDIUM_SIZE } from "../../constants/screenSize";
import { View, ScrollView } from "../../easy-ui/core-components";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import useTheme from "../../theme";
import PersonalDetail from "./PersonalDetail";
import Skills from "./Skills";
import StudyDetails from "./StudyDetails";

const Profile = () => {
  const { colors } = useTheme();
  const { width } = useWindowDimensions();

  const mediumSize = width < MEDIUM_SIZE;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        // padding: 16,
        paddingTop: mediumSize ? 0 : 16,
        overflow: "hidden",
        paddingBottom: 0
      }}
    >
      <ScrollView
        style={{
          marginLeft: mediumSize ? 8 : "15%",
          marginRight: mediumSize ? 0 : "15%",
          paddingRight: 20
        }}
      >
        <PersonalDetail />
        <StudyDetails />
        <Skills />
      </ScrollView>
    </View>
  );
};

export default Profile;
