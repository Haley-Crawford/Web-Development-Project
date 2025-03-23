import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoIosShuffle } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { IoRepeatOutline } from "react-icons/io5";
import { BiCategoryAlt } from "react-icons/bi";
import { TbPlaylist } from "react-icons/tb";
import { IoPlayBackOutline } from "react-icons/io5";
import { IoPlayForwardOutline } from "react-icons/io5";
import { IoPlayOutline } from "react-icons/io5";
import { IoPause } from "react-icons/io5";
import { IoReturnDownBackSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";


const Heart = () => {
  return (
    <div>
      <h1><FaRegHeart size={30} color="gold" /></h1>
    </div>
  );
};

const Shuffle = () => {
  return(
    <div>
      <h1><IoIosShuffle size={30} color="gold" /></h1>
    </div>
  );
};

const Home = () => {
  return(
    <div>
      <h1><IoHomeOutline size={30} color="gold" /></h1>
    </div>
  );
};

const Repeat = () => {
  return(
    <div>
      <h1><IoRepeatOutline size={30} color="gold" /></h1>
    </div>
  );
};

const Category = () => {
  return(
    <div>
      <h1><BiCategoryAlt size={30} color="gold" /></h1>
    </div>
  );
};

const Playlist = () => {
  return(
    <div>
      <h1><TbPlaylist size={30} color="gold" /></h1>
    </div>
  );
};

const PlayBack = () => {
  return (
    <div>
      <h1><IoPlayBackOutline size={30} color="gold" /></h1>
    </div>
  );
};

const Skip = () => {
  return (
    <div>
      <h1><IoPlayForwardOutline size={30} color="gold" /></h1>
    </div>
  );
};

const Play = () => {
  return (
    <div>
      <h1><IoPlayOutline size={30} color="gold" /></h1>
    </div>
  );
};

const Pause = () => {
  return (
    <div>
      <h1><IoPause size={30} color="gold" /></h1>
    </div>
  );
};

const Back = () => {
  return (
    <div>
      <h1><IoReturnDownBackSharp size={30} color="gold" /></h1>
    </div>
  );
};

const Search = () => {
  return (
    <div>
      <h1><IoSearch size={30} color="gold" /></h1>
    </div>
  );
};

const Add = () => {
  return (
    <div>
      <h1><IoAddCircleOutline size={30} color="gold" /></h1>
    </div>
  );
};

const Settings = () => {
  return (
    <div>
      <h1><IoSettingsOutline size={30} color="gold" /></h1>
    </div>
  );
};



export {Heart, Shuffle, Home, Repeat, Category, Playlist, PlayBack, Skip, Play, Pause, Back, Search, Add, Settings};