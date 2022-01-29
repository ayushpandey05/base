import { createContext, useContext } from "react";
import useMultiState from "../../hooks/useMultiState";

const ListenerContext = createContext();

const ListenerProvier = ({ children }) => {
  const [state, setState] = useMultiState({});

  const listen = (eventName, fn) => {
    setState({ [eventName]: fn });
  };

  const dispatch = (eventName, prop) => {
    const event = state?.[eventName];
    if (typeof event === "function") {
      event(prop);
    }
  };

  return (
    <ListenerContext.Provider value={{ listen, dispatch }}>
      {children || void 0}
    </ListenerContext.Provider>
  );
};

const useEventListener = () => {
  const listenerProps = useContext(ListenerContext);

  const listen: (eventName: string, fn: (props: any) => any) => any =
    listenerProps?.listen;
  const dispatch: (eventName: string, prop: any) => any =
    listenerProps?.dispatch;

  return { listen, dispatch };
};

export { useEventListener };
export default ListenerProvier;
