import { AnyAction } from 'redux';
import { IModalsReducer } from '../types';

const initialState: IModalsReducer = {
  contactUs: false,
};

const modalsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'CONTACTUS_OPEN': {
      return { ...state, contactUs: true };
    }
    case 'CONTACTUS_CLOSE': {
      return { ...state, contactUs: false };
    }
    default:
      return state;
  }
};

export default modalsReducer;
