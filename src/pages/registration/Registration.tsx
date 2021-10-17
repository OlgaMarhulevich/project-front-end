import React, {useEffect, useState} from "react";
import s from './Registration.module.scss'
import {InputText} from "../../common/components/inputText/InputText";
import {Button} from "../../common/components/button/Button";
import {NavLink, Redirect} from "react-router-dom";
import {register, setError, setIsRegistered} from "../../bll/reducers/registrationReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";

export const Registration: React.FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')

    const dispatch = useDispatch()

    const isRegistered = useSelector((state: AppStateType) => state.registration.isRegistered)
    const error = useSelector((state: AppStateType) => state.registration.error)

    useEffect(() => {
        error && alert(error)
        dispatch(setError(''))

        return () => {
            dispatch(setError(''))
            dispatch(setIsRegistered(false))
        }
    }, [dispatch, error])

    const submit = () => {
        if (password === confirm) {
            dispatch(register(email, password))
        } else {
            alert('Fields "Password" and "Confirm password" should be equal.')
        }
    }

    if (isRegistered) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={s.page}>
            <div className={s.pageTitle}>Sign up</div>

            <InputText
                onChange={(e) => setEmail(e.currentTarget.value)}
                label={'Email'} error={''}
                className={s.input}/>
            <InputText
                onChange={(e) => setPassword(e.currentTarget.value)}
                label={'Password'}
                type={"password"} error={''}
                className={s.input}/>
            <InputText
                onChange={(e) => setConfirm(e.currentTarget.value)}
                label={'Confirm password'} type={"password"}
                error={''}
                className={s.input}/>

            <div>
                <NavLink to={'/'}><Button red value={'Cancel'} className={s.btn}/></NavLink>
                <Button onClick={submit} value={'Register'} className={s.btn}/>
            </div>
        </div>
    )
}
