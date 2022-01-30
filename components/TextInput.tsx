import {
  ChangeEventHandler,
  CSSProperties,
  FC,
  HTMLInputTypeAttribute,
} from "react";
import { Text, View } from "../easy-ui/core-components";

interface InputProps {
  value?: string;
  onChangeValue?: (value: string) => any;
  style?: CSSProperties;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  label?: string;
  containerStyle?: CSSProperties;
  labelStyle?: CSSProperties;
  error?: boolean;
  errorLabel?: string;
}

const defaultStyle: CSSProperties = {
  border: "none",
  outline: "none",
  display: "flex",
  backgroundColor: "transparent",
  borderStyle: "solid",
  borderWidth: 0,
};

const RenderError = ({ error, errorLabel }) => {
  if (error) {
    return <Text style={{ color: "red", fontSize: 12 }}>{errorLabel}</Text>;
  }
  return null;
};

const TextInput: FC<InputProps> = ({
  type = "text",
  value,
  onChangeValue,
  style,
  placeholder,
  label,
  containerStyle,
  labelStyle,
  error,
  errorLabel
}) => {
  const onChange:
    | ChangeEventHandler<HTMLInputElement>
    | ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    if (typeof onChangeValue === "function") {
      onChangeValue(e.target.value);
    }
  };

  let inputComponent = void 0;

  if (type === "textarea") {
    inputComponent = (
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{ ...defaultStyle, ...style, flex: 1 }}
      />
    );
  } else {
    inputComponent = (
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        style={{ ...defaultStyle, ...style, flex: 1 }}
      />
    );
  }
  return (
    <View style={{ ...containerStyle }}>
      <Text style={{ ...labelStyle }}>{`${label}`}</Text>
      {inputComponent}
      <RenderError error={error} errorLabel={errorLabel} />
    </View>
  );
};

export default TextInput;
