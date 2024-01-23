import Catalog from '../widget/cards/catalog/catalog';
import DetailsAssortment from '../widget/details/details-assortment/details-assortment';
import HeroAssortment from '../widget/hero/hero-assortment/hero-assortment';

const Assortment = () => {
  return (
    <div>
      <HeroAssortment />
      <DetailsAssortment />
      <Catalog />
    </div>
  );
};

export default Assortment;
