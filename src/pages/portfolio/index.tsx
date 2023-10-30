import BannerCard from "../../components/BannerCard";
import { Paragraph, Title } from "../../styles/components/Text";
import './style.css'

export default function PortfolioPage() {

    const data = [
        { id: 1, imgSrc: './delete.png', redirectTo: 'https://github.com/Caroline-Calixto', title: 'WEBSITE DESIGN' },
        { id: 2, imgSrc: './delete.png', redirectTo: 'https://github.com/Caroline-Calixto', title: 'WEBSITE DESIGN' },
        { id: 3, imgSrc: './delete.png', redirectTo: 'https://github.com/Caroline-Calixto', title: 'WEBSITE DESIGN' },
        { id: 4, imgSrc: './delete.png', redirectTo: 'https://github.com/Caroline-Calixto', title: 'WEBSITE DESIGN' }
    ];

    return (
        <div className="portfolio-page">
            <Title>Portfolio</Title>
            <Paragraph>Explore nossa seleção diversificada de projetos que demonstram nosso compromisso com a excelência e a criatividade. </Paragraph>

            <div className="portfolio-container">
                {data.map((item) => (
                    <BannerCard key={item.id} imgSrc={item.imgSrc} redirectTo={item.redirectTo} title={item.title} />
                ))}
            </div>
        </div>
    )
}