import { Section } from "../../components/section"
import { StyledBox, StyledImg, StyledInfo } from "./components/style"

import Lore from "/Lore.png"
import { StyledBoldText, StyledText, StyledTitle } from "../../components/text/style"
import { ButtonLink } from "../../components/link"
import { EColorPalette } from "../../enums/EColorPalette"
import { useContext, useEffect, useState } from "react"
import { LanguageContext } from "../../context/language"

export interface IText {
    text: string,
    bold: boolean,
}

const PortugueseText: IText[] = [
    { text: "Hello, World! Eu sou a Lorena, desenvolvedora e estudante de ", bold: false },
    { text: "Engenharia de Software", bold: true },
    { text: ", apaixonada por tecnologia e inovação. Tenho experiência com React, Java, Python, C#, SQL e outras tecnologias, e estou sempre em busca de aprender mais. Meu objetivo é ", bold: false },
    { text: "desenvolver soluções", bold: true },
    { text: " que façam a diferença e impactem positivamente o mundo ao meu redor.", bold: false },
]

const EnglishText: IText[] = [
    { text: "Hello, World! I am Lorena, a developer and a ", bold: false },
    { text: "Software Engineering", bold: true },
    { text: " student, passionate about technology and innovation. I have experience with React, Java, Python, C#, SQL, and other technologies, and I am always seeking to learn more. My goal is to ", bold: false },
    { text: "develop solutions", bold: true },
    { text: " that make a difference and positively impact the world around me.", bold: false }
];

export const Home = () => {

    const { language } = useContext(LanguageContext);
    const [text, setText] = useState<IText[]>([]);
    const [email, setEmail] = useState("");
    const [linkedin, setLinkedin] = useState("");

    useEffect(() => {
        setText(language === "Portuguese" ? PortugueseText : EnglishText);
        setEmail(language === "Portuguese" ? "Mandar e-mail" : "Send an email");
        setLinkedin(language === "Portuguese" ? "Conectar no LinkedIn" : "Conect on LinkedIn");
    }, [language]);

    return (
        <>
            <Section id="home">
                <StyledImg src={Lore}></StyledImg>
                <StyledInfo>
                    <StyledTitle>Lorena Gobara Falci</StyledTitle>
                    <div style={{ textAlign: "justify" }}>
                        {
                            text.map(text => (
                                text.bold ? <StyledBoldText>{text.text}</StyledBoldText> : <StyledText>{text.text}</StyledText>
                            ))
                        }
                    </div>
                    <StyledBox>
                        <ButtonLink title={ email } color={EColorPalette.CERULEAN} link={"mailto:loregobara@gmail.com"} />
                        <ButtonLink title={ linkedin } color={EColorPalette.INDIANRED} link={"https://www.linkedin.com/in/lorena-gobara-falci/"} />
                    </StyledBox>
                </StyledInfo>
            </Section>
        </>
    )
}