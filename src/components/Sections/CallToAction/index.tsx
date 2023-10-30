import { useNavigate } from 'react-router-dom';
import { Button } from '../../../styles/components/Button';
import { Column } from '../../../styles/components/Layout';
import { Paragraph, Subtitle1 } from '../../../styles/components/Text';
import './style.css';

export default function CallToAction() {

    const navigate = useNavigate();

    const navigateContact = () => {
        navigate('/contato');
    };


    return (
        <section className="call-to-action">
            <div className="cta-container">
                <Column>
                    <Paragraph color='#FFFFFF'>Nós criamos sites personalizados para fazer a sua marca se destacar.</Paragraph>
                    <Subtitle1 color='#FFFFFF'>Deixe-nos criar a diferença digital para o seu negócio.
                        Entre em contato e vamos começar!</Subtitle1>
                    <br></br>
                    <Button backgroundColor='#FFFFFF' color='#000000' onClick={navigateContact}>Contato</Button>
                </Column>
            </div>

        </section>
    )
}