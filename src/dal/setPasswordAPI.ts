import axios from "axios";

const instance = axios.create({
    baseURL: "https://neko-back.herokuapp.com/2.0/",
})

export const forgotPasswordAPI = {
    forgot(data: ForgotPasswordType) {
        return instance.post<ForgotPasswordType, ForgotPasswordResponseType>('auth/forgot', {
            email: data.email,
            from: "test-front-admin <ai73a@yandex.by>",
            message: `<div style="background-color: lime; padding: 15px">password recovery link:<a href='${data.message}'>link</a></div>`,
        })
    },
    setNewPassword(data: NewPasswordRequestType) {//{password,resetPasswordToken}
        return instance.post<NewPasswordRequestType, NewPasswordResponseType>('auth/set-new-password', data)
    }
}

//forgot(passwordModel:ForgotPasswordType)
//тип отправляемый на сервер

export type ForgotPasswordType = {
    email: string, //"nya@nya.nya"
    // from: string,"test-front-admin <ai73a@yandex.by>",  можно указать разработчика фронта)
    message: string,
    //`<div style="background-color: lime; padding: 15px">password recovery link:<a href='http://localhost:3000/#/set-new-password/$token$'>link</a></div>`
    // хтмп-письмо, вместо $token$ бэк вставит токен
}

//тип приходящий с сервера
export type ForgotPasswordResponseType = {
    data:
        {
            info: string,//"sent —ฅ/ᐠ.̫ .ᐟ\ฅ—"
            error: string,
        }
}

//setNewPassword
//тип отправляемый на сервер
export type NewPasswordRequestType = {
    password: string,// "some-new-pass"
    resetPasswordToken: string,//"some-token-from-url"
}
//тип приходящий с сервера
export type NewPasswordResponseType = {
    info: string,//"setNewPassword success —ฅ/ᐠ.̫ .ᐟ\ฅ—"
    error: string;
}

