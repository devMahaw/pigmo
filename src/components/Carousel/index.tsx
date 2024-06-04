import Button from "../Button";
import CriptoCard from "../CriptoCard";
import * as S from "./styles";
import { colors } from "@/styles";

export type Props = {
  variant: "cripto" | "casino" | "sports";
};

export default function Carousel({ variant }: Props) {
  switch (variant) {
    case "cripto":
      return (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <S.CarouselRow>
            <S.CarouselContainer
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "42px",
              }}
            >
              <img src="/assets/criptoCarousel/espadas.svg" alt="Espadas" />
              <span style={{ marginLeft: "6px", marginRight: "40px" }}>
                CRIPTOMOEDAS
              </span>
              <span
                style={{ fontSize: "14px", color: `${colors.lightPurple}` }}
              >
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
            </S.CarouselContainer>
            <S.CarouselContent>
              <CriptoCard green={true} cripto="btc" />
              <CriptoCard green={false} cripto="eth" />
              <CriptoCard green={false} cripto="sol" />
              <CriptoCard green={true} cripto="bonk" />
              <CriptoCard green={true} cripto="doge" />
              <CriptoCard green={false} cripto="shib" />
            </S.CarouselContent>
          </S.CarouselRow>
        </div>
      );

    case "casino":
      return (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <S.CarouselRow>
            <S.CarouselContainer>
              <img src="/assets/casinoCarousel/sete.svg" alt="Sete" />
              <span style={{ marginLeft: "6px" }}>CASSINO</span>
            </S.CarouselContainer>
            <S.CarouselContent style={{ gap: "20px" }}>
              <a href="">
                <S.CarouselCard
                  src="/assets/casinoCarousel/originals.png"
                  alt="Originals"
                />
              </a>
              <a href="">
                <S.CarouselCard
                  src="/assets/casinoCarousel/slots.png"
                  alt="Slots"
                />
              </a>
              <a href="">
                <S.CarouselCard
                  src="/assets/casinoCarousel/gameShows.png"
                  alt="Game Shows"
                />
              </a>
              <a href="">
                <S.CarouselCard
                  src="/assets/casinoCarousel/liveCasino.png"
                  alt="Live Casino"
                />
              </a>
              <a href="">
                <S.CarouselCard
                  src="/assets/casinoCarousel/tableGames.png"
                  alt="Table Games"
                />
              </a>
              <a href="">
                <S.CarouselCard
                  src="/assets/casinoCarousel/blackjack.png"
                  alt="Blackjack"
                />
              </a>
              <a href="">
                <S.CarouselCard
                  src="/assets/casinoCarousel/roulette.png"
                  alt="Roulette"
                />
              </a>
            </S.CarouselContent>
          </S.CarouselRow>
        </div>
      );

    case "sports":
      return (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <S.CarouselRow>
            <S.CarouselContainer>
              <img
                src="/assets/sportsCarousel/americanBall.svg"
                alt="Bola de futebol americano"
              />
              <span style={{ marginLeft: "6px" }}>ESPORTES</span>
            </S.CarouselContainer>
            <S.CarouselContent style={{ gap: "22px" }}>
              <a href="">
                <S.CarouselCard
                  src="/assets/sportsCarousel/tenis.png"
                  alt="Tênis de mesa"
                />
              </a>
              <a href="">
                <S.CarouselVoleiCard
                  src="/assets/sportsCarousel/volei.png"
                  alt="Vôlei"
                />
              </a>
              <a href="">
                <S.CarouselCard
                  src="/assets/sportsCarousel/boxe.png"
                  alt="Boxe"
                />
              </a>
              <a href="">
                <S.CarouselCard
                  src="/assets/sportsCarousel/golfe.png"
                  alt="Golfe"
                />
              </a>
              <a href="">
                <S.CarouselCard
                  src="/assets/sportsCarousel/mma.png"
                  alt="MMA"
                />
              </a>
              <a href="">
                <S.CarouselCard
                  src="/assets/sportsCarousel/sinuca.png"
                  alt="Sinuca"
                />
              </a>
            </S.CarouselContent>
          </S.CarouselRow>
        </div>
      );
  }
}
