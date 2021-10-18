import {Dispatch} from "redux";
import {forgotPasswordAPI} from "../../dal/setPasswordAPI";


//1 типизация
type setPasswordStateType = {
    email: string,
    password: string,
    showModalWindow: boolean,
    status: number,
    errorEmail: string,
    errorPassword: string,
}
//2 объект
let initialSetPasswordState: setPasswordStateType = {
    email: "kukoyaka",
    password: "",
    showModalWindow: false,
    status: 0,
    errorEmail: "",
    errorPassword: "",
}
//3 actions
export const saveEmail = (email: string) => ({type: "SAVE_EMAIL", email} as const);
export const savePassword = (password: string) => ({type: "SAVE_PASSWORD", password} as const);
export const savePasswordStatusCode = (status: number) => ({type: "SAVE_PASSWORD_STATUS_CODE", status} as const);

export const showModalWindow = (showModalWindow: boolean) => ({type: "SHOW_MODAL_WINDOW", showModalWindow} as const);
export const showErrorEmail = (errorEmail: string) => ({type: "SHOW_ERROR_EMAIL", errorEmail} as const);
export const showErrorPassword = (errorPassword: string) => ({type: "SHOW_ERROR_PASSWORD", errorPassword} as const);

//4 reducer
export const setPasswordReducer = (state = initialSetPasswordState, action: ActionSetPasswordReducerType): setPasswordStateType => {
    switch (action.type) {
        case "SAVE_EMAIL": {
            return {...state, email: action.email}
        }
        case "SAVE_PASSWORD": {
            return {...state, password: action.password}
        }
        case "SHOW_MODAL_WINDOW": {
            return {...state, showModalWindow: action.showModalWindow}
        }
        case "SHOW_ERROR_EMAIL": {
            return {...state, errorEmail: action.errorEmail}
        }
        case "SHOW_ERROR_PASSWORD":{
            return {...state,errorPassword:action.errorPassword}
        }
        case "SAVE_PASSWORD_STATUS_CODE": {
            return {...state, status: action.status}
        }
        default:
            return state;
    }
}

//5 actionTypes
export type ActionSetPasswordReducerType =
    | ReturnType<typeof saveEmail>
    | ReturnType<typeof showModalWindow>
    | ReturnType<typeof savePasswordStatusCode>
    | ReturnType<typeof savePassword>
    | ReturnType<typeof showErrorEmail>
    | ReturnType<typeof showErrorPassword>;

//6 саночки

export const sendInstructionTC = (email: string, ghPagesAddress: string) => {
    return (dispatch: Dispatch) => {
        forgotPasswordAPI.forgot({email, message: ghPagesAddress})
            .then((response) => {
                debugger;
                dispatch(showModalWindow(true));
                dispatch(saveEmail(email));
                console.log(response.data.info);

            })
            .catch(({...Error}) => {
                debugger;
                console.log(Error.response.data.error)
                dispatch(showErrorEmail(Error.response.data.error))
            })
    }
}

export const createPasswordTC = (newPassword: string, token: string) => {
    return (dispatch: Dispatch) => {
        forgotPasswordAPI.setNewPassword({password: newPassword, resetPasswordToken: token})
            .then((response) => {
                debugger
                dispatch(savePasswordStatusCode(response.status));
                dispatch(showModalWindow(false));
                dispatch(savePassword(newPassword));
            })
            .catch(({...Error}) => {
            debugger;
            console.log(Error.response.data.error)
            dispatch(showErrorPassword(Error.response.data.error))
        })
    }
}

