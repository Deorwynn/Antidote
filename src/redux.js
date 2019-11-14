import { createStore } from 'redux';

const initialState = {
    inactivePatients: 2,
    randomizedPatients: 1
}

// reducer
export const table = (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATE_RANDOMIZED_PATIENTS': {
      const randomized = action.payload;
      return {
        ...state,
        randomizedPatients: randomized
      }
    }
    case 'UPDATE_INACTIVE_PATIENTS': {
      const inactive = action.payload;
      return {
        ...state,
        inactivePatients: inactive
      }
    }
    default:
      return state;
  }
}
  
// actions
export function updateInactivePatients(payload) {
  return { type: 'UPDATE_INACTIVE_PATIENTS', payload }
};

export function updateRandomizedPatients(payload) {
  return { type: 'UPDATE_RANDOMIZED_PATIENTS', payload }
};

export const store = createStore(table);