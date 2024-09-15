import { useNavigate } from "react-router-dom";
import { ILink } from "../..";
import { StyledBg, StyledClose, StyledDiv, StyledHr, StyledLink, StyledMenu, StyledTitle } from "./style"

import Close from "/close.png"

interface IMenuProps {
    isShowing: boolean;
    links: ILink[];
    close: () => void;
}

export const LinkMenu = ({ isShowing, links, close }: IMenuProps) => {

    const navigate = useNavigate();
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
                            onClick={() => navigate(link.link)}
                        >
                            {link.name}
                        </StyledLink>
                    ))}
                </StyledMenu>
            </StyledBg>
        </>
    )
}