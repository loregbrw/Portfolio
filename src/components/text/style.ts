import styled from "styled-components";
import { EColorPalette } from "../../enums/EColorPalette";

export const StyledTitle = styled.span`
    font-size: 2rem;
    font-weight: 900;
`

export const StyledText = styled.span`
    font-weight: 400;
`

export const StyledBoldText = styled.span`
    font-weight: 800;

    color: ${EColorPalette.INDIANRED};
`

export const StyledSubtitle = styled.span`
    font-size: 1.2rem;
    font-weight: 900;

    margin-bottom: 5px;
`