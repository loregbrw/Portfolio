import styled from "styled-components";
import { EColorPalette } from "../../../../enums/EColorPalette";

export const StyledBg = styled.main`
    width: 100%;
    height: 100vh;

    background-color: rgb(0, 0, 0, 0.5);

    position: fixed;
    z-index: 500;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 35px;
`

export const StyledMenu = styled.div`
    background-color: #1c1c1c;

    width: 100%;
    max-width: 400px;

    color: ${EColorPalette.PLATINUM};

    padding: 10px;
    border-radius: 3px;

    display: flex;
    flex-direction: column;
    gap: 5px;
`

export const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const StyledTitle = styled.span`
    font-size: 1.2rem;
    font-weight: 500;
`

export const StyledClose = styled.img`
    height: 23px;

    filter: opacity(70%);
    cursor: pointer;

    transition: 300ms;

    &:hover {
        filter: opacity(100%);
    }
`

export const StyledHr = styled.hr`
    border: ${EColorPalette.CERULEAN} solid 2px;
    margin: 10px 0;

    border-radius: 5px;
`

export const StyledLink = styled.span`
    filter: opacity(70%);
    cursor: pointer;

    transition: 300ms;

    &:hover {
        filter: opacity(100%);
    }
`