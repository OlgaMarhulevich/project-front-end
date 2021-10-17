import {Dispatch} from "redux";
import {registrationAPI} from "../../dal/registrationAPI";

type initialRegistrationStateType = typeof initialRegistrationState
let initialRegistrationState = {
    isRegistered: false,
    error: ''
}

const registrationReducer = (state: initialRegistrationStateType = initialRegistrationState, action: ActionRegistrationReducerType) => {
    switch (action.type) {
        case "REGISTER-SET-SUCCESS":
            return {...state, isRegistered: action.value}
        case "REGISTER-SET-ERROR":
            return {...state, error: action.error}
        default:
            return state;
    }
}

export const setIsRegistered = (value: boolean) => ({type: 'REGISTER-SET-SUCCESS', value} as const)
export const setError = (error: string) => ({type: 'REGISTER-SET-ERROR', error} as const)

//thunk
export const register = (email: string, password: string) => (dispatch: Dispatch) => {
    return registrationAPI.register(email, password)
        .then(res => {
            if (!res.data.error) {
                dispatch(setIsRegistered(true))
                dispatch(setError(''))
                alert('Registration completed successfully')
            } else {
                dispatch(setIsRegistered(false))
                dispatch(setError(res.data.error))
            }
        })
        .catch((error) => {
            debugger
            dispatch(setIsRegistered(false))
            dispatch(setError(error.response.data.error + '\n' + (error.response.data.passwordRegExp || '')))
        })
}

export type ActionRegistrationReducerType = ReturnType<typeof setIsRegistered> | ReturnType<typeof setError>

export default registrationReducer;