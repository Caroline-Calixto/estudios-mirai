import { Column, Row } from '../../../styles/components/Layout'
import { Paragraph, Subtitle1 } from '../../../styles/components/Text'
import BannerCard from '../../BannerCard'
import './style.css'

export default function PortfolioSection() {

    const cardContent = [
        {
            id: 1,
            imgSrc: '../delete.png', // TODO: Substituir
            redirectTo: '#',
            title: 'Website Design'
        },
        {
            id: 2,
            imgSrc: '../delete.png', // TODO: Substituir
            redirectTo: '#',
            title: 'Dashboard Design'
        },
        {
            id: 3,
            imgSrc: '../delete.png', // TODO: Substituir
            redirectTo: '#',
            title: 'Gallery Item'
        },
        {
            id: 4,
            imgSrc: '../delete.png', // TODO: Substituir
            redirectTo: '#',
            title: 'Mock Up Design'
        }
    ]
    return (
        // TODO: definir comportamento para ação de click
        <section className="portfolio">
            <Column>
                <Subtitle1>Our Impressive Portfolio</Subtitle1>
                <Paragraph>We believe scaling startups require a radically different kind of agency</Paragraph>

                <div className="work-container">
                    {cardContent.map((item) => (
                        <BannerCard key={item.id} imgSrc={item.imgSrc} redirectTo={item.redirectTo} title={item.title} />
                    ))}
                </div>
            </Column>
        </section>
    )
}