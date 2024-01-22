import React from "react";
import "./Post.css"
import { Avatar } from "@mui/material";
import { ChatBubbleOutline, FavoriteBorderOutlined, MoreHoriz, PublishOutlined, Repeat } from "@mui/icons-material";


const Post = () => {
    return (
        <div className="post">
            <Avatar className="post__avatar" />
            <div className="post__content">
                <div className="post__header">
                    <div className="post__title">
                        <h3>Jhon Doe</h3>
                        <h4>@jhondoe</h4>
                        <MoreHoriz className="post__options" />
                    </div>
                    <div className="post__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo est minus similique atque, ea non, placeat dolores natus ut sunt, exercitationem praesentium molestias voluptates. Aperiam asperiores et facere molestias quisquam!
                    </div>
                    <div className="post__media">
                        <img src="https://placekitten.com/200/200" alt="" />
                    </div>
                    <div className="post__footer">
                        <ChatBubbleOutline />
                        <Repeat />
                        <FavoriteBorderOutlined />
                        <PublishOutlined />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Post;