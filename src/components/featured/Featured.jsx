import "./Featured.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
const Featured = ({ type }) => {
  return (
    <>
      <div className="featured">
        {type && (
          <div className="category">
            <span>{type === "movie" ? "Movies" : "series"}</span>
            <select name="genre" id="genre">
              <option>Genre</option>
              <option value="advanture">Advanture</option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
              <option value="fantasy">Fantasy</option>
              <option value="historical">Historical</option>
              <option value="horror">Horror</option>
              <option value="rommance">Rommance</option>
              <option value="sci-fi">Sci-fi</option>
              <option value="thriller">Thriller</option>
              <option value="western">Western</option>
              <option value="animation">Animation</option>
              <option value="drama">Drama</option>
              <option value="documentry">Documentry</option>
            </select>
          </div>
        )}
        <img
          src="https://scontent.fbir7-1.fna.fbcdn.net/v/t31.18172-8/26240518_909957032502450_2573849113003981126_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_ohc=qkWqb6d8wLoAX88EEWu&_nc_ht=scontent.fbir7-1.fna&oh=00_AfA4CUcQ0x7ip-8_4XajJNdc0UDE3gaXK_597o4pDjsxnA&oe=63CD647F"
          alt=""
        />
        <div className="info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/LIFE_magazine_logo.svg/1200px-LIFE_magazine_logo.svg.png"
            alt=""
          />
          <span className="desc">Light, The mysterious truth of life!</span>
          <div className="buttons">
            <button className="play">
              <PlayArrowIcon />
              <span>Play</span>
            </button>
            <button className="more">
              <InfoOutlinedIcon />
              <span>info</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
