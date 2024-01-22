import React from "react";
import "./Sidebar.css"
import SidebarOption from "./sidebarOption/SidebarOption";
// import { BookmarkBorder, Home, ListAlt, MailOutline, MoreHoriz, NotificationsNone, PermIdentity, Search, Twitter } from "@mui/icons-material";
import { Button, List } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import { BookmarkBorder, BookmarkBorderOutlined, ListAlt, Mail, MailOutline, MoreHoriz, MoreHorizOutlined, NotificationsNoneOutlined, PermIdentity, PermIdentityOutlined, Search, Twitter } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/home">
        <SidebarOption Icon={HomeIcon} text="Home" />
      </Link>
      <Link to="/home/explore">
        <SidebarOption Icon={Search} text="Explore" />
      </Link>
      <Link to="/home/notifications">
        <SidebarOption Icon={NotificationsNoneOutlined} text="Notifications" />
      </Link>
      <Link to="/home/messages">
        <SidebarOption Icon={Mail} text="Messages" />
      </Link>
      <Link to="/home/profile">
        <SidebarOption Icon={PermIdentityOutlined} text="Profile" />
      </Link>
      <Button className="sidebar__tweet-btn" variant="outlined" style={{ paddingLeft: "20px" }}>
        LogOut
      </Button>
    </div>
  );
};

export default Sidebar;
