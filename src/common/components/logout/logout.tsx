import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store";
import {logoutTC} from "../../../bll/reducers/loginReducer";
import React, {useCallback} from "react";
import {Button} from "../button/Button";
import styles from './logout.module.css'
import {Redirect} from "react-router-dom";


export const Logout = () => {
    const isLoggedIn = useSelector<AppStateType, boolean>(state => state.login.isLoggedIn)
    // const status = useSelector<AppStateType, RequestStatusType>(state => state.login.logoutStatus)
    const dispatch = useDispatch()

    const logOutHandler = useCallback(() => {
        dispatch(logoutTC())
    }, [dispatch])


    if (!isLoggedIn) {
        return <Redirect to={'/'}/>
    }

    return (
        <>
            {/*{status === 'loading' && 'preloader'}*/}
            {isLoggedIn && <Button red value={'logout'} onClick={logOutHandler} className={styles.logout}/>}
        </>
    )
}