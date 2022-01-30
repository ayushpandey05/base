import { useState } from "react";
import TextInput from "../../components/TextInput";
import { useToast } from "../../components/toast-container";
import { FlatList, ScrollView, Text, Touch, View } from "../../easy-ui/core-components";
import useMultiState from "../../hooks/useMultiState";
import useTheme from "../../theme";
import { fontFamily } from "../../theme/fontFamily";
import { sendMail, isValid } from "../../utils/sendMail";

const Form: any = (formData: any[]) => {
  return ({ renderSubmitButton }) => {
    const [state, setState] = useMultiState({});
    const [errors, setErrors] = useMultiState({});
    const { inputTheme } = useTheme();
    return (
      <View
        style={{
          width: 400,
          maxWidth: "95%",
          overflow: "hidden",
          flexShrink: 1,
        }}
      >
        <FlatList
          // style={{ maxHeight: "100%" }}
          contentContainerStyle={{ paddingRight: 8, paddingBottom: 39 }}
          data={formData}
          renderItem={({ item, index }) => {
            const { field, style, ...restItemProp } = item;
            const value = state?.[field];
            const onChangeValue = (value) => {
              setState({ [field]: value });
              if (!isValid({ field, value })) {
                setErrors({ [field]: true });
              } else {
                setErrors({ [field]: false });
              }
            };
            const error = errors?.[field];
            return (
              <TextInput
                key={`contact-form-${index}`}
                {...restItemProp}
                value={value}
                onChangeValue={onChangeValue}
                style={{ ...inputTheme.inputStyle, ...style }}
                containerStyle={{ ...inputTheme.containerStyle }}
                labelStyle={{ ...inputTheme.labelStyle }}
                error={error}
              />
            );
          }}
        />
        {renderSubmitButton
          ? renderSubmitButton({ state, errors, setState, setErrors })
          : void 0}
      </View>
    );
  };
};

const ContactForm = Form([
  {
    type: "text",
    field: "from_name",
    placeholder: "Enter your name",
    label: "Full Name",
    errorLabel: "Please fill this field",
  },
  {
    type: "textarea",
    field: "message",
    placeholder: "Enter the message",
    label: "Message",
    style: { minHeight: 200 },
    errorLabel: "Please fill this field",
  },
  {
    type: "number",
    field: "contact_no",
    placeholder: "Contact no.",
    label: "Contact No.",
    errorLabel: "Please fill this field",
  },
  {
    type: "email",
    field: "email",
    placeholder: "Enter you email",
    label: "Email",
    errorLabel: "Please fill this field",
  },
]);

const Contact = () => {
  const { colors } = useTheme();
  const [sending, setSending] = useState(false);

  const { createToast } = useToast();

  const send = ({ setErrors, state }) => {
    if (!sending) {
      setSending(true);
      sendMail(state)
        .then((res) => {
          setSending(false);
          createToast("Contacted Successfully.");
        })
        .catch((err) => {
          const {
            errors: newErrors,
            message = "Sorry, Something went wrong.",
          } = err || {};
          setErrors(newErrors);
          setSending(false);
          createToast(message, true);
        });
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        padding: 8,
        paddingRight: 0,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Text
        style={{
          fontSize: 32,
          fontFamily: fontFamily.roboto,
          fontWeight: 700,
          color: colors.defaultText,
        }}
      >
        CONTACT FORM
      </Text>
      <ContactForm
        renderSubmitButton={({ state, setErrors }) => {
          return (
            <Touch
              style={{
                alignSelf: "center",
                padding: 10,
                borderRadius: 4,
                backgroundColor: colors.borderColor,
                position: 'absolute', bottom: 0
              }}
              onPress={() => {
                send({ setErrors, state });
              }}
            >
              <Text style={{ color: colors.background }}>
                {sending ? "Submitting..." : "Submit form"}
              </Text>
            </Touch>
          );
        }}
      />
    </View>
  );
};

export default Contact;
