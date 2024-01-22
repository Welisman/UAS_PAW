// home/Notifications.js
import React from 'react';
import './Notifications.css';

const Notifications = () => {
  const notificationsData = [
    {
      id: 1,
      user: 'JohnDoe',
      action: 'liked your Tweet',
      timestamp: '2 hours ago',
      avatar: 'https://placekitten.com/50/50',
    },
    {
      id: 2,
      user: 'JaneSmith',
      action: 'mentioned you in a Tweet',
      timestamp: '1 day ago',
      avatar: 'https://placekitten.com/50/51',
    },
    {
      id: 3,
      user: 'BobJohnson',
      action: 'retweeted your Tweet',
      timestamp: '3 days ago',
      avatar: 'https://placekitten.com/50/52',
    },
    {
      id: 4,
      user: 'AliceMiller',
      action: 'liked your Reply',
      timestamp: '5 days ago',
      avatar: 'https://placekitten.com/50/53',
    },
    {
      id: 5,
      user: 'CharlieBrown',
      action: 'mentioned you in a Tweet',
      timestamp: '1 week ago',
      avatar: 'https://placekitten.com/50/54',
    },
    {
      id: 6,
      user: 'EvaGreen',
      action: 'followed you',
      timestamp: '2 weeks ago',
      avatar: 'https://placekitten.com/50/55',
    },
    {
      id: 7,
      user: 'FrankWhite',
      action: 'mentioned you in a Tweet',
      timestamp: '2 weeks ago',
      avatar: 'https://placekitten.com/50/56',
    },
    {
      id: 8,
      user: 'GraceTaylor',
      action: 'liked your Tweet',
      timestamp: '3 weeks ago',
      avatar: 'https://placekitten.com/50/57',
    },
    {
      id: 9,
      user: 'HenryJohnson',
      action: 'retweeted your Tweet',
      timestamp: '4 weeks ago',
      avatar: 'https://placekitten.com/50/58',
    },
    {
      id: 10,
      user: 'IvyClark',
      action: 'followed you',
      timestamp: '1 month ago',
      avatar: 'https://placekitten.com/50/59',
    },
  ];

  return (
    <div className="notifications">
      <div className="notifications__content">
        <h2 className="notifications__title">Notifications</h2>
        {notificationsData.map((notification) => (
          <div key={notification.id} className="notification">
            <div
              className="notification__avatar"
              style={{ backgroundImage: `url(${notification.avatar})` }}
            ></div>
            <div className="notification__info">
              <p>
                <strong>{notification.user}</strong> {notification.action}.
              </p>
              <span>{notification.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
