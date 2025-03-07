import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({
  sender,
  body,
  timeStamp,
  id,
  liked,
  onUpdateChatMessages,
}) => {
  const toggleHeartStatus = () => {
    onUpdateChatMessages(id);
  };

  let localRemote =
    sender === 'Vladimir' ? 'chat-entry local' : 'chat-entry remote';

  return (
    <div className={localRemote}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>
        <button className="like" onClick={toggleHeartStatus}>
          {liked ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onUpdateChatMessages: PropTypes.func.isRequired,
};

export default ChatEntry;
