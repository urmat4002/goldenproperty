import { BtnDown } from '@/shared/ui';
import style from './Select.module.scss';
import { FC, useEffect, useState } from 'react';
import { Options } from './type/type'

export const Select: FC = () => {
  
  const [city, setCity] = useState<boolean>(true)
  const [type, setType] = useState<boolean>(true)
  const [popular, setPopular] = useState<boolean>(true)
  const [checkboxDubai,setCheckboxDubai] = useState<boolean>(false)
  const [checkboxIstambul,setCheckboxIstambul] = useState<boolean>(false)
  const [checkboxAntalya,setCheckboxAntalya] = useState<boolean>(false)
  const [checkboxAll,setCheckboxAll] = useState<boolean>(false)
  const [optionsCity, setOptionsCity] = useState<Options>({
    city:'City',dubai:'Dubai', istanbul: 'Istanbul',antalya:'Antalya', all:'All',
  })
  const [result, setResult] = useState<object>({results: ''})

  useEffect(() => {
    console.log(result);
  },[result])

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
    setCheckboxDubai(true)
    setCheckboxIstambul(false)
    setCheckboxAntalya(false)
    setCheckboxAll(false)
    setCity(true)
  }
  const ChangeValue2 = () => {
    setOptionsCity({...optionsCity, city: optionsCity.istanbul})
    setCheckboxDubai(false)
    setCheckboxIstambul(true)
    setCheckboxAntalya(false)
    setCheckboxAll(false)
    setCity(true)
  }
  const ChangeValue3 = () => {
    setOptionsCity({...optionsCity, city: optionsCity.antalya})
    setCheckboxDubai(false)
    setCheckboxIstambul(false)
    setCheckboxAntalya(true)
    setCheckboxAll(false)
    setCity(true)
  }
  const ChangeValue4 = () => {
    setOptionsCity({...optionsCity, city: optionsCity.all})
    setCheckboxIstambul(false)
    setCheckboxAntalya(false)
    setCheckboxAll(true)
    setCity(true)
  }
  const showResults = () => {
    if(checkboxDubai === true){
      setResult({...result, results: optionsCity.dubai})
    }
    if(checkboxIstambul === true){
      setResult({...result, results: optionsCity.istanbul})
    }
    if(checkboxAntalya === true){
      setResult({...result, results: optionsCity.antalya})
    }
    if(checkboxAntalya === true){
      setResult({...result, results: optionsCity.all})
    }
  } 

  return (
    <div className={style.Select} onClick={() => setCity(true)} >
      <div className={city ? style.Select__city : style.Select__city__active} onClick={(e) => e.stopPropagation()}>
        <button className={style.Select__title} onClick={showOptions}>
          {optionsCity.city}
          <p><BtnDown/></p>
        </button>
        <div className={city ? style.Select__options : style.Select__options__active}>
          <ul onClick={ChangeValue}>
            <input 
              checked={checkboxDubai}
              type="checkbox"
            />
            <li>{optionsCity.dubai}</li>
          </ul>
          <ul onClick={ChangeValue2}>
            <input
              type="checkbox"
              checked={checkboxIstambul}
            />
            <li>{optionsCity.istanbul}</li>
          </ul>
          <ul>
            <input 
              type="checkbox"
              checked={checkboxAntalya}
            />
            <li onClick={ChangeValue3}>{optionsCity.antalya}</li>
          </ul>
          <ul>
            <input 
              checked={checkboxAll}
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
      <button onClick={showResults} className={style.Select__btn}>Show results</button>
    </div>
  ) 
};
