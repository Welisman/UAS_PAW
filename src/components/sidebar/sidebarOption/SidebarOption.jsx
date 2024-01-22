import React from "react";
import "./SidebarOption.css";

const SidebarOption = (props) => {
    const {text, icon, active} = props;
    return <div className={`sidebar-option ${active && "sidebar-option__active"}`}>
        <h2 className="sidebar-option__label">{text}</h2>
    </div>;
}

export default SidebarOption;