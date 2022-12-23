import "./navbar.scss";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png"
            alt="netflix"
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New Arrivals</span>
          <span>My List</span>
        </div>
        <div className="right">
          <SearchIcon className="icon" />
          <span>KIDS</span>
          <NotificationsIcon className="icon" />
          <img
            src="https://scontent.fbir7-1.fna.fbcdn.net/v/t1.6435-9/118649231_1663740450457434_7566467961128852698_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=1ZbPWh3fI7sAX-wFn2G&_nc_ht=scontent.fbir7-1.fna&oh=00_AfAKT4zKZeGDKlZ6VR8GFETkmCauNWeYhLALEHSreSWSIA&oe=63CD5386"
            alt=""
          />
          <div className="profile">
            <ArrowDropDownIcon className="icon" />
            <div className="options">
              <span>Setting</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
