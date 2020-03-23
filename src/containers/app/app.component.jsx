// Import - Core
import React from 'react';

// Import - Components
import Header from 'components/Header/header.component';
import SearchInput from 'components/Search-Input/search-input.component';
import EmojiResults from 'components/Emoji-Results/emoji-results.component';

// ----------------------------------------------------------------------------------------- //

const App = () => (
  <div>
    <Header />
    <SearchInput />
    <EmojiResults />
  </div>
);

// Export
export default App;
