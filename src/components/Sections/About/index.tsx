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
                    <Subtitle1>Let your visitors know about your features.</Subtitle1>
                    <Paragraph>We develop enjoyable consumer experiences, from digital strategy and content to media and analysis. Leading to meaningful results and satisfied clients.</Paragraph>
                    <Button backgroundColor="#756BEE">Our Process</Button>
                </div>
            </Row>
        </section >
    )
}