import {
  initialState,
  ENGLAND_DATA,
  IRELAND_DATA,
  SCOTLAND_DATA,
  ENGLAND_DATA_LENGTH,
  IRELAND_DATA_LENGTH,
  SCOTLAND_DATA_LENGTH,
} from '../actions';

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ENGLAND_DATA:
      return { ...state, england: action.payload };
    case ENGLAND_DATA_LENGTH:
      return { ...state, englandDataLength: action.payload };
    case IRELAND_DATA:
      return { ...state, ireland: action.payload };
    case IRELAND_DATA_LENGTH:
      return { ...state, irelandDataLength: action.payload };
    case SCOTLAND_DATA:
      return { ...state, scotland: action.payload };
    case SCOTLAND_DATA_LENGTH:
      return { ...state, scotlandDataLength: action.payload };
    default:
      return state;
  }
};

export default Reducer;
