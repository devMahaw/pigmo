import * as S from "./styles";
import { colors } from "@/styles";

export type Props = {
  green: boolean;
  cripto: "btc" | "eth" | "sol" | "bonk" | "doge" | "shib";
};

export default function CriptoCard({ green, cripto }: Props) {
  const criptoIcons: { [key in Props["cripto"]]: string } = {
    btc: "/assets/criptoCarousel/bitcoin.svg",
    eth: "/assets/criptoCarousel/ethereum.svg",
    sol: "/assets/criptoCarousel/solana.svg",
    bonk: "/assets/criptoCarousel/bonk.svg",
    doge: "/assets/criptoCarousel/doge.svg",
    shib: "/assets/criptoCarousel/shiba.svg",
  };

  return (
    <S.CriptoCardLink href="">
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={criptoIcons[cripto]} alt={cripto.toUpperCase()} />
        <span style={{ marginRight: "30px", marginLeft: "12px" }}>
          {cripto.toUpperCase()}
        </span>
        <S.CriptoValueDiv green={green}>
          <img
            src={
              green
                ? "/assets/criptoCarousel/greenArrow.svg"
                : "/assets/criptoCarousel/redArrow.svg"
            }
            alt={green ? "Seta Verde" : "Seta Vermelha"}
          />
          <S.CriptoTextLittle>2.13%</S.CriptoTextLittle>
        </S.CriptoValueDiv>
      </div>
      <S.CriptoLine style={{ marginTop: "12px" }}></S.CriptoLine>
      <div style={{ display: "flex" }}>
        <span style={{ fontSize: "18px", margin: "8px 0px" }}>$60,390.85</span>
      </div>
      <S.CriptoLine></S.CriptoLine>
      <div
        style={{
          marginTop: "12px",
          marginBottom: "10px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <S.CriptoTextLittle style={{ color: `${colors.lightPurple}` }}>
          24 VOL
        </S.CriptoTextLittle>
        <S.CriptoTextLittle>$757M</S.CriptoTextLittle>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <S.CriptoTextLittle style={{ color: `${colors.lightPurple}` }}>
          LEVERAGE
        </S.CriptoTextLittle>
        <S.CriptoTextLittle>1000x</S.CriptoTextLittle>
      </div>
    </S.CriptoCardLink>
  );
}
