import styled from "styled-components";

export const StyledBox = styled.div`
    display: flex;
    flex-direction: column;

    gap: 25px;

    text-align: justify;
`

export const StyledGallery = styled.div`
    display: flex;
    gap: 10px;

    width: 100%;
    justify-content: center;
    flex-wrap: wrap;

    margin-top: 25px;
`

export const StyledImg = styled.img`
    height: 125px;
    border-radius: 3px;

    @media (max-width: 645px) {
        width: 100%;
        height: fit-content;

        height: 200px;
        object-fit: cover;
        object-position: center;
    }
`