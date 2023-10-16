import ButtonLarge from "../../ButtonLarge"
import "./style.css"

export const HeaderSection = () => {

    return (
        <section className="header row">
            <div className="column">
                <h1 className="title">The Better Way To <span className="hightlight">Success</span> In Your Business</h1>
                <p className="paragraph"> I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
                <ButtonLarge name="Hire Me" color="#756BEE" />
                {/* TODO: Adicionar redirect para section de saiba mais */}
            </div>
            <div className="column">
                <img className="image-header" src="../header-img.png" alt="mulher segurando um celular" />
            </div>
        </section>
    )
}