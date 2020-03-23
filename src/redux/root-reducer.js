// Import - Redux
import { combineReducers } from 'redux';

// Import - Reducers
import searchReducer from 'redux/search/search.reducer';
import emojiReducer from 'redux/emoji/emoji.reducer';

// ----------------------------------------------------------------------------------------- //

const rootReducer = combineReducers({
  search: searchReducer,
  emoji: emojiReducer,
});

// Export
export default rootReducer;
