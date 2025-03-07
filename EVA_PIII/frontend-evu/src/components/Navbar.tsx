import React from "react";
import { Menubar } from 'primereact/menubar';
import { useNavigate } from "react-router-dom";

export const Navbar: React.FC = () => {

    const navigare = useNavigate();

    const items = [
        { label: 'Inicio', 
            icon: 'pi pi-fw pi-home', 
            command: () => navigare('/') 
        },
        { label: 'Acerca de',
            icon: 'pi pi-info',
            command: () => navigare('/info')
        },

        { label: 'Dashboard',
            icon: 'pi pi-fw pi-power-off',
            command: () => navigare('/dashboard')
        }
    ];

    return <Menubar model={items} />
}