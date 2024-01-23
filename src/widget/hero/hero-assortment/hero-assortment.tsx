import { ArrowLeftIcon, Search } from 'lucide-react';
import { useState } from 'react';
import { Select } from '../../../shared/ui/select/select';
import style from './hero-assortment.module.scss';
import { Typography } from '../../../shared/ui/typography/typography';
import { Link } from 'react-router-dom'
import { Button } from '../../../shared/ui/button/button'

const HeroAssortment = () => {
  const cities = [
    { label: 'Все', value: 1 },
    { label: 'Станбул', value: 2 },
    { label: 'Анталия', value: 3 },
    { label: 'Дубай', value: 4 },
  ];
  const types = [
    { label: 'Популярное', value: 1 },
    { label: 'Новое', value: 2 },
    { label: 'Вторичка', value: 3 },
  ];

  const [, setSearch] = useState('');
  const [city, setCity] = useState<(typeof cities)[0] | undefined>(cities[0]);
  const [sort, setSort] = useState<(typeof types)[0] | undefined>(types[0]);

  return (
    <div className={style.ha}>
      <div className={style.ha__container}>
        <div className={style.ha__search}>
          <div className={style.ha__select}>
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
        <div className={style.ha__title}>
          <div className={style.ha__button_home}>
            <Link to={"/"} >
              <Button type='icon'>
                <ArrowLeftIcon />
              </Button>
            </Link>
          </div>
          <Typography variant="h1" weight="bold">
            Вся недвижимость
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default HeroAssortment;
