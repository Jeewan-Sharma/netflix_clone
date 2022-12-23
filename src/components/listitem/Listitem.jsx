import "./Listitem.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
const Listitem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div
      className="listitem"
      style={{
        left: isHovered && index * 225 - 275 + index * 43,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://scontent.fbir7-1.fna.fbcdn.net/v/t1.6435-9/78666040_1419403268224488_3851200906926227456_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=HvMLp3GpqoYAX94AOBD&_nc_ht=scontent.fbir7-1.fna&oh=00_AfD6qZsIQZhs-mtT7B4-uO0fUiM4w8zFRojxgWC4SQs4WQ&oe=63CD7D62"
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop></video>
          <div className="iteminfo">
            <div className="icons">
              <PlayArrowIcon className="icon" />
              <AddIcon className="icon" />
              <ThumbUpOffAltIcon className="icon" />
              <ThumbDownOffAltIcon className="icon" />
            </div>
            <div className="iteminfotop">
              <span>1 hour 14 mins</span>
              <span className="limit">+18</span>
              <span>1997</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              aspernatur soluta quaerat magni animi autem quo, iure est corrupti
              optio ut.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Listitem;
