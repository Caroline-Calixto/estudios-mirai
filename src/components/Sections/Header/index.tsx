
import { Button } from "../../../styles/components/Button"
import { Row } from "../../../styles/components/Layout"
import { Paragraph, Title } from "../../../styles/components/Text"
import "./style.css"
import { useNavigate } from 'react-router-dom';

export default function HeaderSection() {
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/contato');
      };

    return (
        <section className="header">
            <div className="header-container">
                <Row>
                    <div className="header-column">
                        <Title>A jornada para seu <span className="hightlight">successo digital </span>começa aqui.</Title>
                        <Paragraph>Em nossa jornada, auxiliamos os nossos clientes a alcançar o sucesso online, trazendo a magia da criatividade e inovação para cada projeto que empreendemos.</Paragraph>
                        <Button backgroundColor="#756BEE" width="176px" onClick={navigateHome}>Consultoria Gratuita</Button>
                    </div>
                    <div className="header-column">
                        <img className="image-header" src="../header-img.png" alt="mulher segurando um celular" />
                    </div>
                </Row>
            </div>
        </section>
    )
}