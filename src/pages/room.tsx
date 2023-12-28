import DetailsCallBack from "../widget/details/details-callback/details-callback";
import DetailsRoom from "../widget/details/details-room/details-room";
import HeroRoom from "../widget/hero/hero-room/hero-room";

const Room = () => {
  return (
    <div>
      <HeroRoom />
      <DetailsRoom />
      <DetailsCallBack />
    </div>
  )
}

export default Room;