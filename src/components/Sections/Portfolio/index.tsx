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
            <h2 className="title">Our Impressive Portfolio</h2>
            <p className="description">We believe scaling startups require a radically different kind of agency</p>

            <div className="work-container">
                    {cardContent.map((item) => (
                        <BannerCard key={item.id} imgSrc={item.imgSrc} redirectTo={item.redirectTo} title={item.title} />
                    ))}
                </div>

        </section>
    )
}