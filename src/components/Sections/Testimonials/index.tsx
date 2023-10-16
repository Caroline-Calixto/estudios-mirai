import TestimonalCard from '../../TestimonalCard';
import './style.css';

export default function TestimonialsSection() {
    const testimonialContent = [
        {
            comment: "Design is a bridge that connects everyone and everything",
            imgSrc: '../icon-1.png',
            username: 'Shyam Shahu Shrestha',
            position: 'UX Designer, Company Name'
        },
        {
            comment: "Design is a bridge that connects everyone and everything",
            imgSrc: '../icon-1.png',
            username: 'Shyam Shahu Shrestha',
            position: 'UX Designer, Company Name'
        },
        {
            comment: "Design is a bridge that connects everyone and everything",
            imgSrc: '../icon-1.png',
            username: 'Shyam Shahu Shrestha',
            position: 'UX Designer, Company Name'
        },
        {
            comment: "Design is a bridge that connects everyone and everything",
            imgSrc: '../icon-1.png',
            username: 'Shyam Shahu Shrestha',
            position: 'UX Designer, Company Name'
        }
    ]
    return (
        <section className="testimonials">
            <h2 className="title">Our Testimonial</h2>
            <p className="paragraph">We believe scaling startups require a radically different kind of agency.</p>

            <div className="testimonals-container">
                {testimonialContent.map((item) => (
                    <TestimonalCard comment={item.comment} imgSrc={item.imgSrc} userName={item.username} position={item.position} />
                ))}
            </div>
        </section>
    )
}