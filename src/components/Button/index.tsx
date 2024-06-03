import * as S from "./styles";

export type Props = {
  variant:
    | "buttonDefault"
    | "buttonLogin"
    | "buttonIco"
    | "buttonDrop"
    | "buttonArrow";
  title: string;
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
};

export default function Button({
  variant,
  title,
  children,
  isActive = false,
  onClick,
  style,
}: Props) {
  switch (variant) {
    case "buttonDefault":
      return (
        <S.ButtonDefault variant={variant} title={title} style={style}>
          {children}
        </S.ButtonDefault>
      );
    case "buttonLogin":
      return (
        <S.ButtonLogin variant={variant} title={title}>
          {children}
        </S.ButtonLogin>
      );
    case "buttonIco":
      return (
        <S.ButtonIco variant={variant} title={title}>
          {children}
        </S.ButtonIco>
      );
    case "buttonDrop":
      return (
        <S.ButtonDrop
          variant={variant}
          title={title}
          isActive={isActive}
          onClick={onClick}
        >
          {children}
        </S.ButtonDrop>
      );
    default:
      return null;
  }
}
