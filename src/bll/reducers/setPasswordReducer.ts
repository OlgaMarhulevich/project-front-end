import {Dispatch} from "redux";
import {forgotPasswordAPI} from "../../dal/setPasswordAPI";


//1 типизация
type setPasswordStateType = {
    email: string,
    password: string,
    showModalWindow: boolean,
    status: number,
}
//2 объект
let initialSetPasswordState: setPasswordStateType = {
    email: "kukoyaka",
    password: "",
    showModalWindow: false,
    status: 0,
}
//3 actions
export const saveEmail = (email: string) => ({type: "SAVE_EMAIL", email} as const);
export const savePassword = (password: string) => ({type: "SAVE_PASSWORD", password} as const);
export const savePasswordStatusCode = (status: number) => ({type: "SAVE_PASSWORD_STATUS_CODE", status} as const);

export const showModalWindow = (showModalWindow: boolean) => ({type: "SHOW_MODAL_WINDOW", showModalWindow} as const);

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
        case "SAVE_PASSWORD_STATUS_CODE": {
            return {...state, status: action.status}
        }
        default:
            return state;
    }
}

//5 actionTypes
export type ActionSetPasswordReducerType = ReturnType<typeof saveEmail>
    | ReturnType<typeof showModalWindow>
    | ReturnType<typeof savePasswordStatusCode>
    | ReturnType<typeof savePassword>;

//6 саночки

export const sendInstructionTC = (email: string, ghPagesAddress: string) => {
    return (dispatch: Dispatch) => {
        forgotPasswordAPI.forgot({email, message: ghPagesAddress})
            .then((response) => {
                debugger;
                console.log(response.data.info);

            })
            .catch((response) => {
                debugger;
                console.log(response.data.error)
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
                //подумать о реальной логике!
                dispatch(savePassword(newPassword));
            })
            .catch((response) => {
                debugger;
                console.log(response.data.error)
            })
    }
}

