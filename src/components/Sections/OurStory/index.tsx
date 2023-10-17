import { Row } from "../../../styles/components/Layout"
import { Paragraph, Subtitle1 } from "../../../styles/components/Text"
import "./style.css"

export const OurStorySection = () => {

    return (
        <section className="story">
            <Row>
                <div>
                    <Subtitle1>Peed Of Creative Service For Your Business Growth</Subtitle1>
                    <Paragraph width="600px">We recruit doctors with the best honors and graduates at their universities, with a very broad and extraordinary experience they grow into professional doctors</Paragraph>
                    <Paragraph width="600px">then received extraordinary supplies, guided for 2 years, they already understand very well about existing diseases and how to handle them properly</Paragraph>
                </div>
                <div >
                    <img className="image-story" src="../story-img.png" alt="mulher de oculos sorrindo" />
                </div>
            </Row>
        </section>
    )
}