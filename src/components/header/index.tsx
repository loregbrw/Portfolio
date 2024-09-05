import {
  StyledArrow,
  StyledBox,
  StyledDiv,
  StyledHeader,
  StyledImg,
  StyledSpan,
} from "./style";
import Translate from "../../assets/Translate.png";
import Arrow from "../../assets/Arrow.png";

const Links: string[] = ["/aboutme", "/skills", "/projects", "/contact"];

interface ILink {
  name: string;
  link: number;
}

const PortugueseLinks: ILink[] = [
  { name: "Sobre mim", link: 0 },
  { name: "Habilidades", link: 1 },
  { name: "Projetos", link: 2 },
  { name: "Contato", link: 3 },
];

const EnglishLinks: ILink[] = [
  { name: "About me", link: 0 },
  { name: "Skills", link: 1 },
  { name: "Projects", link: 2 },
  { name: "Contact", link: 3 },
];

export const Header = () => {
  return (
    <>
      <StyledHeader>
        <StyledDiv>
          <StyledImg src={Translate} />
          <StyledBox>
            <StyledSpan>Portuguese</StyledSpan>
            <StyledArrow src={Arrow}></StyledArrow>
          </StyledBox>
        </StyledDiv>
        <StyledDiv>
          {PortugueseLinks.map((link) => (
            <StyledSpan key={link.link}>{link.name}</StyledSpan>
          ))}
        </StyledDiv>
      </StyledHeader>
    </>
  );
};
