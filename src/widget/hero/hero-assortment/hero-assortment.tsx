import { ChevronDown, Search } from 'lucide-react';
import style from './hero-assortment.module.scss';

const HeroAssortment = () => {
  return (
    <div className={style.ha}>
      <div className={style.ha__container}>
        <div className={style.ha__title}>
          <h1>Dubai</h1>
        </div>
        <div className={style.ha__bottom}>
          <div className={style.ha__tab_list}>
            <button>Все</button>
            <button>Квартиры</button>
            <button>Вилы</button>
            <button>Дуплекс</button>
            <button>Магазин</button>
            <button>Участки</button>
          </div>
          <div className={style.ha__search}>
            <div className={style.ha__search_select}>
              <div className={style.ha__select}>
                <p>Дубай</p>
                <ChevronDown />
              </div>
              <div className={style.ha__select}>
                <p>Популярное</p>
                <ChevronDown />
              </div>
            </div>
            <div className={style.ha__search_input}>
              <Search />
              <input type='text' placeholder='Search' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroAssortment