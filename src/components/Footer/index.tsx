
import { Column } from '../../styles/components/Layout';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import './style.css';

export const FooterComponent = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='footer-container'>
            <Column>
                    <img src="../logotipo-white.svg" alt="Logotipo" style={{ maxWidth: '50px' }} />

                <div className="site-sections">
                    <ul className="site-list">
                        <li><a href="/">Home</a></li>
                        <li><a href="/case-studies">Case Studies</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/services">Services</a></li>
                    </ul>
                </div>

                <div className="social-media">
                    <ul className="social-media-list">
                        <li>
                            <a href="https://www.linkedin.com/in/carolinecalixtoc/" target="_blank">
                                <FaLinkedin />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/carolinecalixto.dev" target="_blank">
                                <FaInstagram />
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="copyright">
                    <div> &copy; {currentYear} Estúdios Mirai</div>
                    <div>Todos os direitos reservados.</div>
                </div>
            </Column>
        </footer>
    )
};
