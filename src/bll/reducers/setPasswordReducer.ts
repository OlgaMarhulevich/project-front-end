//1 типизация
import {Dispatch} from "redux";
import {forgotPasswordAPI} from "../../dal/setPasswordAPI";
import {log} from "util";

type setPasswordStateType = {
    email: string,
    password: string,
    showModalWindow: boolean,
}
//2 объект
let initialSetPasswordState: setPasswordStateType = {
    email: "kukoyaka",
    password: "",
    showModalWindow: false,
}
//3 actions
export const saveEmail = (email: string) => ({type: "SAVE_EMAIL", email} as const);
export const createPassword = (password: string) => ({type: "CREATE_PASSWORD", password} as const);

export const showModalWindow = (showModalWindow: boolean) => ({type: "SHOW_MODAL_WINDOW", showModalWindow} as const);

//4 reducer
export const setPasswordReducer = (state = initialSetPasswordState, action: ActionSetPasswordReducerType): setPasswordStateType => {
    switch (action.type) {
        case "SAVE_EMAIL": {
            return {...state, email: action.email}
        }
        case "SHOW_MODAL_WINDOW": {
            return {...state, showModalWindow: action.showModalWindow}
        }
        case "CREATE_PASSWORD": {
            return {...state, password: action.password}
        }
        default:
            return state;
    }
}

//5 actionTypes
export type ActionSetPasswordReducerType = ReturnType<typeof saveEmail>
    | ReturnType<typeof showModalWindow>
    | ReturnType<typeof createPassword>;

//6 саночки

export const sendInstructionTC = (email: string, ghPagesAddress: string) => {
    return (dispatch: Dispatch) => {
        forgotPasswordAPI.forgot({email, message: ghPagesAddress})
            .then((response) => {
                debugger;
                console.log(response.data.info)

            })
            .catch((response) => {
                debugger;
                console.log(response.data.error)
            })
    }
}

export const createPasswordTC = (newPassword: string, token: string) => {
    return (dispatch: Dispatch) => {
        /*   forgotPasswordAPI.setNewPassword(newPassword)
               .then*/
    }
}

