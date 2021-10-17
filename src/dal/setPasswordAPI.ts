import axios from "axios";

const instanceHeroku = axios.create({
    baseURL: "https://neko-back.herokuapp.com/2.0/",
})
const instanceLocal = axios.create({
    baseURL: "http://localhost:7542/2.0/",
})
export const forgotPasswordAPI = {
    forgot(data: ForgotPasswordType) {
        return instanceHeroku.post<ForgotPasswordType, ForgotPasswordResponseType>('auth/forgot', {
            email: data.email,
            from: "test-front-admin <ai73a@yandex.by>",
            message: `<div style="background-color: lime; padding: 15px">password recovery link:<a href='${data.message}/$token$'>link</a></div>`,
        })
    },

    setNewPassword(data: NewPasswordRequestType) {
        return instanceLocal.post<NewPasswordRequestType,NewPasswordResponseType>('auth/set-new-password', {
            password: data.password,
            resetPasswordToken:data.resetPasswordToken,
        })
    }
}

//forgot(passwordModel:ForgotPasswordType)
//тип отправляемый на сервер

export type ForgotPasswordType = {
    email: string,
    // from: string,"test-front-admin <ai73a@yandex.by>",  можно указать разработчика фронта)
    message: string,
    //`<div style="background-color: lime; padding: 15px">password recovery link:<a href='http://localhost:3000/#/set-new-password/$token$'>link</a></div>`
    // хтмп-письмо, вместо $token$ бэк вставит токен
}

//тип приходящий с сервера
export type ForgotPasswordResponseType = {
    data:
        {
            info: string,
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
    data: {
        info: string,
        error: string;
    },
}

