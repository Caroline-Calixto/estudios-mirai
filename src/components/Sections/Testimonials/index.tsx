import { Column } from '../../../styles/components/Layout';
import { Paragraph, Subtitle1 } from '../../../styles/components/Text';
import TestimonalCard from '../../TestimonalCard';
import './style.css';

export default function TestimonialsSection() {
    const testimonialContent = [
        {
            comment: `" Design is a bridge that connects everyone and everything "`,
            username: 'Shyam Shahu Shrestha',
            position: 'UX Designer, Company Name'
        },
        {
            comment:`" Design is a bridge that connects everyone and everything "`,
            username: 'Shyam Shahu Shrestha',
            position: 'UX Designer, Company Name'
        },
        {
            comment: `" Design is a bridge that connects everyone and everything "`,
            username: 'Shyam Shahu Shrestha',
            position: 'UX Designer, Company Name'
        }
    ]
    return (
        <section className="testimonials">
            <Column>
                <Subtitle1>Our Testimonial</Subtitle1>
                <Paragraph>We believe scaling startups require a radically different kind of agency.</Paragraph>
                <div className="testimonals-container">
                    {testimonialContent.map((item) => (
                        <TestimonalCard comment={item.comment} userName={item.username} position={item.position} />
                    ))}
                </div>
            </Column>

        </section>
    )
}