import React from "react";
import "./TweetBox.css"
import { Avatar, Button } from "@mui/material";
import { ImageOutlined, GifBoxOutlined, PollOutlined, SentimentSatisfiedOutlined, CalendarTodayOutlined, LocationOnOutlined } from "@mui/icons-material";

const TweetBox = () => {
    return <div className="tweetbox">
        <form className="tweetbox_form">
            <Avatar />
            <div className="tweetbox__form-field">
                <div className="tweetbox__input">
                    <input type="text" placeholder="What's happening?" />
                </div>
                <div className="tweetbox__input-icons">
                    <div className="tweetbox__icons">
                        <ImageOutlined className="tweetbox__icon"/>
                        <GifBoxOutlined className="tweetbox__icon"/>
                        <PollOutlined className="tweetbox__icon"/>
                        <SentimentSatisfiedOutlined className="tweetbox__icon"/>
                        <CalendarTodayOutlined className="tweetbox__icon"/>
                        <LocationOnOutlined className="tweetbox__icon"/>
                    </div>
                    <Button className="tweetbox__btn">Tweet</Button>
                </div>
            </div>
        </form>
    </div>
};

export default TweetBox;