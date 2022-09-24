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
            src="https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-9/72908493_1407283652756657_8587124918884237312_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ENonWvE3iJ0AX9zJUbs&_nc_ht=scontent.fktm8-1.fna&oh=00_AT9rV-h7ryC-g6i8kLNdfxFY-SRvPYPu2ELWwQUNdVvf0A&oe=6353C538"
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
