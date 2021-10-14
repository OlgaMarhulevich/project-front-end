type initialEnterNewPasswordStateType = any
let initialEnterNewPasswordState: initialEnterNewPasswordStateType = {}

const enterNewPasswordReducer = (state = initialEnterNewPasswordState, action: ActionEnterNewPasswordReducerType) => {
    switch (action.type) {
        default:
            return state;
    }
}

export type ActionEnterNewPasswordReducerType = any

export default enterNewPasswordReducer;