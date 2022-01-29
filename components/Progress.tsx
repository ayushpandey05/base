import { useState } from "react";
import { Text, View } from "../easy-ui/core-components";
import useDidMount from "../hooks/useDidMount";
import useTheme from "../theme";

const Progress = ({ title, percentage }) => {
  const { colors } = useTheme();

  const [widthPercent, setWidthPercent] = useState(0);

  useDidMount(() => {
    requestAnimationFrame(() => {
      setWidthPercent(percentage);
    });
  });

  return (
    <View style={{ marginTop: 24 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 8,
        }}
      >
        <Text style={{ color: colors.defaultText }}>{`${title}`}</Text>
        <Text style={{ color: colors.defaultText }}>{`${percentage}%`}</Text>
      </View>
      <View
        style={{
          width: "100%",
          height: 16,
          flexDirection: "row",
          borderRadius: 8,
          overflow: "hidden",
          backgroundColor: colors.borderColor,
        }}
      >
        <View
          style={{
            width: `${widthPercent}%`,
            backgroundColor: colors.pinkV1,
            borderRadius: 8,
            transition: "all 1s",
          }}
        />
      </View>
    </View>
  );
};

export default Progress;
