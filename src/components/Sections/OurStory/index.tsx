import { Paragraph, Subtitle1 } from "../../../styles/components/Text"
import "./style.css"

export const OurStorySection = () => {

    return (
        <section className="story">
                <div className="story-column">
                    <Subtitle1>Peed Of Creative Service For Your Business Growth</Subtitle1>
                    <Paragraph>We recruit doctors with the best honors and graduates at their universities, with a very broad and extraordinary experience they grow into professional doctors</Paragraph>
                    <Paragraph>then received extraordinary supplies, guided for 2 years, they already understand very well about existing diseases and how to handle them properly</Paragraph>
                </div>
                <div className="story-column">
                    <img className="image-story" src="../story-img.png" alt="mulher de oculos sorrindo" />
                </div>
        </section>
    )
}