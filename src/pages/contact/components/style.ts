import styled from "styled-components";
import { EColorPalette } from "../../../enums/EColorPalette";

export const StyledFooter = styled.footer`
    background-color: ${EColorPalette.CERULEAN};

    display: flex;
    flex-direction: column;

    padding: 100px 10px;
    width: 100%;

    align-items: center;

    color: ${EColorPalette.PLATINUM};
`

export const StyledBox = styled.div`
    display: flex;
    flex-wrap: wrap;

    justify-content: center;
`

export const StyledDiv = styled.div`
    padding: 100px 0;
`

export const StyledLink = styled.div`
    display: flex;
    justify-content: center;

    gap: 5px;
`
interface IButtonProps {
    bgColor: EColorPalette;
    width: number;
}

export const StyledButton = styled.button<IButtonProps>`
    background-color: ${({bgColor}) => bgColor};
    width: ${({width}) => `${width}%`};
    
    border: none;
    border-radius: 3px;

    color: ${EColorPalette.PLATINUM};

    padding: 5px 25px;
    font-weight: 600;

    margin: 0 5px;

    text-decoration: none;

    transition: 300ms;
    cursor: pointer;

    &:hover {
        filter: brightness(85%) saturate(115%);
    }
`

export const StyledButtons = styled.div`
    display: flex;

    width: 100%;
    max-width: 510px;

    padding: 0 20px;
`