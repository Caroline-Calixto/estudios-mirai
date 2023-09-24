
import ButtonPrimary from '../Button';

const items = [
    {
        label: 'Inicio',
        key: 'inicio',
    },
    {
        label: 'Portfolio',
        key: 'portfolio',
    },
    {
        label: 'Sobre',
        key: 'sobre',
    },
    {
        label: 'Blog',
        key: 'blog',
    }
];

export const MenuComponent = () => {

    const menuContainer = {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '32px 132px 32px 132px'
    }

    const menuStyle = {
        listStyle: 'none',
        display: 'flex',
        padding: '0',
        textDecoration: 'none',
        color: '#333',
        fontWeight: 'bold',
        alignItems: 'center'
    }

    const menuItem = {
        marginRight: '10px',
    }

    return (
        <section>
            <div style={menuContainer}>
                <img src="/logotipo.svg" alt="Logotipo" style={{ maxWidth: '50px' }} />

                <ul style={menuStyle}>
                    {items.map((item) => (
                        <li key={item?.key} style={menuItem}>
                            <a href={item?.key}>{item?.label}</a>
                        </li>
                    ))}
                </ul>

                <ButtonPrimary name="CONTATO" color="#1E47FF" />
            </div>
        </section>
    )
};
