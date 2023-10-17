import { Button } from '../../styles/components/Button';

import './style.css';


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
                <Button backgroundColor="#756BEE">Contact</Button>


        </section>
    )
};
