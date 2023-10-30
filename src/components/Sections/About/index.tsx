import { Button } from "../../../styles/components/Button"
import { Row } from "../../../styles/components/Layout"
import { Paragraph, Subtitle1 } from "../../../styles/components/Text"
import "./style.css"

export const AboutSection = () => {
    return (
        <section className="about">
            <Row>
                <div className="about-column">
                    <img className="image-about" src="../about-img.png" alt="mulher segurando um copo" />
                </div>
                <div className="about-column">
                    <Subtitle1>Nosso relacionamento com você</Subtitle1>
                    <Paragraph>Somos uma agência de marketing digital apaixonada por transformar ideias em realidade. Combinando nossa paixão pelo design, desenvolvimento web e ilustração, criamos experiências digitais incríveis para elevar o seu negócio. </Paragraph>
                    <Button backgroundColor="#756BEE">Explore Nossos Projetos</Button> 
                    {/* TODO:adicionar Onclick */}
                </div>
            </Row>
        </section >
    )
}