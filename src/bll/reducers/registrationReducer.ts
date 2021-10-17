import {Dispatch} from "redux";
import {registrationAPI} from "../../dal/registrationAPI";

type initialRegistrationStateType = typeof initialRegistrationState
let initialRegistrationState = {
    isSuccess: false
}

const registrationReducer = (state: initialRegistrationStateType = initialRegistrationState, action: ActionRegistrationReducerType) => {
    switch (action.type) {
        case "REGISTER-SET-SUCCESS":
            return {...state, isSuccess: action.value}
        default:
            return state;
    }
}

export const setSuccessRegister = (value: boolean) => ({type: 'REGISTER-SET-SUCCESS', value} as const)

//thunk
export const register = (email: string, password: string) => (dispatch: Dispatch) => {
    return registrationAPI.register(email, password)
        .then(res => {
            if (!res.data.error) {
                dispatch(setSuccessRegister(true))
            } else {
                dispatch(setSuccessRegister(false))
            }
        })
        .catch((error) => {
            //show error
        })
}

export type ActionRegistrationReducerType = ReturnType<typeof setSuccessRegister>
export default registrationReducer;