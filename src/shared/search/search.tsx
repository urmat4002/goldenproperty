import { ChevronDown, SearchIcon } from 'lucide-react';
import style from './search.module.scss';

const Search = () => {
  return (
    <div className={style.search}>
      <div className={style.search__container}>
        <div className={style.search__form}>
          <SearchIcon color="#b9bcbe" />
          <input
            className={style.search__input}
            type="text"
            placeholder="Поиск"
          />
        </div>
        <div className={style.search__select}>
          Город
          <ChevronDown />
        </div>
        <div className={style.search__select}>
          Тип
          <ChevronDown />
        </div>
        <button className={style.search__button}>
          Поиск
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

export default Search;
