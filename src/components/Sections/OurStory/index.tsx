import { Paragraph, Subtitle1 } from "../../../styles/components/Text"
import "./style.css"

export const OurStorySection = () => {

    return (
        <section className="story">
            <div className="story-column">
                <Subtitle1>Serviço de Criação de Alta Velocidade para o Crescimento do Seu Negócio</Subtitle1>
                <Paragraph>Recrutamos os profissionais com as melhores honrarias e graduados em suas universidades, com uma experiência muito ampla e extraordinária.</Paragraph>
                <Paragraph>Trabalhamos em conjunto, combinando nossas habilidades e conhecimentos, para criar soluções que realmente se destacam. Estamos comprometidos em oferecer a você o melhor em marketing digital, porque acreditamos que a qualidade do nosso trabalho reflete a qualidade do seu sucesso.</Paragraph>
            </div>
            <div className="story-column">
                <img className="image-story" src="../story-img.png" alt="mulher de oculos sorrindo" />
            </div>
        </section>
    )
}