import { darkColors, lightColors } from "./colors";

const defaultStyle = {
  padding: 8,
  //   margin: 8,
  border: "none",
  outline: "none",
  borderRadius: 4,
  borderWidth: 1,
};

export const lightInputTheme = {
  containerStyle: {
    margin: 8,
  },
  labelStyle: {
    marginBottom: 8,
    color: lightColors.defaultText,
  },
  inputStyle: {
    ...defaultStyle,
    borderColor: lightColors.borderColor,
    caretColor: lightColors.defaultText,
    color: lightColors.defaultText,
  },
};

export const darkInputTheme = {
  containerStyle: {
    margin: 8,
  },
  labelStyle: {
    marginBottom: 8,
    color: darkColors.defaultText,
  },
  inputStyle: {
    ...defaultStyle,
    borderColor: darkColors.borderColor,
    caretColor: darkColors.defaultText,
    color: darkColors.defaultText,
  },
};
