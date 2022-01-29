import { FlatList, Text, View } from "../../easy-ui/core-components";
import useTheme from "../../theme";
import { fontFamily } from "../../theme/fontFamily";

const educationData = [
  {
    title: "Graduation",
    name: "Arya Institute of Engineering and Technology",
    percentage: 67,
    year: "2016-2020",
  },
  {
    title: "Intermediate",
    name: "St. Thomas Mission Inter College",
    percentage: 78,
    year: "2014-2016",
  },
  {
    title: "High School",
    name: "St. Antony's Inter College",
    percentage: 75,
    year: "2012-2014",
  },
];

const renderItem = ({ item, index }) => {
  const { title, name, percentage, year } = item;
  const { colors } = useTheme();
  return (
    <View
      style={{
        borderColor: colors.borderColor,
        borderBottomWidth: 1,
        paddingBottom: 30,
      }}
      key={`edu-${index}`}
    >
      <Text
        style={{
          fontFamily: fontFamily.supermercado,
          fontSize: 32,
          color: colors.defaultText,
        }}
      >
        {title}
      </Text>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 24 }}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ color: colors.defaultText }}>{name}</Text>
          <Text style={{ color: colors.defaultText }}>{year}</Text>
        </View>
        <Text style={{ color: colors.defaultText }}>{`${percentage}%`}</Text>
      </View>
    </View>
  );
};

const StudyDetails = () => {
  return (
    <View style={{ flex: 1, overflow: "hidden" }}>
      <FlatList
        style={{
          // paddingRight: 20,
        }}
        contentContainerStyle={{ gap: 30 }}
        data={educationData}
        renderItem={renderItem}
      />
    </View>
  );
};

export default StudyDetails;
