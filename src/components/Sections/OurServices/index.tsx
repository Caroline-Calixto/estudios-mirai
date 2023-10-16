import Card from "../../Card";
import "./styles.css";

export const OurServicesSection = () => {

    const cardContent = [
        {
            id: 1,
            icon: '../icon-1.png',
            title: 'Easy to purchase',
            description: 'A complete set of tools to enable marketing teams to curate, personalize, contextualize, send, integrate and track campaigns - no coding required.'
        },
        {
            id: 2,
            icon: '../icon-2.png',
            title: 'Strategy',
            description: 'A complete set of tools to enable marketing teams to curate, personalize, contextualize, send, integrate and track campaigns - no coding required.'
        },
        {
            id: 3,
            icon: '../icon-3.png',
            title: 'Agency Web',
            description: 'A complete set of tools to enable marketing teams to curate, personalize, contextualize, send, integrate and track campaigns - no coding required.'
        }

    ];

    return (
        <section className="services row">
            <h3 className="title">I want company feature</h3>
            <p className="paragraph">We believe scaling startups require a radically different kind of agency</p>

            <div className="services card-container">
                {cardContent.map((item) => (
                    <Card key={item.id} imgSrc={item.icon} title={item.title} description={item.description} />
                ))}
            </div>
        </section>
    )
}