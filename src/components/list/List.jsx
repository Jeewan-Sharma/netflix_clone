import "./List.scss";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Listitem from "../listitem/Listitem";
import { useRef } from "react";

const List = () => {
  const listRef = useRef();

  const handleClick = (direction) => {
    if (direction === "left") {
      listRef.current.style.transform = `translateX(230px)`;
    }
  };
  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosIcon
          className="sliderArrow left"
          onClick={() => handleClick("left")}
        />
        <div className="container" ref={listRef}>
          <Listitem />
          <Listitem />
          <Listitem />
          <Listitem />
          <Listitem />
          <Listitem />
          <Listitem />
          <Listitem />
          <Listitem />
          <Listitem />
        </div>
        <ArrowForwardIosIcon
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default List;
