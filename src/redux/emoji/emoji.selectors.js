// Import
import { createSelector } from 'reselect';

// ----------------------------------------------------------------------------------------- //

const selectEmoji = state => state.emoji;

export const selectEmojiList = createSelector([selectEmoji], emoji => emoji.emojiList);
