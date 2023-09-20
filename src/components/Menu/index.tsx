
import { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

const items: MenuProps['items'] = [
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
    const [current, setCurrent] = useState('inicio');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return <>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <img src="/logotipo.svg" alt="Logotipo" style={{ maxWidth: '50px' }} />

                <Menu
                    onClick={onClick}
                    selectedKeys={[current]}
                    mode="horizontal"
                    items={items}
                    style={{ display: 'flex', alignItems: 'center' }} />

                <button>clique</button> 
                {/* TODO: ao clicar nas keys, redirecionar para uma pagina  */}
            </div>
    </>

};
