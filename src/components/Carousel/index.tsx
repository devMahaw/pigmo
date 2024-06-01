import CriptoCard from "../CriptoCard";
import { CarouselRow } from "./styles";

export default function Carousel() {
  return (
    <CarouselRow>
      <div></div>
      <div>
        <CriptoCard green={true} cripto="btc" />
        <CriptoCard green={false} cripto="eth" />
        <CriptoCard green={false} cripto="sol" />
        <CriptoCard green={true} cripto="bonk" />
        <CriptoCard green={true} cripto="doge" />
        <CriptoCard green={false} cripto="shib" />
      </div>
    </CarouselRow>
  );
}
