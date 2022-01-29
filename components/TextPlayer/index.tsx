import { memo, useEffect, useState } from "react";
import { Text } from "../../easy-ui/core-components";
import useDidMount from "../../hooks/useDidMount";
import useMultiState from "../../hooks/useMultiState";

interface Props {
  data: string[];
}

const Blinker = memo(() => {
  const [value, setValue] = useState(true);

//   useDidMount(()=>{
//     setInterval(()=>{
//         setValue((old) => !old);
//       },250)
//   })

  return (
    <span style={{ opacity: value ? 1 : 0, transition: "all 0.25s" }}>|</span>
  );
});

const runWithDelay = (fn, delay?: number) => {
  setTimeout(fn, delay || 100);
};

const TextPlayer = ({ data, style }) => {
  const [state, setState] = useMultiState({ textIndex: 0, valueToDisplay: "" });

  const { textIndex, valueToDisplay, forward = true } = state || {};

  useEffect(() => {
    const currentText = data[textIndex];
    if (forward) {
      console.log("@@@@@@@@@currentText", currentText);
      if (currentText.length > valueToDisplay.length) {
        const newvalueToDisplay =
          valueToDisplay + currentText[valueToDisplay.length];
        runWithDelay(() => {
          setState({ valueToDisplay: newvalueToDisplay });
        });
      } else {
        runWithDelay(() => {
          setState({ forward: false });
        }, 500);
      }
    } else {
      if (valueToDisplay.length > 0) {
        const newvalueToDisplay = valueToDisplay.substring(
          0,
          valueToDisplay.length - 1
        );
        runWithDelay(() => {
          setState({ valueToDisplay: newvalueToDisplay });
        });
      } else {
        const newTextIndex = data?.[textIndex + 1] ? textIndex + 1 : 0;
        runWithDelay(() => {
          setState({ textIndex: newTextIndex, forward: true });
        });
      }
    }
  }, [state]);

  return (
    <Text style={{fontSize: 32, ...style}} >
      {`${valueToDisplay}`}
      <Blinker />
    </Text>
  );
};

export default memo(TextPlayer);
