import React from "react";
import { useDispatch } from "react-redux";
import { switchToPreviousBackgroundImage } from "../backgroundImageSlice";
import '../../../App.css';

const BackgroundImageLeftControl = () => {
  const dispatch = useDispatch();

  return (
    <button
      aria-label="Switch to previous wallpaper"
      onClick={() => {
        dispatch(switchToPreviousBackgroundImage());
      }}
    >
      {"<"}
    </button>
  );
};

export default BackgroundImageLeftControl;
