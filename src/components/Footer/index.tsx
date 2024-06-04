import { useState } from "react";
import { colors } from "@/styles";
import * as S from "./styles";

export type Props = {
  isActive?: boolean;
  onClick?: () => void;
};

export default function Footer({ isActive, onClick }: Props) {
  const [isItemActive, setIsItemActive] = useState(false);

  const handleButtonClick = () => {
    setIsItemActive((prevIsItemActive) => !prevIsItemActive);
  };

  return (
    <S.FooterRow>
      <div
        style={{
          backgroundColor: `${colors.darkerPurpleFooter}`,
          marginTop: "100px",
          borderTop: `1px solid ${colors.darkPurple}`,
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "230px",
              marginTop: "80px",
            }}
          >
            <img
              src="/assets/footerImages/pigmoLogoWhite.png"
              alt="Pigmo Logo"
            />
            <div style={{ display: "flex", marginBottom: "24px" }}>
              <img
                src="/assets/footerImages/pigNose.svg"
                alt="Nariz de porco"
              />
              <S.FooterText style={{ marginLeft: "24px" }}>
                <span>BEYOND</span> LUCK
              </S.FooterText>
              <img
                src="/assets/footerImages/pigNose.svg"
                alt="Nariz de porco"
              />
            </div>
          </div>
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
                onClick={handleButtonClick}
                isActive={isItemActive}
              >
                About
              </S.FooterListItem>
              <S.FooterListItem
                onClick={handleButtonClick}
                isActive={isItemActive}
              >
                Support
              </S.FooterListItem>
              <S.FooterListItem
                onClick={handleButtonClick}
                isActive={isItemActive}
              >
                Provably Fair
              </S.FooterListItem>
            </S.FooterList>
            <S.FooterList>
              <span>POLICY</span>
              <S.FooterListItem
                onClick={handleButtonClick}
                isActive={isItemActive}
              >
                Terms of Service
              </S.FooterListItem>
              <S.FooterListItem
                onClick={handleButtonClick}
                isActive={isItemActive}
              >
                Privacy Policy
              </S.FooterListItem>
              <S.FooterListItem
                onClick={handleButtonClick}
                isActive={isItemActive}
              >
                License
              </S.FooterListItem>
            </S.FooterList>
            <S.FooterList style={{ marginRight: "24px" }}>
              <span>COMMUNITY</span>
              <S.FooterListItem
                onClick={handleButtonClick}
                isActive={isItemActive}
              >
                Twitter
              </S.FooterListItem>
              <S.FooterListItem
                onClick={handleButtonClick}
                isActive={isItemActive}
              >
                Instagram
              </S.FooterListItem>
              <S.FooterListItem
                onClick={handleButtonClick}
                isActive={isItemActive}
              >
                Facebook
              </S.FooterListItem>
            </S.FooterList>
            <S.FooterList style={{ marginTop: "28.5px" }}>
              <S.FooterListItem
                onClick={handleButtonClick}
                isActive={isItemActive}
              >
                Telegram
              </S.FooterListItem>
              <S.FooterListItem
                onClick={handleButtonClick}
                isActive={isItemActive}
              >
                Discord
              </S.FooterListItem>
              <S.FooterListItem
                onClick={handleButtonClick}
                isActive={isItemActive}
              >
                Zealy
              </S.FooterListItem>
            </S.FooterList>
          </div>
        </div>
        <div>
          <div>
            <S.FooterLink href="">
              <img src="/assets/footerImages/discord.png" alt="Discord" />
              <p>Join Discord's largest community of players now!</p>
            </S.FooterLink>
            <S.FooterLink href="">
              <img src="/assets/footerImages/telegram.svg" alt="Telegram" />
              <p>Pigmo is also on Telegram. Discover more now</p>
            </S.FooterLink>
            <S.FooterLink href="">
              <img src="/assets/footerImages/twitter.svg" alt="Twitter" />
              <p>Follow us on X and keep up everything about us</p>
            </S.FooterLink>
          </div>
        </div>
      </div>
      <div>
        <div>
          <p style={{ fontSize: "14px" }}>
            @2024 Pigmo{" "}
            <span style={{ color: `${colors.lightPurple}` }}>
              - All rights reserved. Pigmo is licensed and authorized, operating
              under the Game Service Provider Master License.
            </span>
          </p>
        </div>
        <div>
          <img src="/assets/footerImages/envelope.svg" alt="Envelope" />
          <p style={{ fontSize: "14px", color: `${colors.lightPurple}` }}>
            CONTACT US
          </p>
        </div>
      </div>
    </S.FooterRow>
  );
}
