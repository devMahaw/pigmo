import Button from "../Button";
import CriptoCard from "../CriptoCard";
import {
  CarouselCard,
  CarouselContainer,
  CarouselContent,
  CarouselRow,
  CarouselVoleiCard,
} from "./styles";
import { colors } from "@/styles";

export type Props = {
  variant: "cripto" | "casino" | "sports";
};

export default function Carousel({ variant }: Props) {
  switch (variant) {
    case "cripto":
      return (
        <CarouselRow>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "42px" }}
          >
            <img src="/assets/espadas.svg" alt="Espadas" />
            <span style={{ marginLeft: "6px", marginRight: "40px" }}>
              CRIPTOMOEDAS
            </span>
            <span style={{ fontSize: "14px", color: `${colors.lightPurple}` }}>
              TOTAL 24H VOLUME:
            </span>
            <span
              style={{
                color: `${colors.green}`,
                fontSize: "14px",
                marginLeft: "6px",
                marginRight: "14px",
              }}
            >
              $2.27B
            </span>
            <Button
              variant="buttonDefault"
              title="Clique aqui para negociar"
              style={{
                width: "90px",
                height: "28px",
                marginRight: "8px",
                fontSize: "12px",
              }}
            >
              NEGOCIAR
            </Button>
          </div>
          <CarouselContent>
            <CriptoCard green={true} cripto="btc" />
            <CriptoCard green={false} cripto="eth" />
            <CriptoCard green={false} cripto="sol" />
            <CriptoCard green={true} cripto="bonk" />
            <CriptoCard green={true} cripto="doge" />
            <CriptoCard green={false} cripto="shib" />
          </CarouselContent>
        </CarouselRow>
      );

    case "casino":
      return (
        <CarouselRow>
          <CarouselContainer>
            <img src="/assets/sete.svg" alt="Sete" />
            <span style={{ marginLeft: "6px" }}>CASSINO</span>
          </CarouselContainer>
          <CarouselContent style={{ gap: "20px" }}>
            <a href="">
              <CarouselCard src="/assets/originals.png" alt="Originals" />
            </a>
            <a href="">
              <CarouselCard src="/assets/slots.png" alt="Slots" />
            </a>
            <a href="">
              <CarouselCard src="/assets/gameShows.png" alt="Game Shows" />
            </a>
            <a href="">
              <CarouselCard src="/assets/liveCasino.png" alt="Live Casino" />
            </a>
            <a href="">
              <CarouselCard src="/assets/tableGames.png" alt="Table Games" />
            </a>
            <a href="">
              <CarouselCard src="/assets/blackjack.png" alt="Blackjack" />
            </a>
            <a href="">
              <CarouselCard src="/assets/roulette.png" alt="Roulette" />
            </a>
          </CarouselContent>
        </CarouselRow>
      );

    case "sports":
      return (
        <CarouselRow>
          <CarouselContainer>
            <img
              src="/assets/americanBall.svg"
              alt="Bola de futebol americano"
            />
            <span style={{ marginLeft: "6px" }}>ESPORTES</span>
          </CarouselContainer>
          <CarouselContent style={{ gap: "22px" }}>
            <a href="">
              <CarouselCard src="/assets/tenis.png" alt="Tênis de mesa" />
            </a>
            <a href="">
              <CarouselVoleiCard src="/assets/volei.png" alt="Vôlei" />
            </a>
            <a href="">
              <CarouselCard src="/assets/boxe.png" alt="Boxe" />
            </a>
            <a href="">
              <CarouselCard src="/assets/golfe.png" alt="Golfe" />
            </a>
            <a href="">
              <CarouselCard src="/assets/mma.png" alt="MMA" />
            </a>
            <a href="">
              <CarouselCard src="/assets/sinuca.png" alt="Sinuca" />
            </a>
          </CarouselContent>
        </CarouselRow>
      );
  }
}
