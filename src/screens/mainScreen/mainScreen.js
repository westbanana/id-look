import React, {useState} from 'react';
import { Link } from "react-router-dom";
import s from './mainScreen.module.css';
import Modal from "../../components/modals/modal";

const MainScreen = ({ movieList }) => {


  return (
    <div className={s.main_container}>
      <div className={s.gradient_container}>
      </div>
    </div>
  );
};

export default MainScreen;