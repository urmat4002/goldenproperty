import { BtnDown } from '@/shared/ui';
import style from './Select.module.scss'
import { useState } from 'react';

export const Select = () => {
  const [city, setCity] = useState<boolean>(true)
  const [type, setType] = useState<boolean>(true)
  const [popular, setPopular] = useState<boolean>(true)


  const showOptions = () => {
    if(city){
      setCity(false)
    }else(
      setCity(true)
    )
  }
  const showOptionsType = () => {
    if(type){
      setType(false)
    }else(
      setType(true)
    )
  }
  const showOptionsPopular = () => {
    if(popular){
      setPopular(false)
    }else(
      setPopular(true)
    )
  }


  return (
    <div className={style.Select}>
      <div className={city ? style.Select__city : style.Select__city__active}>
        <button className={style.Select__title} onClick={showOptions}>
          City
          <p><BtnDown/></p>
        </button>
        <div className={city ? style.Select__options : style.Select__options__active}>
          <ul>
            <input type="checkbox"/>
            <li>Dubai</li>
          </ul>
          <ul>
            <input type="checkbox"/>
            <li>Istanbul</li>
          </ul>
          <ul>
            <input type="checkbox"/>
            <li>Antalya</li>
          </ul>
          <ul>
            <input type="checkbox"/>
            <li>All</li>
          </ul>
        </div>
      </div>
      <div className={type ? style.Select__type : style.Select__city__active}>
        <button className={style.Select__title} onClick={showOptionsType}>
          type
          <p><BtnDown/></p>
        </button>
        <div className={type ? style.Select__options : style.Select__options__active}>
          <ul>
            <input type="checkbox"/>
            <li>text</li>
          </ul>
          <ul>
            <input type="checkbox"/>
            <li>text</li>
          </ul>
          <ul>
            <input type="checkbox"/>
            <li>text</li>
          </ul>
          <ul>
            <input type="checkbox"/>
            <li>text</li>
          </ul>
        </div>
      </div>
      <div className={popular ? style.Select__popular : style.Select__city__active}>
        <button className={style.Select__title} onClick={showOptionsPopular}>
          popular
          <p><BtnDown/></p>
        </button>
        <div className={popular ? style.Select__options : style.Select__options__active}>
          <ul>
            <input type="checkbox"/>
            <li>text</li>
          </ul>
          <ul>
            <input type="checkbox"/>
            <li>text</li>
          </ul>
          <ul>
            <input type="checkbox"/>
            <li>text</li>
          </ul>
          <ul>
            <input type="checkbox"/>
            <li>text</li>
          </ul>
        </div>
      </div>
      <button className={style.Select__btn}>Show results</button>
    </div>
  ) 
};
