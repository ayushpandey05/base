import { EffectCallback, useEffect } from "react";

const useDidMount = (fn: EffectCallback) => {
  useEffect(fn, []);
};

export default useDidMount;
