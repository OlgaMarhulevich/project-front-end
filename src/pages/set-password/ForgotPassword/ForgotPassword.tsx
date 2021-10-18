import React, {ChangeEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {saveEmail, sendInstructionTC, showModalWindow} from "../../../bll/reducers/setPasswordReducer";
import s from "./ForgotPassword.module.scss";
import {AppStateType} from "../../../bll/store";
import {InputText} from "../../../common/components/inputText/InputText";
import {Button} from "../../../common/components/button/Button";

export const ForgotPassword: React.FC = () => {

    const dispatch = useDispatch();

    const emailState = useSelector<AppStateType, string >(state => state.setPassword.email);

    const [email, setEmail] = useState<string>(emailState);


    const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
    }

    const sendInstruction = () => {
        dispatch(showModalWindow(true));
        dispatch(saveEmail(email));
        //тут можно сделать красивей
        dispatch(sendInstructionTC(email,'http://localhost:3000/project-front-end#/password-recovery'));
    }

    return (
        <div className={s.page}>
            <div className={s.pageTitle}>Forgot your password?</div>
            <div>
                <p>Enter your email address and we will send you further instructions</p>
                <InputText label={"Email"} value={email} onChange={emailHandler} type={"text"} name={"email"}/>
                <div>
                    <Button value={"Send instructions"} onClick={sendInstruction}/>
                </div>
                <p>Did you remember your password?</p>
                {/*TODO нужна корреткная ссылка*/}
                <a href={"http://localhost:3000/project-front-end#/login"}>Try logging in</a>
            </div>
        </div>
    )
}