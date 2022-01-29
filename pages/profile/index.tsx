import { useEventListener } from "../../components/listener";
import { View, ScrollView, Text, Touch } from "../../easy-ui/core-components";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import useTheme from "../../theme";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const Profile = () => {
  const { width, height } = useWindowDimensions();
  const { listen, dispatch } = useEventListener();

  const onPress = () => {
    dispatch("temp", { a: "hello" });
  };

  const onPressTwo = () => {
    dispatch("temp", "hello");
  };

  const { colors } = useTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        overflow: "hidden",
      }}
    >
      This is profile page
      <Touch onPress={onPress}>
        <Text>Fire event</Text>
      </Touch>
      <Touch onPress={onPressTwo}>
        <Text>Fire second event</Text>
      </Touch>
      <Text>{`width = ${width}, height = ${height}`}</Text>
      <ScrollView style={{ flex: 1, backgroundColor: "grey" }}>
        {data.map((item) => {
          return (
            <View style={{ height: 100, backgroundColor: "pink" }}>{item}</View>
          );
        })}
      </ScrollView>
      <div onClick={(e) => {}}></div>
    </View>
  );
};

export default Profile;
