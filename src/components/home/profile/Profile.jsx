// home/Profile.js
import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__header">
        <div className="profile__cover">
          <img src="https://placekitten.com/1200/400" alt="Cover" className="profile__cover-image" />
        </div>
        <img src="https://placekitten.com/200/200" alt="Profile" className="profile__avatar" />
        <div className="profile__info">
          <h3>John Doe</h3>
          <p>@john_doe</p>
          <p>Bio: Web Developer | Cat Lover 🐱</p>
          <div className="profile__stats">
            <div className="profile__stat">
              <strong>100</strong> Following
            </div>
            <div className="profile__stat">
              <strong>150</strong> Followers
            </div>
          </div>
        </div>
      </div>
      <div className="profile__details">
        <div className="profile__detail">
          <p>Location: Wonderland</p>
        </div>
        <div className="profile__detail">
          <p>Website: <a href="https://www.example.com">www.example.com</a></p>
        </div>
        <div className="profile__detail">
          <p>Joined Twitter: January 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
