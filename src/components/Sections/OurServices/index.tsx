import { Column } from "../../../styles/components/Layout"
import { Paragraph, Subtitle1 } from "../../../styles/components/Text"
import Card from "../../Card";
import "./styles.css";

export const OurServicesSection = () => {

    const cardContent = [
        {
            id: 1,
            icon: '../icon-1.png',
            title: 'Fácil de comprar',
            description: 'Um conjunto completo de ferramentas para permitir que as equipes de marketing selecionem, personalizem, contextualizem, enviem, integrem e rastreiem campanhas - sem necessidade de codificação.'
        },
        {
            id: 2,
            icon: '../icon-2.png',
            title: 'Estratégia',
            description: 'Um conjunto completo de ferramentas para permitir que as equipes de marketing selecionem, personalizem, contextualizem, enviem, integrem e rastreiem campanhas - sem necessidade de codificação.'
        },
        {
            id: 3,
            icon: '../icon-3.png',
            title: 'Agência Web',
            description: 'Um conjunto completo de ferramentas para permitir que as equipes de marketing selecionem, personalizem, contextualizem, enviem, integrem e rastreiem campanhas - sem necessidade de codificação.'
        }

    ];

    return (
        <section className="services">
            <Column>
            <Subtitle1>Uma agência</Subtitle1>
            <Paragraph>Acreditamos que o crescimento de startups exige um tipo de agência radicalmente diferente</Paragraph>

            <div className="card-container">
                {cardContent.map((item) => (
                    <Card key={item.id} imgSrc={item.icon} title={item.title} description={item.description} />
                ))}
            </div>
            </Column>
        </section>
    )
}