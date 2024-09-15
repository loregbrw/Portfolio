import { useContext, useEffect, useState } from "react"
import { Section } from "../../components/section"
import { StyledBoldText, StyledSubtitle, StyledText, StyledTitle } from "../../components/text/style"
import { StyledInfo } from "../home/components/style"
import { LanguageContext } from "../../context/language"
import { StyledName, StyledS, StyledSkill } from "./components/style"
import { IText } from "../home"

interface ISkills {
    title: string;
    text: IText[];
}

const PortugueseText1: ISkills[] = [
    {
        title: "Linguagens de Programação", text: [
            { text: "Java", bold: true },
            { text: ", ", bold: false },
            { text: "C#", bold: true },
            { text: ", JavaScript/TypeScript, Python, C, C++.", bold: false },
        ]
    },
    {
        title: "Desenvolvimento Web e Desktop", text: [
            { text: "HTML5/CSS3, ", bold: false },
            { text: "React", bold: true },
            { text: ", ", bold: false },
            { text: "Spring Boot", bold: true },
            { text: ", Hibernate, REST APIs, OutSystems, JavaFX, JDBC (Java Database Connectivity).", bold: false },
        ]
    },
    {
        title: "Banco de Dados", text: [
            { text: "SQL Server, MySQL, PostgreSQL, MongoDB.", bold: false },
        ]
    },
    {
        title: "Ferramentas e Tecnologias", text: [
            { text: "Git", bold: true },
            { text: ", Microsoft Power BI, Microsoft Office (Excel, Word, PowerPoint), Visual Basic for Applications (VBA), Internet of Things (IoT).", bold: false },
        ]
    }
]

const PortugueseText2: ISkills[] = [
    {
        title: "Trabalho em equipe", text: [
            { text: "Experiência em ", bold: false },
            { text: "colaborar com equipes multidisciplinares", bold: true },
            { text: " para alcançar objetivos comuns.", bold: false },
        ]
    },
    {
        title: "Adaptabilidade", text: [
            { text: " Habilidade para ", bold: false },
            { text: "aprender novas tecnologias", bold: true },
            { text: " e se adaptar conforme a necessidade.", bold: false },
        ]
    },
]

const EnglishText1: ISkills[] = [
    {
        title: "Programming Languages", text: [
            { text: "Java", bold: true },
            { text: ", ", bold: false },
            { text: "C#", bold: true },
            { text: ", JavaScript/TypeScript, Python, C, C++.", bold: false },
        ]
    },
    {
        title: "Web and Desktop Development", text: [
            { text: "HTML5/CSS3, ", bold: false },
            { text: "React", bold: true },
            { text: ", ", bold: false },
            { text: "Spring Boot", bold: true },
            { text: ", Hibernate, REST APIs, OutSystems, JavaFX, JDBC (Java Database Connectivity).", bold: false },
        ]
    },
    {
        title: "Databases", text: [
            { text: "SQL Server, MySQL, PostgreSQL, MongoDB.", bold: false },
        ]
    },
    {
        title: "Tools and Technologies", text: [
            { text: "Git", bold: true },
            { text: ", Microsoft Power BI, Microsoft Office (Excel, Word, PowerPoint), Visual Basic for Applications (VBA), Internet of Things (IoT).", bold: false },
        ]
    }
]

const EnglishText2: ISkills[] = [
    {
        title: "Teamwork", text: [
            { text: "Experience in ", bold: false },
            { text: "collaborating with multidisciplinary teams", bold: true },
            { text: " to achieve common goals.", bold: false },
        ]
    },
    {
        title: "Adaptability", text: [
            { text: " Ability to ", bold: false },
            { text: "learn new technologies", bold: true },
            { text: " and adapt as needed.", bold: false },
        ]
    },
]


export const Skills = () => {

    const { language } = useContext(LanguageContext);

    const [text1, setText1] = useState<ISkills[]>([]);
    const [text2, setText2] = useState<ISkills[]>([]);

    useEffect(() => {
        setText1(language === "Portuguese" ? PortugueseText1 : EnglishText1);
        setText2(language === "Portuguese" ? PortugueseText2 : EnglishText2);
    }, [language]);

    return (
        <>
            <Section id="skills">
                <StyledInfo style={{ alignItems: "center", maxWidth: "1000px" }}>
                    <StyledTitle>{language === "Portuguese" ? "Habilidades" : "Skills"}</StyledTitle>
                    <StyledSkill>
                        <StyledSubtitle>Hard Skills:</StyledSubtitle>
                        {
                            text1.map(skill => (
                                <StyledS>
                                    <StyledName>{skill.title}:</StyledName>
                                    <span>
                                        {
                                            skill.text.map(text => (
                                                text.bold ? <StyledBoldText>{text.text}</StyledBoldText> : <StyledText>{text.text}</StyledText>
                                            ))
                                        }
                                    </span>
                                </StyledS>
                            ))
                        }
                    </StyledSkill>
                    <StyledSkill>
                        <StyledSubtitle>Soft Skills:</StyledSubtitle>
                        {
                            text2.map(skill => (
                                <StyledS>
                                    <StyledName>{skill.title}:</StyledName>
                                    <span>
                                        {
                                            skill.text.map(text => (
                                                text.bold ? <StyledBoldText>{text.text}</StyledBoldText> : <StyledText>{text.text}</StyledText>
                                            ))
                                        }
                                    </span>
                                </StyledS>
                            ))
                        }
                    </StyledSkill>
                </StyledInfo>
            </Section>
        </>
    )
}