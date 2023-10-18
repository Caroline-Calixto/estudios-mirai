import { useState } from 'react';
import { Button } from '../../styles/components/Button';

import './style.css';
import ContactPage from '../../pages/contato';


const items = [
    {
        label: 'Home',
        key: 'inicio',
    },
    {
        label: 'Case Studies',
        key: 'portfolio',
    },
    {
        label: 'Blog',
        key: 'blog',
    },
    {
        label: 'Services',
        key: 'services',
    }
];

export const MenuComponent = () => {
    const [isFormVisible, setFormVisible] = useState(false);

    const openContact = () => {
        setFormVisible(true);
      };
    
    return (
        <section className='menu'>
                <img src="/logotipo.svg" alt="Logotipo" style={{ maxWidth: '50px' }} />

                <ul className='menu-container'>
                    {items.map((item) => (
                        <li key={item?.key} className='menu-item '>
                            <a href={item?.key}>{item?.label}</a>
                        </li>
                    ))}
                </ul>
                <Button backgroundColor="#756BEE" onClick={openContact}>Contact</Button>

        </section>
    )
};
