// Import - Types
import { FILTER_EMOJI } from './emoji.types';

// Import - Emoji
import filterEmoji from 'config/filter-emoji';

// ----------------------------------------------------------------------------------------- //

const INITIAL_STATE = { emojiList: filterEmoji('', 20) };

const emojiReducer = (state = INITIAL_STATE, { type, input = '' }) => {
  const reducer = {
    [FILTER_EMOJI]: {
      ...state,
      emojiList: filterEmoji(input, 20),
    },
  };

  return reducer[type] || state;
};

// Export
export default emojiReducer;
