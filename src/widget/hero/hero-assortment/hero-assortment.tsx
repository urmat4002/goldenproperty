import { Search } from 'lucide-react';
import { useState } from 'react';
import { Select } from '../../../shared/ui/select/select';
import style from './hero-assortment.module.scss';
import { Typography } from '../../../shared/ui/typography/typography'
import { Button } from '../../../shared/ui/button/button'

const HeroAssortment = () => {
  const cities = [
    { label: 'Дубай', value: 1 },
    { label: 'Станбул', value: 2 },
    { label: 'Анталия', value: 3 },
    { label: 'Анталия', value: 4 },
  ];
  const types = [
    { label: 'Популярное', value: 1 },
    { label: 'Новое', value: 2 },
    { label: 'Вторичка', value: 3 },
    { label: 'Вторичка', value: 4 },
    { label: 'Вторичка', value: 4 },
    { label: 'Вторичка', value: 4 },
  ];

  const [, setSearch] = useState('');
  const [city, setCity] = useState<(typeof cities)[0] | undefined>(cities[0]);
  const [sort, setSort] = useState<(typeof types)[0] | undefined>(types[0]);

  return (
    <div className={style.ha}>
      <div className={style.ha__container}>
        <div className={style.ha__title}>
          <Typography variant='h1' weight='bold' >Dubai</Typography>
        </div>
        <div className={style.ha__bottom}>
          <div className={style.ha__tab_list}>
            <Button>Все</Button>
            <Button>Квартиры</Button>
            <Button>Вилы</Button>
            <Button>Дуплекс</Button>
            <Button>Магазин</Button>
            <Button>Участки</Button>
          </div>
          <div className={style.ha__search}>
            <div className={style.ha__search_select}>
              <Select
                value={city}
                options={cities}
                onChange={(option) => setCity(option)}
              />

              <Select
                value={sort}
                options={types}
                onChange={(option) => setSort(option)}
              />
            </div>
            <div className={style.ha__search_input}>
              <Search />
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAssortment;
