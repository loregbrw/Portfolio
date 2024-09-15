import styled from "styled-components";
import { EColorPalette } from "../../enums/EColorPalette";
import { Link } from "react-router-dom";

interface IStyledLinkProps {
    bgColor: string;
}

export const StyledLink = styled(Link)<IStyledLinkProps>`
    background-color: ${({ bgColor }) => bgColor};

    padding: 5px 25px;
    border: none;
    outline: none;

    border-radius: 3px;
    color: ${EColorPalette.PLATINUM};
    
    font-weight: 600;
    font-size: 1rem;

    text-decoration: none;

    transition: 300ms;
    cursor: pointer;

    &:hover {
        filter: brightness(85%) saturate(115%);
    }
`