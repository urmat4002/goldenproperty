import { Card } from '../../shared/card/card';
import style from './card-list.module.scss'

const CardList = () => {
  return (
    <div className={style.cl}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default CardList;