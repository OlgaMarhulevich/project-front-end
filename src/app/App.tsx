import React, {useEffect} from 'react';
import {Routes} from "./routes/Routes";
import s from './App.module.scss'
import {Header} from "./header/Header";
import {authMe} from "../bll/reducers/profileReducer";
import {useDispatch} from "react-redux";

export const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(authMe())
    }, [dispatch])

    return (
        <div className={s.app}>
            <Header/>
            <Routes/>
        </div>
    );
}