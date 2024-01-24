import { Carousel } from '../widget/carousel/carousel';
import DetailsHome from '../widget/details/details-home/details-home';
import Hero from '../widget/hero/hero-home/hero';

const Home = () => {
  return (
    <div>
      <Hero />
      <Carousel />
      <DetailsHome />
    </div>
  );
};

export default Home;
