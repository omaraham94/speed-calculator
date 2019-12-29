export const ACTION_ADD_TO_HISTORY = "ACTION_ADD_TO_HISTORY";

export const addToHistory = (data) => {
  return {
    type: ACTION_ADD_TO_HISTORY,
    data
  };
};
