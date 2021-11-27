import axios from 'axios';

// Action Type
export const ENGLAND_DATA = 'ReactReduxCapstone/UK_BANK_HOLIDAYS/ENGLAND_DATA';
export const IRELAND_DATA = 'ReactReduxCapstone/UK_BANK_HOLIDAYS/IRELAND_DATA';
export const SCOTLAND_DATA =
  'ReactReduxCapstone/UK_BANK_HOLIDAYS/SCOTLAND_DATA';

export const initialState = {
  england: [],
  ireland: [],
  scotland: [],
};

// Action Creators
const englandData = [];
export const fetchEnglandData = () => async (dispatch) => {
  const response = await axios.get('https://www.gov.uk/bank-holidays.json');
  const englandData = await response.data;

  dispatch({
    type: ENGLAND_DATA,
    payload: englandData['england-and-wales'].events,
  });
};

export const fetchIrelandData = () => async (dispatch) => {
  const response = await axios.get('https://www.gov.uk/bank-holidays.json');
  const data = await response.data;

  dispatch({ type: IRELAND_DATA, payload: data['northern-ireland'].events });
};

export const fetchScotlandData = () => async (dispatch) => {
  const response = await axios.get('https://www.gov.uk/bank-holidays.json');
  const data = await response.data;

  dispatch({ type: SCOTLAND_DATA, payload: data.scotland.events });
};
