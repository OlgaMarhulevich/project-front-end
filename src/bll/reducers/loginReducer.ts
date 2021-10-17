import {authAPI, LoginParamsType} from "../../dal/LoginAPI";
import {Dispatch} from "redux";

type initialLoginStateType = typeof initialLoginState

type ErrorType = null | string


const initialLoginState = {
    isLoggedIn: false,
    loginError: null as ErrorType,
    logoutStatus: 'idle'
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
        default:
            return state;
    }
}

// actions
export const setIsLoggedInAC = (value: boolean) => ({type: "LOGIN/SET-IS-LOGGED-IN", value} as const)
export const signInErrorAC = (error: string) => ({type: "LOGIN/SET-IN-ERROR", error} as const)
export const setLogoutStatusAC = (status: RequestStatusType) => ({type: "LOGIN/SET-LOGOUT-STATUS", status} as const)
//thunk

export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch<ActionLoginReducerType>) => {
    // dispatch(setAppStatusAC('loading'))
    authAPI.login(data)
        .then(res => {
            alert('Hello')
            dispatch(setIsLoggedInAC(true))
            // dispatch(setAppStatusAC('succeeded'))
        })
        .catch((err) => {
            const error = err.response
                ? err.response.data.error
                : (err.message + `, more details in the console`);
            dispatch(signInErrorAC(error))
            console.log('Error: ', {...err})
            const errData = JSON.stringify(err.response.data.error)
            alert(errData)
        })
    // .finally(() => {
    //     dispatch(setLoginStatusAC('succeeded'))
    // })
}

//types

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed' //это нужно в апп-рудьюсер вроде переместить

export type ActionLoginReducerType =
    ReturnType<typeof setIsLoggedInAC>
    | ReturnType<typeof signInErrorAC>
    | ReturnType<typeof setLogoutStatusAC>


export default loginReducer;