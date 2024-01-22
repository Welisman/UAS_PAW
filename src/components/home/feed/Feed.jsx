import React from'react'; 
import "./Feed.css"
import TweetBox from './tweetBox/TweetBox';
import Post from './post/Post';
// import Sidebar from '../../sidebar/sidebar';

const Feed = () => {
    return <div className='feed'>
        <header className="feed_header">
            <h2>Home</h2>
        </header>
        <TweetBox />
        <Post />
    </div>
};

export default Feed;