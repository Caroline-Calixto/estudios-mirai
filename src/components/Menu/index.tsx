import { useEffect, useState } from 'react';
import { Button } from '../../styles/components/Button';

import './style.css';
import { device } from '../../styles/breakpoints';
import { useNavigate } from 'react-router-dom';

const items = [
    {
        label: 'Home',
        key: 'inicio',
    },
    {
        label: 'Portfólio',
        key: 'portfolio',
    },
    {
        label: 'Blog',
        key: 'blog',
    },
    {
        label: 'Serviços',
        key: 'services',
    }
];


export const MenuComponent = () => {

    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            if (window.matchMedia(device.mobile).matches) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        window.addEventListener('resize', checkIsMobile);
        checkIsMobile();

        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    const openMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/contato');
    };


    return (
        <>
            {
                !isMobile ?
                    <section className='menu-desktop'>
                        <img src="/logotipo.svg" alt="Logotipo" style={{ maxWidth: '50px' }} />

                        <ul className='menu-container'>
                            {items.map((item) => (
                                <li key={item?.key} className='menu-item '>
                                    <a href={item?.key}>{item?.label}</a>
                                </li>
                            ))}
                        </ul>
                        <Button backgroundColor="#756BEE" onClick={navigateHome}>Contato</Button>
                    </section>
                    :
                    <section className='menu-mobile'>
                        <div className="menu-mobile-header">
                            <img src="/logotipo.svg" alt="Logotipo" style={{ maxWidth: '50px' }} />
                            <span className='open-menu' onClick={openMenu}>
                                <img src="./mobile-menu.svg" alt="menu hamburger" />
                            </span>
                        </div>

                        {isMenuOpen && (
                            <div className="div mobile-itens">
                                <ul className='menu-container'>
                                    {items.map((item) => (
                                        <li key={item?.key} className='menu-item '>
                                            <a href={item?.key}>{item?.label}</a>
                                        </li>
                                    ))}
                                </ul>
                                <br></br>
                                <Button width="86px" backgroundColor="#756BEE" onClick={navigateHome}>Contato</Button>
                            </div>
                        )}
                    </section>
            }
        </>
    )
};
