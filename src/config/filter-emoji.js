// Import - Emoji List
import emojiList from 'utils/emoji-list.json';

// ----------------------------------------------------------------------------------------- //

const filterEmoji = (searchText, maxResults) =>
  emojiList
    .filter(emoji => {
      if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }

      if (emoji.keywords.includes(searchText)) {
        return true;
      }

      return false;
    })
    .slice(0, maxResults);

// Export
export default filterEmoji;
