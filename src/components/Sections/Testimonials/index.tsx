import { Column } from '../../../styles/components/Layout';
import { Paragraph, Subtitle1 } from '../../../styles/components/Text';
import TestimonalCard from '../../TestimonalCard';
import './style.css';

export default function TestimonialsSection() {
    const testimonialContent = [
        {
            comment: `" A equipe deste estúdio de design é realmente incrível! Eles transformaram nossa visão em uma realidade digital. Obrigada por nos ajudar a alcançar nossos objetivos "`,
            username: ' Maria Silva',
            position: 'XPTO Ltda'
        },
        {
            comment: `" Eu estava procurando por um desenvolvedor de sites excepcional e encontrei exatamente isso aqui. Eles entregaram um site impressionante que superou todas as nossas expectativas. Ótimo trabalho! "`,
            username: 'João Rodrigues',
            position: 'Empresa ImaginaWeb'
        },
        {
            comment: `" Estou encantada com as ilustrações que esta equipe criou para o nosso projeto. Eles capturaram perfeitamente a essência da nossa marca. Altamente recomendado! "`,
            username: 'Ana Torres',
            position: 'PixelArts S.A.'
        }
    ]
    return (
        <section className="testimonials">
            <Column>
                <Subtitle1>Nossos depoimentos</Subtitle1>
                <Paragraph>Ouvir nossos clientes é o que nos impulsiona a fazer o nosso melhor todos os dias. </Paragraph>
                <div className="testimonals-container">
                    {testimonialContent.map((item) => (
                        <TestimonalCard comment={item.comment} userName={item.username} position={item.position} />
                    ))}
                </div>
            </Column>

        </section>
    )
}