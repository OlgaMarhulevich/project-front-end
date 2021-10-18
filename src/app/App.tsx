import React from 'react';
import './App.module.scss';
import {Routes} from "./routes/Routes";
import s from './App.module.scss'
import {NavLink} from "react-router-dom";
import {Button} from "../common/components/button/Button";

export const App = () => {
  return (
    <div className={s.app}>
        <header className={s.header}>
            <NavLink to={'/test'}><Button value={'test'} className={s.btn}/></NavLink>
            <NavLink to={'/login'}><Button value={'login'} className={s.btn}/></NavLink>
            <NavLink to={'/profile'}><Button value={'profile'} className={s.btn}/></NavLink>
            <NavLink to={'/registration'}><Button value={'registration'} className={s.btn}/></NavLink>
            <NavLink to={'/password-recovery'}><Button value={'password-recovery'} className={s.btn}/></NavLink>
            <NavLink to={'/set-password'}><Button value={'set-password'} className={s.btn}/></NavLink>
            <NavLink to={'/404'}><Button value={'404'} className={s.btn}/></NavLink>
        </header>
        <Routes/>
    </div>
  );
}
