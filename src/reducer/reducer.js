import {ACTION_ADD_TO_HISTORY} from "../actions/actions";

const initialState = {
  history: []
};

export default (state=initialState, action) => {
  switch(action.type) {
    case ACTION_ADD_TO_HISTORY:
      const history = [action.data, ...state.history];
      return {
        ...state,
        history: history.slice(0, 5)
      };
    default:
      return state;
  }
}
