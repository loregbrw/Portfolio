import { useContext } from "react"
import { StyledText, StyledTitle } from "../../components/text/style"
import { StyledBox, StyledButton, StyledButtons, StyledDiv, StyledFooter, StyledLink } from "./components/style"
import { LanguageContext } from "../../context/language"
import { EColorPalette } from "../../enums/EColorPalette"

export const Contact = () => {

    const { language } = useContext(LanguageContext);

    return (
        <>
            <StyledFooter>
                <StyledTitle>Lorena Gobara Falci</StyledTitle>
                <StyledBox>
                    <StyledText style={{ margin: "0 5px" }}>{language === "Portuguese" ? "e-mail" : "email"}: loregobara@gmail.com</StyledText>
                    <StyledText style={{ margin: "0 5px" }}>{language === "Portuguese" ? "telefone" : "phone"}: +55 (41) 98524-9657</StyledText>
                </StyledBox>
                <StyledDiv>
                    <StyledLink>
                        <StyledText>{"Github: "}</StyledText>
                        <StyledText onClick={() => window.open("https://github.com/loregbrw", '_blank')} style={{ fontWeight: "700", textDecoration: "underline", cursor: "pointer" }}>{"github.com/loregbrw"}</StyledText>
                    </StyledLink>
                    <StyledLink>
                        <StyledText>{"LinkedIn: "}</StyledText>
                        <StyledText onClick={() => window.open("https://www.linkedin.com/in/lorena-gobara-falci/", '_blank')} style={{ fontWeight: "700", textDecoration: "underline", cursor: "pointer" }}>{"linkedin.com/in/lorena-gobara-falci"}</StyledText>
                    </StyledLink>
                </StyledDiv>
                <StyledButtons>
                    <StyledButton width={40} bgColor={EColorPalette.INDIANRED}>{language === "Portuguese" ? "Mandare-mail" : "Send email"}</StyledButton>
                    <StyledButton width={60} bgColor={EColorPalette.BERKELEYBLUE}>{language === "Portuguese" ? "Mandar mensagem pelo WhatsApp" : "Send a message via WhatsApp"}</StyledButton>
                </StyledButtons>
            </StyledFooter>
        </>
    )
}