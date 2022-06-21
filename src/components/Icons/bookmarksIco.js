import React from 'react';
import s from './icons.module.scss';
const BookmarksIco = ({ condition }) => {
  return (
    <div  className={s.container}>
      <svg className={`${s.icon} ${condition ? s.showedIcon : ''}`} width="33" height="21" viewBox="0 0 33 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 10.5C32 10.5 25.0846 20 16.5 20C7.91538 20 1 10.5 1 10.5C1 10.5 7.91538 1 16.5 1C25.0846 1 32 10.5 32 10.5Z" stroke="#436E85" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
        <path d="M16.5 15.25C19.134 15.25 21.2692 13.1234 21.2692 10.5C21.2692 7.87665 19.134 5.75 16.5 5.75C13.866 5.75 11.7308 7.87665 11.7308 10.5C11.7308 13.1234 13.866 15.25 16.5 15.25Z" stroke="#436E85" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
      </svg>
      <span className={`${s.description} ${condition ? s.showed_descripiton : ''}`}>Закладки</span>
    </div>
  );
};

export default BookmarksIco;