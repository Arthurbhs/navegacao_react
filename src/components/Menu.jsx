import React from 'react'
import './Menu.css'

import { Link } from 'react-router-dom'


const Menu = props => (
    <aside className= "Menu">
    <nav>
        <ul>
            <li>

                <Link exact to="/">Inicio</Link>
            </li>
            <li>

                <Link to="/param/123">Param #1</Link>
            </li>
            <li>

                <Link to="/param/text">Param #2</Link>
            </li>
            <li>
            <Link to="/About">Sobre</Link>
            </li>
            <li>
            <Link to="/About">Sobre</Link>
            </li>

            <li>
            <Link to="hfg">Não existe</Link>
            </li>
        </ul>
    </nav>
    </aside>
)

export default Menu