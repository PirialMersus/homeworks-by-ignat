import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import s from './Header.module.css'


type PropsType = {
    // className: string
}

function Header(props: PropsType) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const finalClassHeader = `${s.header} ${isMenuOpen && s.active}`

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className={finalClassHeader}>
            <div>
                <NavLink to="/pre-jun" activeClassName="selected">
                    Исходная страничка
                </NavLink>
                <NavLink to="/junior" activeClassName="selected">
                    Джуниор
                </NavLink>
                <NavLink to="/junior-plus" activeClassName="selected">
                    Джун +
                </NavLink>
            </div>
            <div onClick={handleMenuClick} className={s.menuButton}>
                <span/>
            </div>

        </div>
    )
}

export default Header
