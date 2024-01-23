import { Carousel } from '../widget/carousel/carousel';
import DetailsHome from '../widget/details/details-home/details-home';
import Hero from '../widget/hero/hero-home/hero';
import ImageGridHome from '../widget/image-grid/image-grid-home/image-grid-home';

const Home = () => {
  return (
    <div>
      <Hero />
      {/* <ImageGridHome /> */}
      <Carousel />
      <DetailsHome />
    </div>
  );
};

export default Home;
