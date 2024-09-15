import { ILink } from "../..";
import { StyledBg, StyledClose, StyledDiv, StyledHr, StyledLink, StyledMenu, StyledTitle } from "./style"

import Close from "/close.png"

interface IMenuProps {
    isShowing: boolean;
    links: ILink[];
    close: () => void;
}

const handleLinkClick = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

export const LinkMenu = ({ isShowing, links, close }: IMenuProps) => {

    return (
        <>
            <StyledBg style={{ display: isShowing ? "flex" : "none" }} onClick={close} >
                <StyledMenu>
                    <StyledDiv>
                        <StyledTitle>Lorena Gobara Falci</StyledTitle>
                        <StyledClose src={Close} onClick={close} />
                    </StyledDiv>
                    <StyledHr />
                    {links.map((link) => (
                        <StyledLink
                            key={link.link}
                            onClick={() => handleLinkClick(link.link)}
                        >
                            {link.name}
                        </StyledLink>
                    ))}
                    <StyledLink onClick={() => window.open("https://github.com/loregbrw", '_blank')} >Github +</StyledLink>
                </StyledMenu>
            </StyledBg>
        </>
    )
}