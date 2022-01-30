import { createContext, useContext, useEffect, useState } from "react";
import { MEDIUM_SIZE } from "../../constants/screenSize";
import { Text, Touch, View } from "../../easy-ui/core-components";
import { create_UUID } from "../../easy-ui/core-components/src/Utility";
import useDidMount from "../../hooks/useDidMount";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { fontFamily } from "../../theme/fontFamily";

const ToastContext: any = createContext();

const RenderTimerLine = ({ time, backgroundColor, hide }) => {
  const reduction = time / 100;
  const [remainingTime, setRemainingTime] = useState(time);
  useDidMount(() => {
    setInterval(() => {
      setRemainingTime((old) => old - reduction);
    }, reduction);
  });
  useEffect(() => {
    if (!remainingTime) {
      hide();
    }
  }, [remainingTime]);
  return (
    <View
      style={{
        height: 2,
        width: `${remainingTime / reduction}%`,
        backgroundColor,
      }}
    />
  );
};

const RenderMessage = ({
  message,
  messageKey,
  error,
  index,
  hideToast,
  mobile,
}) => {
  const style = {};
  if (mobile) {
    style.left = 20;
    style.right = 20;
  } else {
    style.right = 20;
    style.width = 300;
  }

  const hide = () => {
    hideToast(messageKey);
  };

  return (
    <View
      style={{
        position: "absolute",
        ...style,
        height: 30,
        [mobile ? "bottom" : "top"]: index * 30 + 5 * (index + 1),
        borderRadius: 4,
        backgroundColor: error ? "#FF4500" : "#00FA9A",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          alignItems: "center",
          paddingLeft: 8,
          paddingRight: 8,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text
            style={{
              color: !error ? "#160040" : "#EEEEEE",
              fontFamily: fontFamily.roboto,
            }}
          >
            {message}
          </Text>
        </View>
        <Touch onPress={hide}>
          <Text
            style={{
              color: !error ? "#160040" : "#EEEEEE",
              fontSize: 10,
              fontFamily: fontFamily.roboto,
            }}
          >
            Hide
          </Text>
        </Touch>
      </View>
      <RenderTimerLine
        hide={hide}
        key={messageKey}
        time={5000}
        backgroundColor={!error ? "#FF4500" : "#00FA9A"}
      />
    </View>
  );
};

const ToastProvider = ({ children }) => {
  const [messages, setMessages] = useState({});

  const createToast = (message, error) => {
    const uniqueId = create_UUID();
    setMessages({ ...messages, [uniqueId]: { message, error } });
  };

  const hideToast = (id) => {
    const oldMessages = { ...messages };
    delete oldMessages?.[id];
    setMessages(oldMessages);
  };

  const { width } = useWindowDimensions();
  const mediumSize = width < MEDIUM_SIZE;

  const messagesKeys = Object.keys(messages);

  return (
    <ToastContext.Provider value={{ createToast }}>
      {children || void 0}
      {messagesKeys.map((item, index) => {
        const { message, error } = messages[item];
        return (
          <RenderMessage
            key={item}
            message={message}
            messageKey={item}
            error={error}
            index={index}
            hideToast={hideToast}
            mobile={mediumSize}
          />
        );
      })}
    </ToastContext.Provider>
  );
};

const useToast = () => {
  const { createToast } = useContext(ToastContext);
  return { createToast };
};

export { useToast };
export default ToastProvider;
