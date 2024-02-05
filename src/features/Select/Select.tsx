import { BtnDown } from '@/shared/ui';
import style from './Select.module.scss';
import { useState } from 'react';
import { Options } from './type/type'
import { Checkbox } from './type/type'

export const Select = () => {
  
  const [city, setCity] = useState<boolean>(true)
  const [type, setType] = useState<boolean>(true)
  const [popular, setPopular] = useState<boolean>(true)
  const [optionsCity, setOptionsCity] = useState<Options>({
    city:'City',dubai:'Dubai', istanbul: 'Istanbul',antalya:'Antalya', all:'All',
  })
  const [checkbox,setCheckbox] = useState<Checkbox>({
    chboxDubay: false, chboxIstanbul: false, chboxAntalya: false, ChboxAll: false,
  })
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
  
  const ChangeValue = () => {
    setOptionsCity({...optionsCity, city: optionsCity.dubai})
    setCity(true)
  }
  const ChangeValue2 = () => {
    setOptionsCity({...optionsCity, city: optionsCity.istanbul})
    setCity(true)
  }
  const ChangeValue3 = () => {
    setOptionsCity({...optionsCity, city: optionsCity.antalya})
    setCheckbox({...checkbox, chboxAntalya: true})
    setCity(true)
  }
  const ChangeValue4 = () => {
    setOptionsCity({...optionsCity, city: optionsCity.all})
    setCheckbox({...checkbox, ChboxAll: true})
    setCity(true)
  }
  // const showResults = () => {
  //   if(optionsCity.city === optionsCity.dubai){
  //     setCheckbox({...checkbox, chboxDubay: true})
  //   }else if(optionsCity.city === optionsCity.istanbul){
  //     setCheckbox({...checkbox, chboxIstanbul: true})
  //   }else if(optionsCity.city === optionsCity.antalya){
  //     setCheckbox({...checkbox, chboxAntalya: true})
  //   }else if(optionsCity.city === optionsCity.all){
  //     setCheckbox({...checkbox, chboxAntalya: true})
  //   }
  // } 

  return (
    <div className={style.Select}>
      <div className={city ? style.Select__city : style.Select__city__active}>
        <button className={style.Select__title} onClick={showOptions}>
          {optionsCity.city}
          <p><BtnDown/></p>
        </button>
        <div className={city ? style.Select__options : style.Select__options__active}>
          <ul onClick={ChangeValue}>
            <input 
              checked={checkbox.chboxDubay}
              type="checkbox"
            />
            <li>{optionsCity.dubai}</li>
          </ul>
          <ul>
            <input 
              type="checkbox"
              checked={optionsCity.chboxIstanbul}
            />
            <li onClick={ChangeValue2}>{optionsCity.istanbul}</li>
          </ul>
          <ul>
            <input 
              type="checkbox"
              checked={optionsCity.chboxAntalya}
            />
            <li onClick={ChangeValue3}>{optionsCity.antalya}</li>
          </ul>
          <ul>
            <input 
              checked={optionsCity.ChboxAll}
              type="checkbox"
            />
            <li onClick={ChangeValue4}>{optionsCity.all}</li>
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
