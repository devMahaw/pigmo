import * as S from "./styles";

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
        <button></button>
        <button></button>
      </S.NavbarRight>
    </S.NavbarRow>
  );
}
