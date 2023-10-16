import './style.css'
export default function BannerCard(props: { imgSrc: string, redirectTo: string, title: string }) {
    return (
        <div className="banner">
            <a href={props.redirectTo}>
                <img className="banner-image" src={props.imgSrc} />
            </a>
            <p className='banner-title'>{props.title}</p>
        </div>


    )
}