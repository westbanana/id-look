import React, {useState} from 'react';
import s from './mainScreen.module.scss';
import SearchField from "../../components/SearchField";

const MainScreen = ({ movieList }) => {
  const [isSort, setIsSort] = useState(false);

  const changeSort = () =>{
    setIsSort(!isSort);
  }

  console.log(isSort)
  return (
    <div className={s.main_container}>
      <div className={s.gradient_container}>
          <div className={s.containerSearch}>
            <span className={s.newsMobile}>Новини</span>
            <SearchField/>
          </div>
        <div className={s.category}>
          <div className={s.mainButtons}>
            <button>Новинки</button>
            <button>Кіно</button>
            <button>Серіали</button>
            <button>Мультфільми</button>
          </div>
          <div className={s.sort} onClick={changeSort}>
            <span>За датою</span>
            <svg className={isSort ? s.openSort : s.closeSort} width="20" height="10" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.14645 4.86918C4.34171 5.06444 4.65829 5.06444 4.85355 4.86918L8.03553 1.6872C8.2308 1.49194 8.2308 1.17535 8.03553 0.980091C7.84027 0.784829 7.52369 0.784829 7.32843 0.980091L4.5 3.80852L1.67157 0.980091C1.47631 0.784829 1.15973 0.784829 0.964466 0.980091C0.769203 1.17535 0.769203 1.49194 0.964466 1.6872L4.14645 4.86918ZM4 4V4.51563H5V4H4Z" fill="#436E85"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;