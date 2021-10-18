import React from "react";
import s from './Home.module.scss'
import {Button} from "../../common/components/button/Button";
import {NavLink} from "react-router-dom";

export const Home: React.FC = () => {
    return (
        <div className={s.page}>
            <div className={s.pageTitle}>All pages</div>

            <NavLink to={'/test'}><Button value={'test'} className={s.btn}/></NavLink>
            <NavLink to={'/login'}><Button value={'login'} className={s.btn}/></NavLink>
            <NavLink to={'/profile'}><Button value={'profile'} className={s.btn}/></NavLink>
            <NavLink to={'/registration'}><Button value={'registration'} className={s.btn}/></NavLink>
            <NavLink to={'/password-recovery'}><Button value={'password-recovery'} className={s.btn}/></NavLink>
            <NavLink to={'/set-password'}><Button value={'set-password'} className={s.btn}/></NavLink>
            <NavLink to={'/404'}><Button value={'404'} className={s.btn}/></NavLink>
        </div>
    )
}
