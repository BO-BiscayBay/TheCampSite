import React from "react";
import "../app.css";
import {useSelector, useDispatch} from "react-redux";
import {changeSample} from "../store/sampleReducer.js";
import SearchBar from "./SearchBar.jsx";
import TitleLogo from "./TitleLogo.jsx";
import DistanceSelect from "./DistanceSelect.jsx";
import FilterBySelect from "./FilterBySelect.jsx";
import LogInIcon from "./LogInIcon.jsx";


const Header = () => {

  return (
    <div className="border-y-2 border-pop py-3 flex flex-wrap flex-row justify-around items-center">
      <TitleLogo />
      <LogInIcon />
      <SearchBar />
      <DistanceSelect />
      <FilterBySelect />
    </div>
  )
}

export default Header