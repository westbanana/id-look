import React from 'react';
import s from './index.module.scss';

const SearchField = () => {
  return (
    <div className={s.container}>
      <input placeholder='Пошук'/>
    </div>
  );
};

export default SearchField;