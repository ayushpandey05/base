import { useState } from "react";

const useMultiState = (initialState) => {
  const [state, setMultiState] = useState({ ...initialState });

  const setState = async (newState) => {
    await setMultiState({ ...state, ...newState });
  };

  return [state, setState];
};

export default useMultiState;
