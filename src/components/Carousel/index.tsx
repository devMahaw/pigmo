import Button from "../Button";
import CriptoCard from "../CriptoCard";
import { CarouselContent, CarouselRow } from "./styles";
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
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "52px" }}
          >
            <img src="/assets/sete.svg" alt="Sete" />
            <span style={{ marginLeft: "6px", marginRight: "40px" }}>
              CASSINO
            </span>
          </div>
          <CarouselContent>
            <img src="/assets/originals.png" alt="Originals" />
            <img src="/assets/slots.png" alt="Slots" />
            <img src="/assets/gameShows.png" alt="Game Shows" />
            <img src="/assets/liveCasino.png" alt="Live Casino" />
            <img src="/assets/tableGames.png" alt="Table Games" />
            <img src="/assets/blackjack.png" alt="Blackjack" />
            <img src="/assets/roulette.png" alt="Roulette" />
          </CarouselContent>
        </CarouselRow>
      );

    case "sports":
  }
}
