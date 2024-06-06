import { useState } from "react";
import { colors } from "@/styles";
import * as S from "./styles";

export type Props = {
  isActive?: boolean;
  onClick?: () => void;
};

export default function Footer({ onClick }: Props) {
  const [clickedItem, setClickedItem] = useState("");

  const handleButtonClick = (item) => {
    if (item === clickedItem) {
      setClickedItem("");
    } else {
      setClickedItem(item);
      onClick?.();
    }
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: `${colors.darkerPurpleFooter}`,
          marginTop: "100px",
          borderTop: `1px solid ${colors.darkPurple}`,
          borderBottom: `1px solid ${colors.darkPurple}`,
        }}
      >
        <div>
          <S.FooterLinksContainer>
            <S.FooterPigmoContainer>
              <img
                src="/assets/footerImages/pigmoLogoWhite.png"
                alt="Pigmo Logo"
              />
              <div style={{ display: "flex", marginBottom: "24px" }}>
                <img
                  src="/assets/footerImages/pigNose.svg"
                  alt="Nariz de porco"
                />
                <S.FooterText>
                  <span>BEYOND</span> LUCK
                </S.FooterText>
                <img
                  src="/assets/footerImages/pigNose.svg"
                  alt="Nariz de porco"
                />
              </div>
            </S.FooterPigmoContainer>
            <div
              style={{
                display: "flex",
                marginLeft: "60px",
                marginTop: "50px",
              }}
            >
              <S.FooterList>
                <span>PLATAFORM</span>
                <S.FooterListItem
                  onClick={() => handleButtonClick("About")}
                  isActive={clickedItem === "About"}
                >
                  About
                </S.FooterListItem>
                <S.FooterListItem
                  onClick={() => handleButtonClick("Support")}
                  isActive={clickedItem === "Support"}
                >
                  Support
                </S.FooterListItem>
                <S.FooterListItem
                  onClick={() => handleButtonClick("Provably Fair")}
                  isActive={clickedItem === "Provably Fair"}
                >
                  Provably Fair
                </S.FooterListItem>
              </S.FooterList>
              <S.FooterList>
                <span>POLICY</span>
                <S.FooterListItem
                  onClick={() => handleButtonClick("Terms of Service")}
                  isActive={clickedItem === "Terms of Service"}
                >
                  Terms of Service
                </S.FooterListItem>
                <S.FooterListItem
                  onClick={() => handleButtonClick("Privacy Policy")}
                  isActive={clickedItem === "Privacy Policy"}
                >
                  Privacy Policy
                </S.FooterListItem>
                <S.FooterListItem
                  onClick={() => handleButtonClick("License")}
                  isActive={clickedItem === "License"}
                >
                  License
                </S.FooterListItem>
              </S.FooterList>
              <S.FooterList style={{ marginRight: "24px" }}>
                <span>COMMUNITY</span>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    columnGap: "48px",
                  }}
                >
                  <S.FooterListItem
                    onClick={() => handleButtonClick("Twitter")}
                    isActive={clickedItem === "Twitter"}
                  >
                    Twitter
                  </S.FooterListItem>
                  <S.FooterListItem
                    onClick={() => handleButtonClick("Instagram")}
                    isActive={clickedItem === "Instagram"}
                  >
                    Instagram
                  </S.FooterListItem>
                  <S.FooterListItem
                    onClick={() => handleButtonClick("Facebook")}
                    isActive={clickedItem === "Facebook"}
                  >
                    Facebook
                  </S.FooterListItem>
                  <S.FooterListItem
                    onClick={() => handleButtonClick("Telegram")}
                    isActive={clickedItem === "Telegram"}
                  >
                    Telegram
                  </S.FooterListItem>
                  <S.FooterListItem
                    onClick={() => handleButtonClick("Discord")}
                    isActive={clickedItem === "Discord"}
                  >
                    Discord
                  </S.FooterListItem>
                  <S.FooterListItem
                    onClick={() => handleButtonClick("Zealy")}
                    isActive={clickedItem === "Zealy"}
                  >
                    Zealy
                  </S.FooterListItem>
                </div>
              </S.FooterList>
            </div>
          </S.FooterLinksContainer>
          <div>
            <div style={{ display: "flex" }}>
              <S.FooterLinkDiscord href="">
                <img src="/assets/footerImages/discord.png" alt="Discord" />
                <p>Join Discord's largest community of players now!</p>
              </S.FooterLinkDiscord>
              <S.FooterLinkTelegram href="">
                <img src="/assets/footerImages/telegram.svg" alt="Telegram" />
                <p>Pigmo is also on Telegram. Discover more now</p>
              </S.FooterLinkTelegram>
              <S.FooterLinkTwitter href="">
                <img src="/assets/footerImages/twitter.svg" alt="Twitter" />
                <p>Follow us on X and keep up everything about us</p>
              </S.FooterLinkTwitter>
            </div>
          </div>
        </div>
      </div>
      <S.FooterInfo>
        <div style={{ marginLeft: "40px" }}>
          <p style={{ fontSize: "14px" }}>
            @2024 Pigmo{" "}
            <span style={{ color: `${colors.lightPurple}` }}>
              - All rights reserved. Pigmo is licensed and authorized, operating
              under the Game Service Provider Master License.
            </span>
          </p>
        </div>
        <S.FooterContact>
          <img
            src="/assets/footerImages/envelope.svg"
            alt="Envelope"
            style={{ width: "18px" }}
          />
          <p
            style={{
              fontSize: "14px",
              color: `${colors.lightPurple}`,
            }}
          >
            CONTACT US
          </p>
        </S.FooterContact>
      </S.FooterInfo>
    </div>
  );
}
