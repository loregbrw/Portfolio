import { useContext, useEffect, useState } from "react";
import { Section } from "../../components/section"
import { StyledBoldText, StyledText, StyledTitle } from "../../components/text/style"
import { LanguageContext } from "../../context/language";
import { IText } from "../home";
import { StyledBox, StyledGallery, StyledImg } from "./components/style";
import { StyledInfo } from "../home/components/style";

import Hackathon from "/hackathon.jpeg"
import IoTProject from "/IoTProject.jpeg"
import Thiago from "/thiago.jpeg"

const PortugueseText1: IText[] = [
    { text: "Sou estudante do primeiro ano de Engenharia de Software na UniSenaiPR e estou concluindo um curso técnico em Desenvolvimento de Sistemas pelo Senai. Atualmente, trabalho como jovem ", bold: false },
    { text: "Aprendiz de Soluções Digitais na Bosch", bold: true },
    { text: " Curitiba, onde tenho a oportunidade de aplicar e aprimorar minhas habilidades em programação enquanto aprendo constantemente. Sempre busco me aprofundar em novas linguagens, frameworks e metodologias, pois acredito que a inovação está diretamente ligada ao ", bold: false },
    { text: "aprendizado contínuo", bold: true },
    { text: ". Gosto de enfrentar desafios e estar sempre me desenvolvendo.", bold: false },
]

const PortugueseText2: IText[] = [
    { text: "Além da minha experiência em React, Java, Spring, C#, Python e outras tecnologias, também tenho grande interesse em áreas como IoT e robótica, que acredito serem essenciais para o futuro da tecnologia. ", bold: false },
    { text: "Meu objetivo é continuar evoluindo como profissional", bold: true },
    { text: " e contribuir para o impacto positivo da tecnologia no dia a dia das pessoas, seja por meio de projetos pessoais ou colaborativos.", bold: false },
]

const EnglishText1: IText[] = [
    { text: "I am a first-year Software Engineering student at UniSenaiPR and I am completing a technical course in Systems Development at Senai. Currently, I work as a ", bold: false },
    { text: "Digital Solutions Apprentice at Bosch", bold: true },
    { text: " in Curitiba, where I have the opportunity to apply and improve my programming skills while constantly learning. I always seek to deepen my knowledge in new languages, frameworks, and methodologies, as I believe that innovation is directly linked to ", bold: false },
    { text: "continuous learning", bold: true },
    { text: ". I enjoy facing challenges and constantly developing myself.", bold: false },
];

const EnglishText2: IText[] = [
    { text: "In addition to my experience with React, Java, Spring, C#, Python, and other technologies, I also have a great interest in areas like IoT and robotics, which I believe are essential for the future of technology. ", bold: false },
    { text: "My goal is to continue evolving as a professional", bold: true },
    { text: " and contribute to the positive impact of technology on people's daily lives, whether through personal or collaborative projects.", bold: false },
];


export const About = () => {

    const { language } = useContext(LanguageContext);
    const [title, setTitle] = useState("");
    const [text1, setText1] = useState<IText[]>([]);
    const [text2, setText2] = useState<IText[]>([]);

    useEffect(() => {
        setTitle(language === "Portuguese" ? "Sobre mim" : "About me");
        setText1(language === "Portuguese" ? PortugueseText1 : EnglishText1);
        setText2(language === "Portuguese" ? PortugueseText2 : EnglishText2);
    }, [language]);

    return (
        <>
            <Section>
                <StyledInfo style={{ alignItems: "center", maxWidth: "1000px" }}>
                    <StyledTitle>{title}</StyledTitle>
                    <StyledBox>
                        <div>
                            {
                                text1.map(text => (
                                    text.bold ? <StyledBoldText>{text.text}</StyledBoldText> : <StyledText>{text.text}</StyledText>
                                ))
                            }
                        </div>
                        <div>
                            {
                                text2.map(text => (
                                    text.bold ? <StyledBoldText>{text.text}</StyledBoldText> : <StyledText>{text.text}</StyledText>
                                ))
                            }
                        </div>
                    </StyledBox>
                    <StyledGallery>
                        <StyledImg src={Hackathon} />
                        <StyledImg src={IoTProject} />
                        <StyledImg src={Thiago} />
                    </StyledGallery>
                </StyledInfo>
            </Section >
        </>
    )
}