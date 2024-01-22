// home/Messages.js
import React from 'react';

const Messages = () => {
  const messages = [
    {
      id: 1,
      username: 'Jane Doe',
      message: 'Hai, apa kabar?',
      timestamp: '2 hours ago',
      avatar: 'https://placekitten.com/50/50',
      sentByCurrentUser: true,
    },
    {
      id: 2,
      username: 'John Smith',
      message: 'Saya baik, terima kasih! Bagaimana dengan Anda?',
      timestamp: '1 hour ago',
      avatar: 'https://placekitten.com/51/51',
      sentByCurrentUser: false,
    },
  ];

  return (
    <div className="messages">
      <h2 className="messages__title">Messages</h2>
      {messages.map((message) => (
        <div
          key={message.id}
          className={`message ${message.sentByCurrentUser ? 'sent' : 'received'}`}
        >
          <div
            className="message__avatar"
            style={{ backgroundImage: `url(${message.avatar})` }}
          />
          <div className="message__content">
            <div className="message__user">{message.username}</div>
            <div className="message__bubble">
              <p>{message.message}</p>
            </div>
            <div className="message__timestamp">{message.timestamp}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Messages;
