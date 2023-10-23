import './style.css';

export default function TestimonalCard(props: { imgSrc?: string, comment: string, userName: string, position: string }) {
    return (
        <div className="testimonial-card">
            <div className="container">
                <p className="comment">{props.comment}</p>
                <div className="row">
                    {props.imgSrc &&
                        <div className="display-img">
                            <img src={props?.imgSrc} />
                        </div>
                    }
                    <div className="user">
                        <p className="username">{props.userName}</p>
                        <span className="user-position">{props.position}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}