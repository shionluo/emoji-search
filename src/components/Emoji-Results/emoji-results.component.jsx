// Import
import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';

// Import - Clipboard
import Clipboard from 'clipboard';

// Import - Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectEmojiList } from 'redux/emoji/emoji.selectors';

// Import - Components
import EmojiResultsRow from 'components/Emoji-Results-Row/emoji-results-row.component';

// Import - Styles
import { EmojiResultsContainer } from './emoji-results.styles';

// ----------------------------------------------------------------------------------------- //

const EmojiResults = ({ emojiList }) => {
  useEffect(() => {
    const clipboard = new Clipboard('.copy-to-clipboard');

    return () => {
      clipboard.destroy();
    };
  }, []);

  return (
    <EmojiResultsContainer>
      {emojiList.map(emoji => (
        <EmojiResultsRow key={emoji.title} title={emoji.title} symbol={emoji.symbol} />
      ))}
    </EmojiResultsContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  emojiList: selectEmojiList,
});

EmojiResults.propTypes = {
  emojiList: PropTypes.array,
};

// Export
export default connect(mapStateToProps)(memo(EmojiResults));
