import Button from "../Button";
import { BannerButtons, BannerImg, BannerText, BannerTitle } from "./styles";

export default function Banner() {
  return (
    <BannerImg>
      <div>
        <BannerText>
          <BannerTitle>
            Boas vindas ao <span>Pigmo</span>!
          </BannerTitle>
          <p>
            Jogue inteligente conosco. Crie sua conta
            <br /> ou entre agora para ganhar recompensas.
          </p>
        </BannerText>
        <BannerButtons>
          <Button
            variant="buttonDefault"
            title="Clique aqui para registrar uma conta nova"
            style={{ width: "200px", marginRight: "8px" }}
          >
            QUERO ME REGISTRAR
          </Button>
          <Button
            variant="buttonIco"
            title="Clique aqui para se conectar com uma conta google"
          >
            <img src="/assets/googleIco.svg" alt="Google" />
          </Button>
          <Button
            variant="buttonIco"
            title="Clique aqui para conectar uma carteira"
          >
            <img src="/assets/wolfIco.svg" alt="Carteira" />
          </Button>
          <Button
            variant="buttonIco"
            title="Clique aqui para se conectar com uma carteira de criptomedas"
          >
            <img src="/assets/sIco.svg" alt="Criptomoeda" />
          </Button>
        </BannerButtons>
      </div>
    </BannerImg>
  );
}
