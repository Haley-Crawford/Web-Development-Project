import React from 'react'
import { FaRegHeart, FaPlusCircle } from 'react-icons/fa'

import { IoIosShuffle } from 'react-icons/io';
import { IoHomeOutline } from 'react-icons/io5';
import { IoRepeatOutline } from 'react-icons/io5';
import { BiCategoryAlt } from 'react-icons/bi';
import { TbPlaylist } from 'react-icons/tb';
import { IoPlayBackOutline } from 'react-icons/io5';
import { IoPlayForwardOutline } from 'react-icons/io5';
import { IoPlayOutline } from 'react-icons/io5';
import { IoPause } from 'react-icons/io5';
import { IoReturnDownBackSharp } from 'react-icons/io5';
import { IoSearch } from 'react-icons/io5';
import { IoAddCircleOutline } from 'react-icons/io5';
import { IoSettingsOutline } from 'react-icons/io5'


const Heart = () => <FaRegHeart />

const Shuffle = () => <IoIosShuffle />

const Home = () => <IoHomeOutline />

const Repeat = () => <IoRepeatOutline />

const Category = () => <BiCategoryAlt />

const Playlist = () => <TbPlaylist />

const PlayBack = () => <IoPlayBackOutline />

const Skip = () => <IoPlayForwardOutline />

const Play = () => <IoPlayOutline />

const Pause = () => <IoPause />

const Back = () => <IoReturnDownBackSharp />

const Search = () => <IoSearch />

const Add = () => <IoAddCircleOutline />

const Settings = () => <IoSettingsOutline />

const Like = () => <FaPlusCircle />



export {Heart, Shuffle, Home, Repeat, Category, Playlist, PlayBack, Skip, Play, Pause, Back, Search, Add, Settings, Like};