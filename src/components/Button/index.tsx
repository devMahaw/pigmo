import * as S from "./styles";

export type Props = {
  variant: "buttonDefault" | "buttonLogin" | "buttonIco" | "buttonDrop";
  title: string;
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
};

export default function Button({
  variant,
  title,
  children,
  isActive = false,
  onClick,
}: Props) {
  switch (variant) {
    case "buttonDefault":
      return (
        <S.ButtonDefault variant={variant} title={title}>
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
