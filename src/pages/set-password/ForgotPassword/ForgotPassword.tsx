import React, {ChangeEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {saveEmail, sendInstructionTC, showModalWindow} from "../../../bll/reducers/setPasswordReducer";
import s from "./ForgotPassword.module.scss";
import {AppStateType} from "../../../bll/store";

export const ForgotPassword: React.FC = () => {

    const dispatch = useDispatch();
    const emailState = useSelector<AppStateType, string | undefined>(state => state.setPassword.email);
    const [email, setEmail] = useState<string | undefined>(emailState);
    //можно сюда пробросить из редьюсера email по умолчанию


    const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
    }

    const sendInstruction = () => {
        dispatch(showModalWindow(true));
        //путь должен быть другим!
        email && dispatch(saveEmail(email)) && dispatch(sendInstructionTC(email,'http://localhost:3000/project-front-end#/set-password'));
    }

    return (
        <div className={s.page}>
            <div className={s.pageTitle}>Forgot your password?</div>
            <div>
                <p>Enter your email address and we will send you further instructions</p>
                <input value={email} onChange={emailHandler} name={"Email"} type="text"/>
                <div>
                    <button onClick={sendInstruction}>Send instructions</button>
                </div>
                <p>Did you remember your password?</p>
                <a href="#">Try logging in</a>
            </div>
        </div>
    )
}