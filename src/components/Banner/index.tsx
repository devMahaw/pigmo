import Button from "../Button";
import * as S from "./styles";

export default function Banner() {
  return (
    <S.BannerImg>
      <div>
        <S.BannerText>
          <S.BannerTitle>
            Boas vindas ao <span>Pigmo</span>!
          </S.BannerTitle>
          <p>
            Jogue inteligente conosco. Crie sua conta
            <br /> ou entre agora para ganhar recompensas.
          </p>
        </S.BannerText>
        <S.BannerButtons>
          <S.BannerButtonDefault
            variant="buttonDefault"
            title="Clique aqui para registrar uma conta nova"
            className="banner-button-default"
          >
            QUERO ME REGISTRAR
          </S.BannerButtonDefault>
          <S.BannerButtonsIcos>
            <Button
              variant="buttonIco"
              title="Clique aqui para se conectar com uma conta google"
            >
              <img src="/assets/bannerImages/googleIco.svg" alt="Google" />
            </Button>
            <Button
              variant="buttonIco"
              title="Clique aqui para conectar uma carteira"
            >
              <img src="/assets/bannerImages/wolfIco.svg" alt="Carteira" />
            </Button>
            <Button
              variant="buttonIco"
              title="Clique aqui para se conectar com uma carteira de criptomedas"
            >
              <img src="/assets/bannerImages/sIco.svg" alt="Criptomoeda" />
            </Button>
          </S.BannerButtonsIcos>
        </S.BannerButtons>
      </div>
    </S.BannerImg>
  );
}
