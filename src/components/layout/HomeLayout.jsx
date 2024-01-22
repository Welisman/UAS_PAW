import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";


const HomeLayout = () => {
    return (
        <div className="container">
            <div style={{ display: "flex"}}>
                <div style={{width: "20%"}}>
                    <Sidebar />
                </div>
                <div style={{width: "50%"}}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default HomeLayout;