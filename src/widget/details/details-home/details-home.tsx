import style from './details-home.module.scss';

const DetailsHome = () => {
  return (
    <div className={style.details}>
      <div className={style.details__container}>
        <div className={style.details__title}>
          <h2>О нашей компании</h2>
        </div>
        <div className={style.details__content}>
          <div className={style.details__image}>
            <img src='' alt='' />
          </div>
          <div className={style.details__right}>
            <p>
              Lorem ipsum dolor sit amet consectetur. Elit erat pulvinar
              ullamcorper morbi at amet duis. Feugiat a enim Elit erat pulvinar
              ullamcorper morbi at amet duis. Feugiat a enim r risus euismod nec
              gravida venenatis. Nulla sed malesuada elementum a. Cras sed
              congue felis pellentesque tellus vulputate Lorem ipsum dolor sit
              amet consectetur. Elit erat pulvinar ullamcorper morbi at amet
              duis. Feugiat a enim Elit erat pulvinar ullamc.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsHome;