import DetailsAssortment from "../widget/details/details-assortment/details-assortment"
import DetailsBottom from "../widget/details/details-bottom/details-bottom"
import HeroAssortment from "../widget/hero/hero-assortment/hero-assortment"

const Assortment = () => {
  return (
    <div>
      <HeroAssortment />
      <DetailsAssortment />
      <DetailsBottom />
    </div>
  )
}

export default Assortment