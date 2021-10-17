import React from "react";
import s from './Registration.module.scss'
import {InputText} from "../../common/components/inputText/InputText";
import {Button} from "../../common/components/button/Button";

export const Registration: React.FC = () => {
    return (
        <div className={s.page}>
            <div className={s.pageTitle}>Sign up</div>

            <InputText label={'Email'} error={''} className={s.input}/>
            <InputText label={'Password'} type={"password"} error={''} className={s.input}/>
            <InputText label={'Confirm password'} type={"password"} error={''} className={s.input}/>
            <div>
                <Button red value={'Cancel'} className={s.btn}/>
                <Button value={'Register'} className={s.btn}/>
            </div>
        </div>
    )
}
