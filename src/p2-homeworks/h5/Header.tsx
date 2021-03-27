import React from 'react'
import {NavLink} from "react-router-dom";


type PropsType = {
    className: string
}

function Header({className}: PropsType) {
    return (
        <div className={className}>
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
    )
}

export default Header
