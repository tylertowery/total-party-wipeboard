import { createStore } from 'redux';

export const setPartyData = (partyData) => ({
  type: 'SET_PARTY_DATA',
  payload: partyData,
});

export const setCurrentIndex = (index) => ({
  type: 'SET_CURRENT_INDEX',
  payload: index,
});

export const setAddingMember = (status) => ({
  type: 'SET_ADDING_MEMBER',
  payload: status,
})

const initialState = {
  partyData: [],
  currentIndex: null,
  addingMember: false,
}

// Define reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PARTY_DATA':
      console.log('setting party data: ', action.payload);
      return {
        ...state,
        partyData: action.payload,
      };
    case 'SET_CURRENT_INDEX':
      console.log('setting index: ', action.payload);
      return {
        ...state,
        currentIndex: action.payload,
      };
    case 'SET_ADDING_MEMBER':
      console.log('adding member: ', action.payload);
      return {
        ...state,
        addingMember: action.payload,
      }
    default:
      return state;
  }
};

// Create Redux store
export const store = createStore(reducer);