import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebard__top">
        <img
          className="sidebar__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/5/56/Spotify_logo_horizontal_black.jpg"
          alt=""
        />
        <SidebarOption title="Home" Icon={HomeIcon}></SidebarOption>
        <SidebarOption title="Search" Icon={SearchIcon}></SidebarOption>
        <SidebarOption
          title="Your Library"
          Icon={LibraryMusicIcon}
        ></SidebarOption>
      </div>
      <div className="sidebar__playlists"></div>
      <div className="sidebar__bottom"></div>
    </div>
  );
}

export default Sidebar;
