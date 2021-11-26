import {
  initialState,
  ENGLAND_DATA,
  IRELAND_DATA,
  SCOTLAND_DATA,
} from '../actions';

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ENGLAND_DATA:
      return { ...state, england: action.payload };
    case IRELAND_DATA:
      return { ...state, ireland: action.payload };
    case SCOTLAND_DATA:
      return { ...state, scotland: action.payload };
    default:
      return state;
  }
};

export default Reducer;
