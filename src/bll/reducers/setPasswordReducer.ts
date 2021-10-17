//1 типизация
type setPasswordStateType = {
    email: string,
    showModalWindow: boolean,
}
//2 объект
let initialSetPasswordState: setPasswordStateType = {
    email: "",
    showModalWindow: false,
}
//3 actions
export const saveEmail = (email: string) => ({type: "SAVE_EMAIL", email} as const);
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
        default:
            return state;
    }
}

//5 actionTypes
export type ActionSetPasswordReducerType = ReturnType<typeof saveEmail>
    | ReturnType<typeof showModalWindow>;

