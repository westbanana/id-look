import React, {useState} from 'react';
import s from './modal.module.scss';

const Modal = ({ setModalActive }) => {
  const closeBurger = () => {
    setModalActive(false);
  };

  return (
    <div className={s.container} onClick={() => closeBurger()}>
      <div className={s.modal}>
        <div className={s.button}>
          <span className={s.button_description}>
            Профіль
          </span>
        </div>
        <div className={s.button}>
          <span className={s.button_description}>
            Каталог
          </span>
        </div>
        <div className={s.button}>
          <span className={s.button_description}>
            Закладки
          </span>
        </div>
        <div className={s.button}>
          <span className={s.button_description}>
            Увійти
          </span>
        </div>
      </div>
    </div>
  );
};

export default Modal;