import React, {useState} from 'react';
import s from './modal.module.scss';
import {Link} from "react-router-dom";

const Modal = ({ setModalActive, modalActive }) => {
  const closeBurger = () => {
      setModalActive(false);
  };

  return (
    <div className={s.container} onClick={() => closeBurger()}>
      <div className={s.modal} onClick={ e => e.stopPropagation()}>
        <Link to="/profile">
          <div className={s.button} onClick={() => setModalActive(false)}>
              <span className={s.button_description}>
                Профіль
              </span>
          </div>
        </Link>
        <Link to="/catalog">
          <div className={s.button} onClick={() => setModalActive(false)}>
              <span className={s.button_description}>
                Каталог
              </span>
          </div>
        </Link>
        <Link to="/marks">
          <div className={s.button} onClick={() => setModalActive(false)}>
              <span className={s.button_description}>
                Закладки
              </span>
          </div>
        </Link>
        <Link to="/">
          <div className={s.button} onClick={() => setModalActive(false)}>
              <span className={s.button_description}>
                Увійти
              </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Modal;