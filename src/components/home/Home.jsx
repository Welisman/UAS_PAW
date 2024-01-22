import React from "react";
import Feed from "./feed/Feed";
import "./Home.css"
import Widgets from "../home/widgets/Widget"

const Home = () => {
    return (
        <div className="home">
            <Feed />
            <Widgets />
        </div>
    );
};

export default Home;