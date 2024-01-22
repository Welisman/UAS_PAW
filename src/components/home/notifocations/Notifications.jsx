// home/Notifications.js
import React from 'react';
import Sidebar from '../../sidebar/Sidebar';
import './Notifications.css';

const Notifications = () => {
  return (
    <div className="notifications">
      <Sidebar />
      <div className="notifications__content">
        <h2 className="notifications__title">Notifications</h2>
        {/* Contoh notifikasi */}
        <div className="notification">
          <div className="notification__avatar"></div>
          <div className="notification__info">
            <p>
              <strong>JohnDoe</strong> liked your Tweet.
            </p>
            <span>2 hours ago</span>
          </div>
        </div>
        <div className="notification">
          <div className="notification__avatar"></div>
          <div className="notification__info">
            <p>
              <strong>JaneSmith</strong> mentioned you in a Tweet.
            </p>
            <span>1 day ago</span>
          </div>
        </div>
        {/* Tambahkan lebih banyak notifikasi jika diperlukan */}
      </div>
    </div>
  );
};

export default Notifications;
