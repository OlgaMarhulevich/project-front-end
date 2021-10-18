import React from 'react';
import {NavLink} from "react-router-dom";
import {Button} from "../../common/components/button/Button";
import s from './Header.module.scss'

export const Header = () => {
    return (
        <div className={s.header}>
            <div>
                <NavLink to={'/test'}><Button value={'test-components'} className={s.btn}/></NavLink>
            </div>
            <div>
                <NavLink to={'/profile'}><Button value={'Profile'} className={s.btn}/></NavLink>
            </div>
            <div>
                <NavLink to={'/login'}><Button value={'Log In'} className={s.btn}/></NavLink>
                <NavLink to={'/registration'}><Button value={'Sign Up'} className={s.btn}/></NavLink>
            </div>
        </div>
    )
}
