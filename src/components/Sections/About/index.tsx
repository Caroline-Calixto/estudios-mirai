import ButtonMedium from "../../ButtonMedium"
import "./style.css"

export const AboutSection = () => {
    return (
        <section className="about row">
            <div className="column">
                <img className="image-about" src="../about-img.png" alt="mulher segurando um copo" />
            </div>
            <div className="column">
                <h2 className="subtitle">Let your visitors know about your features.</h2>
                <p className="paragraph">We develop enjoyable consumer experiences, from digital strategy and content to media and analysis. Leading to meaningful results and satisfied clients.
                </p>
                <ButtonMedium name="Our Process" color="#756BEE" />
            </div>
        </section>
    )
}