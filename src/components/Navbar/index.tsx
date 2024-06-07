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
      <div style={{ display: "flex", alignItems: "center" }}>
        <S.NavbarHamburger
          src="/assets/navBarImages/hamburger.svg"
          alt="Hamburger Menu"
        />
        <a
          href=""
          onClick={handleLogoClick}
          style={{ display: "flex", alignItems: "center" }}
        >
          <h1 style={{ marginTop: "6px" }}>
            <S.NavbarPigmo
              src="/assets/navBarImages/pigmoLogo.svg"
              alt="Pigmo Logo"
            />
          </h1>
        </a>
      </div>
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
