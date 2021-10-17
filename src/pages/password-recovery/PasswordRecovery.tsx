import React, {ChangeEvent, useState} from "react";
import s from './PasswordRecovery.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {Redirect, useParams} from "react-router-dom";
import {createPasswordTC} from "../../bll/reducers/setPasswordReducer";
import {AppStateType} from "../../bll/store";

export const PasswordRecovery: React.FC = () => {
    const dispatch = useDispatch();
    const [password, setPassword] = useState<string>("");


    const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
    }
    const {token} = useParams<{ token: string }>();
    const test = useParams();
    console.log('test', test)

    const sendInstruction = () => {
        dispatch(createPasswordTC(password, token));
    }
    const status = useSelector<AppStateType, number>(state => state.setPassword.status)
    if (status === 200) {
        debugger
        return (<Redirect to={"/login"}/>)
    }
    return (
        <div className={s.page}>
            <div className={s.pageTitle}>Forgot your password?</div>
            <div>
                <p>Create new password</p>
                <input value={password} onChange={passwordHandler} name={"Password"} type="text"/>
                <div>
                    <button onClick={sendInstruction}>Send instructions</button>
                </div>
                <p>Create new password and we will send you further instructions to email</p>
            </div>
        </div>
    )
}
