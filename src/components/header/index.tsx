import React, { useContext, useEffect, useState } from "react";
import {
  StyledArrow,
  StyledBox,
  StyledButton,
  StyledDiv,
  StyledHeader,
  StyledImg,
  StyledLanguage,
  StyledMenu,
  StyledSpan,
} from "./style";
import Translate from "/Translate.png";
import Change from "/Change.png";
import { LanguageContext } from "../../context/language";
import Menu from "/menu.png";
import { LinkMenu } from "./components/menu";

export interface ILink {
  name: string;
  link: string;
}

const PortugueseLinks: ILink[] = [
  { name: "Inicial", link: "#home" },
  { name: "Sobre mim", link: "#about" },
  { name: "Habilidades", link: "#skills" },
  { name: "Projetos", link: "#projects" },
  { name: "Contato", link: "#contact" },
];

const EnglishLinks: ILink[] = [
  { name: "Home", link: "#home" },
  { name: "About me", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const Header = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const [links, setLinks] = useState<ILink[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isArrowRotated, setIsArrowRotated] = useState(false);

  useEffect(() => {
    setLinks(language === "Portuguese" ? PortugueseLinks : EnglishLinks);
  }, [language]);

  const handleToggleLanguage = () => {
    toggleLanguage();
    setIsArrowRotated(!isArrowRotated);
  };

  const handleLinkClick = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <LinkMenu isShowing={isMenuOpen} links={links} close={closeMenu} />

      <StyledHeader>
        <StyledBox onClick={handleToggleLanguage}>
          <StyledImg src={Translate} />
          <StyledBox>
            <StyledLanguage>{language}</StyledLanguage>
            <StyledArrow rotated={isArrowRotated} src={Change} />
          </StyledBox>
        </StyledBox>
        <StyledDiv>
          {links.map((link) => (
            <StyledSpan
              key={link.link}
              onClick={() => handleLinkClick(link.link)}
            >
              {link.name}
            </StyledSpan>
          ))}
        </StyledDiv>
        <StyledMenu>
          <StyledButton src={Menu} onClick={openMenu} />
        </StyledMenu>
      </StyledHeader>
    </>
  );
};
