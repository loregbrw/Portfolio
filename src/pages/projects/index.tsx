import { useContext, useEffect, useState } from "react"
import { Section } from "../../components/section"
import { StyledBoldText, StyledSubtitle, StyledText, StyledTitle } from "../../components/text/style"
import { StyledInfo } from "../home/components/style"
import { LanguageContext } from "../../context/language"
import { IText } from "../home"
import { StyledButton, StyledDiv, StyledProject } from "./components/style"

interface IProject {
    name: string;
    text: IText[];
    link: string;
}

const PortugueseProjects: IProject[] = [
    {
        name: "Jogo Pacman", text: [
            { text: "Recriação simples do jogo do Pacman na ", bold: false },
            { text: "linguagem C", bold: true },
            { text: ", executado felo terminal.", bold: false },
        ],
        link: "https://github.com/loregbrw/PacmanGame"
    },
    {
        name: "Calculadora em Java", text: [
            { text: "Simples calculadora feita em Java, usando ", bold: false },
            { text: "Swing", bold: true },
            { text: ".", bold: false },
        ],
        link: "https://github.com/loregbrw/JavaCalculator"
    },
    {
        name: "Máquina de vendas", text: [
            { text: "Projeto de IoT", bold: true },
            { text: " de uma máquina de vendas, utilizando ", bold: false },
            { text: "C++", bold: true },
            { text: " e ", bold: false },
            { text: "arduino.", bold: true },
            { text: ".", bold: false },
        ],
        link: "https://github.com/loregbrw/VendingMachine"
    },
    {
        name: "Calculadora em React", text: [
            { text: "Projeto frontend simples de uma ", bold: false },
            { text: "calculadora em React", bold: true },
            { text: ".", bold: false },
        ],
        link: "https://github.com/loregbrw/ReactCalculator"
    },
    {
        name: "Portfólio", text: [
            { text: "Esse portfólio é uma aplicação frontend feita com ", bold: false },
            { text: "React", bold: true },
            { text: ".", bold: false },
        ],
        link: "https://github.com/loregbrw/Portfolio"
    }
]

const EnglishProjects: IProject[] = [
    {
        name: "Pacman Game", text: [
            { text: "Simple recreation of the Pacman game in ", bold: false },
            { text: "C language", bold: true },
            { text: ", executed through the terminal.", bold: false },
        ],
        link: "https://github.com/loregbrw/PacmanGame"
    },
    {
        name: "Java Calculator", text: [
            { text: "Simple calculator made in Java, using ", bold: false },
            { text: "Swing", bold: true },
            { text: ".", bold: false },
        ],
        link: "https://github.com/loregbrw/JavaCalculator"
    },
    {
        name: "Vending Machine", text: [
            { text: "IoT Project", bold: true },
            { text: " of a vending machine, using ", bold: false },
            { text: "C++", bold: true },
            { text: " and ", bold: false },
            { text: "Arduino.", bold: true },
            { text: ".", bold: false },
        ],
        link: "https://github.com/loregbrw/VendingMachine"
    },
    {
        name: "React Calculator", text: [
            { text: "Simple frontend project of a ", bold: false },
            { text: "React calculator", bold: true },
            { text: ".", bold: false },
        ],
        link: "https://github.com/loregbrw/ReactCalculator"
    },
    {
        name: "Portfolio", text: [
            { text: "This portfolio is a frontend application made with ", bold: false },
            { text: "React", bold: true },
            { text: ".", bold: false },
        ],
        link: "https://github.com/loregbrw/Portfolio"
    }
]


export const Projects = () => {

    const { language } = useContext(LanguageContext);
    const [projects, setProjects] = useState<IProject[]>([]);

    useEffect(() => {
        setProjects(language === "Portuguese" ? PortugueseProjects : EnglishProjects);
    }, [language])

    return (
        <>
            <Section id="projects">
                <StyledInfo style={{ alignItems: "center", maxWidth: "100%" }}>
                    <StyledTitle>{language === "Portuguese" ? "Projetos" : "Projects"}</StyledTitle>
                    <StyledDiv>
                        {
                            projects.map(project => (
                                <StyledProject>
                                    <StyledSubtitle>{project.name}</StyledSubtitle>
                                    <div>
                                        {
                                            project.text.map(text => (
                                                text.bold ? <StyledBoldText>{text.text}</StyledBoldText> : <StyledText>{text.text}</StyledText>
                                            ))
                                        }
                                    </div>
                                    <StyledButton onClick={() => window.open(project.link, '_blank')} >{language === "Portuguese" ? "Ver repositório +" : "View repository +"}</StyledButton>
                                </StyledProject>
                            ))
                        }
                    </StyledDiv>
                </StyledInfo>
            </Section>
        </>
    )
}