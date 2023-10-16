import ButtonMedium from '../ButtonMedium';
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

                <ButtonMedium name="Contact" color="#756BEE" />

        </section>
    )
};
