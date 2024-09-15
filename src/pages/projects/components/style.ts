import styled from "styled-components";
import { EColorPalette } from "../../../enums/EColorPalette";

export const StyledDiv = styled.div`
    width: 100%;
    display: flex;

    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
`

export const StyledProject = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 350px;

    gap: 10px;
    justify-content: space-between;

    text-align: justify;

    background-color: rgb(245, 242, 237, 0.85);
    border-radius: 3px;

    padding: 20px;
`

export const StyledButton = styled.button`
    background-color: ${EColorPalette.CERULEAN};
    
    border: none;
    border-radius: 3px;

    color: ${EColorPalette.PLATINUM};

    padding: 5px 25px;
    font-weight: 600;

    width: fit-content;

    text-decoration: none;

    transition: 300ms;
    cursor: pointer;

    &:hover {
        filter: brightness(85%) saturate(115%);
    }
`