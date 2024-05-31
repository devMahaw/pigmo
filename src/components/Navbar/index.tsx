import * as S from "./styles";
import Button from "../Button";

export default function Navbar() {
  const handleLogoClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
  };

  return (
    <S.NavbarRow>
      <S.NavbarLeft>
        <S.NavbarHamburger src="/assets/hamburger.svg" alt="Hamburger Menu" />
        <S.NavbarLink href="" onClick={handleLogoClick}>
          <S.NavbarPigmo src="/assets/pigmoLogo.svg" alt="Pigmo Logo" />
        </S.NavbarLink>
      </S.NavbarLeft>
      <S.NavbarRight>
        <Button
          variant="buttonLogin"
          title="Clique aqui para entrar em uma conta"
        >
          LOGIN
        </Button>
        <Button
          variant="buttonDefault"
          title="Clique aqui para registrar uma conta nova"
        >
          REGISTER
        </Button>
      </S.NavbarRight>
    </S.NavbarRow>
  );
}
