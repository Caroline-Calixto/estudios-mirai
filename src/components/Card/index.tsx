import { Paragraph, Subtitle2 } from '../../styles/components/Text';
import './style.css'

export default function Card(props: { imgSrc: string, title: string, description?: string}) {

    const cardClass = props.title === 'Strategy' ? 'purple-card' : 'card';

    return (
        <div className={cardClass}>
            <img className="card-img" src={props.imgSrc} alt="" />
            <Subtitle2>{props.title}</Subtitle2>
            <Paragraph>{props.description}</Paragraph>
        </div>
    )
}