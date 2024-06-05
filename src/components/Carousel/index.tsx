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
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.88 12.9108C11.2617 13.4197 11.7938 13.7956 12.4009 13.9852C13.0081 14.1749 13.6596 14.1687 14.263 13.9675C14.8665 13.7664 15.3914 13.3805 15.7633 12.8644C16.1352 12.3484 16.3354 11.7284 16.3354 11.0923C16.3354 10.4086 16.1002 9.78423 15.7183 9.27748L15.7292 9.27385L9.66769 2L3.60615 9.27385L3.61706 9.27748C3.21872 9.79881 3.00199 10.4362 3 11.0923C3 11.7284 3.20014 12.3484 3.57208 12.8644C3.94402 13.3805 4.46889 13.7664 5.07236 13.9675C5.67582 14.1687 6.32728 14.1749 6.93445 13.9852C7.54162 13.7956 8.07372 13.4197 8.45538 12.9108L9.06154 12.1034V14.7292C9.06154 16.5477 6.03077 16.5477 6.03077 16.5477C5.87001 16.5477 5.71583 16.6116 5.60215 16.7252C5.48848 16.8389 5.42462 16.9931 5.42462 17.1538C5.42462 17.3146 5.48848 17.4688 5.60215 17.5825C5.71583 17.6961 5.87001 17.76 6.03077 17.76H13.3046C13.4654 17.76 13.6196 17.6961 13.7332 17.5825C13.8469 17.4688 13.9108 17.3146 13.9108 17.1538C13.9108 16.9931 13.8469 16.8389 13.7332 16.7252C13.6196 16.6116 13.4654 16.5477 13.3046 16.5477C13.3046 16.5477 10.2738 16.5477 10.2738 14.7292V12.1034L10.88 12.9108Z"
                  fill="#E90083"
                />
              </svg>
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
