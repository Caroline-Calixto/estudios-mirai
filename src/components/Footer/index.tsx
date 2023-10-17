
import { Column } from '../../styles/components/Layout';
import { FaLinkedin, FaInstagram, FaTiktok } from 'react-icons/fa';
import './style.css';

export const FooterComponent = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='footer-container'>
            <Column>
                <div className="logotipo">
                    <span>Estúdio Mirai</span>
                </div>

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
                            <a href="https://www.linkedin.com/" target="_blank">
                                <FaLinkedin />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/" target="_blank">
                                <FaInstagram />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.tiktok.com/" target="_blank">
                                <FaTiktok />
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="copyright">
                    &copy; {currentYear} Estúdio Mirai: Design e desenvolvimento de sites. Todos os direitos reservados.
                </div>
            </Column>
        </footer>
    )
};
