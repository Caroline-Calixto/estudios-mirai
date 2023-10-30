import { Paragraph, Subtitle2, Title } from "../../styles/components/Text";
import './style.css'

export default function BlogPage() {
    return (
        <div className="blog-page">
            <Title>Explore Nosso Blog</Title>
            <Paragraph>Nosso blog é o seu recurso para ficar por dentro das últimas tendências em design, desenvolvimento web e marketing digital. Descubra insights, dicas e inspirações que podem ajudar a impulsionar o seu negócio.</Paragraph>

            <Subtitle2>*Em breve*</Subtitle2>
            {/* TODO: embed medium */}

        </div>
    )
}