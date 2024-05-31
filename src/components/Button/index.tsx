import * as S from "./styles";

export type Props = {
  type: "buttonDefault" | "buttonLogin" | "buttonIco" | "buttonDrop";
  title: string;
  children: string;
};

export default function Button({ type, title, children }: Props) {
  switch (type) {
    case "buttonDefault":
      return (
        <S.ButtonDefault type={type} title={title}>
          {children}
        </S.ButtonDefault>
      );
    case "buttonLogin":
      return (
        <S.ButtonLogin type={type} title={title}>
          {children}
        </S.ButtonLogin>
      );
  }
}
