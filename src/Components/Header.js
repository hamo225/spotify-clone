import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "../DataLayer";
// import the function to use access the data layer

function Header() {
  const [{ user }, dispatch] = useDataLayerValue();
  // use the function to access the data layer buy destructuring user out of it

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon> </SearchIcon>
        <input
          type="text"
          placeholder="Search for Artists, Songs, or Playlists..."
        />
      </div>
      <div className="header__right">
        {/* input the user image and display name if they exist */}
        <Avatar src={user?.images[0]?.url} alt={user?.display_name}></Avatar>
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
