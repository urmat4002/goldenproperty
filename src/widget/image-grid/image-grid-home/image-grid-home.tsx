import style from './image-grid-home.module.scss';

const ImageGridHome = () => {
  return (
    <div className={style["igh"]}>
      <div className={style["igh__container"]}>
        <div className={style["igh__title"]}>
          <h2>Наши объекты</h2>
        </div>
        <div className={style["igh__img"]}>
          <div className={style["igh__img_item"]}>
            <img src='' alt='' />
            <h3>Dubai</h3>
          </div>
          <div className={style["igh__img_wrapper"]}>
            <div className={style["igh__img_item"]}>
              <img src='' alt='' />
              <h3>Antalya</h3>
            </div>
            <div className={style["igh__img_item"]}>
              <img src='' alt='' />
              <h3>Istanbul</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageGridHome