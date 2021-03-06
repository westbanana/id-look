import React, {useState} from 'react';
import s from './sideBar.module.scss';
import Logo from "../logo/logo";
import BookmarksIco from "../Icons/bookmarksIco";
import ProfileIco from "../Icons/profileIco";
import ThemeSwiper from "../themeSwiper/themeSwiper";
import Modal from "../modals/modal";

const SideBar = ({ getModalState }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);

  const changeSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
    getModalState(isSideBarOpen);
  }

  const openBurger = () => {
    setIsModalActive(!isModalActive)
  };


  return (
    <div className={`${s.main_container} ${isSideBarOpen ? s.opened : ''}`}>
      <div className={s.logo} onClick={() => setIsModalActive(false)}>
        <Logo/>
      </div>
      <div className={s.menu}>
        <ProfileIco condition={isSideBarOpen}/>
        <BookmarksIco condition={isSideBarOpen}/>
      </div>
      <div className={s.themeSwiper}>
        <ThemeSwiper />
      </div>
      <div className={`${s.fullSideBar} ${isSideBarOpen ? s.fullSideBarOpened : ''}`} onClick={() => changeSideBar()}>
        <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.70711 8.70711C9.09763 8.31658 9.09763 7.68342 8.70711 7.29289L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L6.58579 8L0.928932 13.6569C0.538408 14.0474 0.538408 14.6805 0.928932 15.0711C1.31946 15.4616 1.95262 15.4616 2.34315 15.0711L8.70711 8.70711ZM7 9H8V7H7V9Z" fill="#325364"/>
        </svg>
      </div>
      <div className={`${s.burger} ${isModalActive ? s.rotateBurger : ''}`} onClick={() => openBurger()}>
        <svg width="33" height="18" viewBox="0 0 33 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 16H33M0 9H33M0 2H33" stroke="#436E85" strokeWidth="3"/>
        </svg>
      </div>
      {isModalActive ? <Modal setModalActive={setIsModalActive} modalActive={isModalActive} /> : ''}
    </div>
  );
};

export default SideBar;