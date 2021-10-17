import React, {ChangeEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {createPasswordTC} from "../../../bll/reducers/setPasswordReducer";
import s from "./CreateNewPassword.module.scss";
import {useParams} from "react-router-dom";

export const CreateNewPassword: React.FC = () => {

    const dispatch = useDispatch();

    const [password, setPassword] = useState<string | undefined>();


    const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
    }
    const { token } = useParams<{token: string}>();
    console.log(token)

    const sendInstruction = () => {
        //если пароль не пустое место, то диспатчим саночку
       // password && dispatch(createPasswordTC(password));
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