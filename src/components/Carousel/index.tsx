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
            <S.CarouselContainer>
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
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.40009 4.87998C10.7601 4.87998 11.7601 5.55998 12.7201 5.55998C13.1601 5.55998 13.5201 5.35998 13.5201 4.87998H14.9201V5.19998C14.9201 8.27998 11.0801 10.08 11.0801 15.16V15.96H7.72009V15.52C7.72009 10.56 10.2401 10.36 12.5601 7.27998L12.5201 7.23998C11.8801 7.59998 11.2001 7.67998 10.5601 7.67998C10.1601 7.67998 9.72009 7.59998 9.28009 7.51998C8.84009 7.43998 8.40009 7.35998 8.08009 7.35998C7.28009 7.35998 6.64009 8.07998 6.64009 9.43998V9.99998H5.08009V4.87998H6.64009V6.11998H6.76009C7.44009 5.19998 8.16009 4.87998 9.40009 4.87998ZM9.40009 3.63998C8.68009 3.63998 8.04009 3.75998 7.48009 3.99998C7.24009 3.79998 6.96009 3.67998 6.64009 3.67998H5.08009C4.40009 3.67998 3.84009 4.23998 3.84009 4.91998V9.99998C3.84009 10.68 4.40009 11.24 5.08009 11.24H6.64009C7.32009 11.24 7.88009 10.68 7.88009 9.99998V9.47998C7.88009 8.91998 8.04009 8.71998 8.08009 8.63998C8.28009 8.63998 8.64009 8.71998 9.00009 8.75998H9.08009C9.20009 8.75998 9.28009 8.79998 9.40009 8.79998C7.88009 10.24 6.48009 11.72 6.48009 15.48V15.92C6.48009 16.6 7.04009 17.16 7.72009 17.16H11.0801C11.7601 17.16 12.3201 16.6 12.3201 15.92V15.12C12.3201 12.64 13.3601 11.08 14.4001 9.51998C15.2801 8.19998 16.1601 6.87998 16.1601 5.15998V4.83998C16.1601 4.15998 15.6001 3.59998 14.9201 3.59998H13.5201C13.0401 3.59998 12.6401 3.83998 12.4401 4.23998C12.2401 4.19998 12.0001 4.11998 11.7201 4.03998C11.0801 3.87998 10.3201 3.63998 9.40009 3.63998Z"
                  fill="#E90083"
                />
              </svg>

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
