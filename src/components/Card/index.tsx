import './style.css'

export default function Card(props: { imgSrc: string, title: string, description?: string}) {

    const cardClass = props.title === 'Strategy' ? 'purple-card' : 'card';

    return (
        <div className={cardClass}>
            <img className="card-img" src={props.imgSrc} alt="" />
            <h2 className="card-title">{props.title}</h2>
            <p className="card-description">{props.description}</p>
        </div>
    )
}