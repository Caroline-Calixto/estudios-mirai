import { Button } from '../../../styles/components/Button';
import { Column } from '../../../styles/components/Layout';
import { Paragraph, Subtitle1 } from '../../../styles/components/Text';
import './style.css';

export default function CallToAction() {

    return (
        <section className="call-to-action">
            <div className="cta-container">
                <Column>
                    <Paragraph color='#FFFFFF'>WE CUSTOM BUILD WEBSITES TO MAKE YOUR BRAND STAND OUT FROM THE NOISE</Paragraph>
                    <Subtitle1 color='#FFFFFF'>We start by listening and let that shape our design process, with our clients as partners</Subtitle1>
                    <br></br>
                    <Button backgroundColor='#FFFFFF' color='#000000'>Contact Us</Button>
                </Column>
            </div>

        </section>
    )
}