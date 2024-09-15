import { useContext } from "react"
import { StyledText, StyledTitle } from "../../components/text/style"
import { StyledBox, StyledButton, StyledButtons, StyledDiv, StyledFooter, StyledLink } from "./components/style"
import { LanguageContext } from "../../context/language"
import { EColorPalette } from "../../enums/EColorPalette"
import { StyledSection } from "../../components/section/style"

export const Contact = () => {

    const { language } = useContext(LanguageContext);

    return (
        <>
            <StyledSection id="contact" style={{ padding: 0, flexDirection: "column", justifyContent: "flex-end" }}>
                <StyledFooter>
                    <StyledTitle>Lorena Gobara Falci</StyledTitle>
                    <StyledBox>
                        <StyledText style={{ margin: "0 5px" }}>{language === "Portuguese" ? "e-mail" : "email"}: loregobara@gmail.com</StyledText>
                        <StyledText style={{ margin: "0 5px" }}>{language === "Portuguese" ? "telefone" : "phone"}: +55 (41) 98524-9657</StyledText>
                    </StyledBox>
                    <StyledDiv>
                        <StyledLink>
                            <StyledText>{"Github: "}</StyledText>
                            <StyledText onClick={() => window.open("https://github.com/loregbrw", '_blank')} style={{ fontWeight: "500", textDecoration: "underline", cursor: "pointer" }}>{"github.com/loregbrw"}</StyledText>
                        </StyledLink>
                        <StyledLink>
                            <StyledText>{"HackerRank: "}</StyledText>
                            <StyledText onClick={() => window.open("https://www.hackerrank.com/profile/loregbrw", '_blank')} style={{ fontWeight: "500", textDecoration: "underline", cursor: "pointer" }}>{"hackerrank.com/profile/loregbrw"}</StyledText>
                        </StyledLink>
                    </StyledDiv>
                    <StyledButtons>
                        <StyledButton onClick={() => window.open("https://www.linkedin.com/in/lorena-gobara-falci/", '_blank')} width={35} bgColor={EColorPalette.INDIANRED}>{language === "Portuguese" ? "Ver LinkedIn" : "See LinkedIn"}</StyledButton>
                        <StyledButton onClick={() => window.open("https://wa.me/5541985249657", '_blank')} width={65} bgColor={EColorPalette.BERKELEYBLUE}>{language === "Portuguese" ? "Mandar mensagem pelo WhatsApp" : "Send a message via WhatsApp"}</StyledButton>
                    </StyledButtons>
                </StyledFooter>
            </StyledSection>
        </>
    )
}