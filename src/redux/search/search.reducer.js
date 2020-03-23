// Import - Types
import { ON_SEARCH_CHANGE } from './search.types';

// ----------------------------------------------------------------------------------------- //

const INITIAL_STATE = {
  input: '',
};

const searchReducer = (state = INITIAL_STATE, { type, input }) => {
  const reducer = {
    [ON_SEARCH_CHANGE]: {
      ...state,
      input,
    },
  };

  return reducer[type] || state;
};

// Export
export default searchReducer;
