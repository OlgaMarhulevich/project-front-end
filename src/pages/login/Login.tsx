import React, {useState} from "react";
import s from './Login.module.scss'
import {InputText} from "../../common/components/inputText/InputText";
import {Checkbox} from "../../common/components/checkbox/Checkbox";
import {Button} from "../../common/components/button/Button";
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "../../bll/reducers/loginReducer";
import {AppStateType} from "../../bll/store";
import {NavLink, Redirect} from "react-router-dom";


export const Login: React.FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)

    const isLoggedIn = useSelector<AppStateType>(state => state.login.isLoggedIn)
    const dispatch = useDispatch()
    const loginHandler = () => {
        dispatch(loginTC({email, password, rememberMe}))
    }

    if (isLoggedIn) {
        return <Redirect to={'/Profile'}/>
    }

    return (
        <div className={s.page}>
            <div className={s.pageTitle}>Log In</div>

            <InputText label={'Email'} error={''} className={s.input} value={email}
                       onChange={(e) => setEmail(e.currentTarget.value)}/>
            <InputText label={'Password'} type={'password'} error={''} value={password} className={s.input}
                       onChange={(e) => setPassword(e.currentTarget.value)}/>

            <Checkbox checked={rememberMe} onChange={(e) => setRememberMe(e.currentTarget.checked)}>Remember me</Checkbox>

            <div>
                <NavLink to={'/'}><Button red value={'Cancel'} className={s.btn}/></NavLink>
                <Button value={'Log in'} onClick={loginHandler} className={s.btn}/>
            </div>

            <div>
                <NavLink className={s.link} to={'/set-password'}>Forgot your password?</NavLink>
                <NavLink className={s.link} to={'/registration'}>Sign up</NavLink>
            </div>
        </div>
    )
}
