import { Button } from "../../../styles/components/Button"
import { Row } from "../../../styles/components/Layout"
import { Paragraph, Title } from "../../../styles/components/Text"
import "./style.css"

export default function HeaderSection() {
    return (
        <section className="header">
            <div className="header-container">
                <Row>
                    <div className="header-column">
                        <Title>The Better Way To <span className="hightlight">Success</span> In Your Business</Title>
                        <Paragraph>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</Paragraph>
                        <Button backgroundColor="#756BEE" width="176px">Hire Me</Button>
                    </div>
                    <div className="header-column">
                        <img className="image-header" src="../header-img.png" alt="mulher segurando um celular" />
                    </div>
                </Row>
            </div>
        </section>
    )
}