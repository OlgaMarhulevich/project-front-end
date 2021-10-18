import {authAPI, LoginParamsType} from "../../dal/LoginAPI";
import {Dispatch} from "redux";

type initialLoginStateType = {
    // происходит ли сейчас взаимодействие с сервером
    logoutStatus: RequestStatusType
    // если ошибка какая-то глобальная произойдёт - мы запишем текст ошибки сюда
    loginError: string | null
    isLoggedIn: boolean
    email: string
    name: string
    avatar: string
}

const initialLoginState: initialLoginStateType = {
    isLoggedIn: false,
    loginError: null,
    logoutStatus: 'idle',
    email: '',
    name: '',
    avatar: '',
}

const loginReducer = (state: initialLoginStateType = initialLoginState, action: ActionLoginReducerType): initialLoginStateType => {
    switch (action.type) {
        case "LOGIN/SET-IS-LOGGED-IN":
            return {
                ...state,
                isLoggedIn: action.value
            }
        case "LOGIN/SET-IN-ERROR":
            return {
                ...state,
                loginError: action.error
            }
        case "LOGIN/SET-LOGOUT-STATUS":
            return {
                ...state,
                logoutStatus: action.status
            }
        case "LOGIN/SET-AVATAR":
            return {
                ...state,
                avatar: action.value
            }
        case "LOGIN/SET-NAME":
            return {
                ...state,
                name: action.value
            }
        case "LOGIN/SET-EMAIL":
            return {
                ...state,
                email: action.value
            }
        default:
            return state;
    }
}

// actions
export const setIsLoggedInAC = (value: boolean) => ({type: "LOGIN/SET-IS-LOGGED-IN", value} as const)
export const signInErrorAC = (error: string) => ({type: "LOGIN/SET-IN-ERROR", error} as const)
export const setLogoutStatusAC = (status: RequestStatusType) => ({type: "LOGIN/SET-LOGOUT-STATUS", status} as const)
export const setNameAC = (value: string) => ({type: "LOGIN/SET-NAME", value} as const)
export const setEmailAC = (value: string) => ({type: "LOGIN/SET-EMAIL", value} as const)
export const setAvatarAC = (value: string) => ({type: "LOGIN/SET-AVATAR", value} as const)

//thunk
export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch<ActionLoginReducerType>) => {
    // dispatch(setAppStatusAC('loading'))
    authAPI.login(data)
        .then(res => {
            alert('Hello ' + res.data.name)
            dispatch(setIsLoggedInAC(true))
            dispatch(setEmailAC(res.data.email))
            dispatch(setAvatarAC(res.data.avatar || ''))
            dispatch(setNameAC(res.data.name))
            // dispatch(setAppStatusAC('succeeded'))
        })
        .catch((err) => {
            const error = err.response
                ? err.response.data.error
                : (err.message + `, more details in the console`);
            dispatch(signInErrorAC(error))
            const errData = JSON.stringify(err.response.data.error)
            alert(errData)
        })
    // .finally(() => {
    //     dispatch(setLoginStatusAC('succeeded'))
    // })
}


export const logoutTC = () => (dispatch: Dispatch<ActionLoginReducerType>) => {

    dispatch(setLogoutStatusAC('loading'))

    authAPI.logout()

        .then(() => {
            dispatch(setIsLoggedInAC(false))
        })

        .catch(() => {
            // const error = err.response
            //     ? err.response.data.error
            //     : (err.message + ', more details in the console');
            // dispatch(signInErrorAC(error))
            // const errData = JSON.stringify(err.response.data.error)
            // alert(errData)
        })
        .finally(() => {
            dispatch(setLogoutStatusAC('succeeded'))
        })
}

//types

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed' //это нужно в апп-рудьюсер вроде переместить

export type ActionLoginReducerType =
    ReturnType<typeof setIsLoggedInAC>
    | ReturnType<typeof signInErrorAC>
    | ReturnType<typeof setLogoutStatusAC>
    | ReturnType<typeof setAvatarAC>
    | ReturnType<typeof setEmailAC>
    | ReturnType<typeof setNameAC>


export default loginReducer;