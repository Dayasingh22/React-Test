import { useReducer, useCallback } from "react";

const initialState = {
  past: [],
  present: null,
};

const reducer = (state, action) => {
  const { past, present } = state;

  // eslint-disable-next-line default-case
  switch (action.type) {
    case "SET":
      const { newPresent } = action;

      if (newPresent === present) {
        return state;
      }
      return {
        past: [...past, present],
        present: newPresent,
      };
  }
};

const useHistory = (initialPresent) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    present: initialPresent,
  });

  const set = useCallback(
    (newPresent) => dispatch({ type: "SET", newPresent }),
    [dispatch]
  );

  return { state: state.present, set };
};

export default useHistory;
