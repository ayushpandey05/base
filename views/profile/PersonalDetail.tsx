import Image from "next/image";
import { UserLogo } from "../../assets/image";
import { MEDIUM_SIZE } from "../../constants/screenSize";
import { Text, View } from "../../easy-ui/core-components";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import useTheme from "../../theme";
import { fontFamily } from "../../theme/fontFamily";
import getAge from "../../utils/getAge";

const personalDetails = {
  name: "Er. Ayush Pandey",
  age: getAge("05/08/1999"),
};

const PersonalDetail = () => {
  const { colors } = useTheme();
  const { width } = useWindowDimensions();
  const mediumSize = width < MEDIUM_SIZE;
  return (
    <View style={{marginBottom: 24, borderBottomWidth: 1, borderColor: colors.borderColor, paddingBottom: 24}} >
      <View style={{ flexDirection: mediumSize ? "column-reverse" : "row", ...(mediumSize && {alignItems: 'center'}) }}>
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row" }}>
            <View>
              <Text
                style={{
                  color: colors.defaultText,
                  fontFamily: fontFamily.roboto,
                  fontSize: 24,
                  fontWeight: 500,
                }}
              >
                {"Name"}
              </Text>
              <Text
                style={{
                  color: colors.defaultText,
                  fontFamily: fontFamily.roboto,
                  fontSize: 24,
                  fontWeight: 500,
                }}
              >
                {"Age"}
              </Text>
            </View>
            <View style={{ marginLeft: 16, marginRight: 16 }}>
              <Text
                style={{
                  color: colors.defaultText,
                  fontFamily: fontFamily.roboto,
                  fontSize: 24,
                  fontWeight: 500,
                }}
              >
                {"-"}
              </Text>
              <Text
                style={{
                  color: colors.defaultText,
                  fontFamily: fontFamily.roboto,
                  fontSize: 24,
                  fontWeight: 500,
                }}
              >
                {"-"}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: colors.defaultText,
                  fontFamily: fontFamily.roboto,
                  fontSize: 24,
                  fontWeight: 500,
                }}
              >
                {personalDetails.name}
              </Text>
              <Text
                style={{
                  color: colors.defaultText,
                  fontFamily: fontFamily.roboto,
                  fontSize: 24,
                  fontWeight: 500,
                }}
              >
                {personalDetails.age}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ width: 200, height: 200, marginBottom: 24, borderRadius: 100, overflow: 'hidden' }}>
          <Image src={UserLogo} />
        </View>
      </View>
    </View>
  );
};

export default PersonalDetail;
