import { createStore } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { devToolsEnhancer } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';

export const setPartyData = (partyData) => ({
  type: 'SET_PARTY_DATA',
  payload: partyData,
});

export const setNotesData = (notesData) => ({
  type: 'SET_NOTES_DATA',
  payload: notesData,
})

export const setCurrentPartyIndex = (index) => ({
  type: 'SET_CURRENT_PARTY_INDEX',
  payload: index,
});

export const setCurrentNoteIndex = (index) => ({
  type: 'SET_CURRENT_NOTE_INDEX',
  payload: index,
});

export const setAddingMember = (status) => ({
  type: 'SET_ADDING_MEMBER',
  payload: status,
})

export const setCreatingNote = (status) => ({
  type: 'SET_CREATING_NOTE',
  payload: status,
})

export const removeParty = (index) => ({
  type: 'REMOVE_PARTY',
  payload: index,
});

const initialState = {
  partyData: [],
  notesData: [],
  currentPartyIndex: null,
  currentNoteIndex: null,
  addingMember: false,
  creatingNote: false,
}

// Define reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE: {
      return {
        ...state,
        ...action.payload,
      }
    };
    case 'SET_PARTY_DATA':
      console.log('setting party data: ', action.payload);
      return {
        ...state,
        partyData: action.payload,
      };
    case 'SET_NOTES_DATA':
      console.log('setting notes data: ', action.payload);
      return {
        ...state,
        notesData: action.payload,
      };
    case 'SET_CURRENT_PARTY_INDEX':
      console.log('setting party index: ', action.payload);
      return {
        ...state,
        currentPartyIndex: action.payload,
      };
    case 'SET_CURRENT_NOTE_INDEX':
      console.log('setting note index: ', action.payload);
      return {
        ...state,
        currentNoteIndex: action.payload,
      };
    case 'SET_ADDING_MEMBER':
      console.log('adding member: ', action.payload);
      return {
        ...state,
        addingMember: action.payload,
      };
    case 'SET_CREATING_NOTE':
      console.log('creating note: ', action.payload);
      return {
        ...state,
        creatingNote: action.payload,
      }
    case 'REMOVE_PARTY':
      console.log('removing party: ', action.payload);
      const indexToRemove = action.payload;
      const updatedPartyData = state.partyData.filter((party, index) => index !== indexToRemove);
      return {
        ...state,
        partyData: updatedPartyData,
      };
    default:
      return state;
  }
};

// const makeStore = context => createStore(reducer, devToolsEnhancer());

const makeStore = (context, isServer) => {
  if (isServer) {
    return createStore(reducer, devToolsEnhancer());
  } else {
    const { persistStore, persistReducer } = require('redux-persist');

    const persistConfig = {
      key: 'nextjs',
      whitelist: ['partyData', 'notesData', 'currentPartyIndex', 'currentNoteIndex', 'addingMember'],
      storage,
    }

    const persistedReducer = persistReducer(persistConfig, reducer);

    const store = createStore(persistedReducer, devToolsEnhancer());

    store.__persistor = persistStore(store);

    return store;
  }
}

export const wrapper = createWrapper(makeStore, { debug: true });