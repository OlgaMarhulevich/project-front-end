type initialSetPasswordStateType = any
let initialSetPasswordState: initialSetPasswordStateType = {}

const setPasswordReducer = (state = initialSetPasswordState, action: ActionSetPasswordReducerType) => {
    switch (action.type) {
        default:
            return state;
    }
}

export type ActionSetPasswordReducerType = any

export default setPasswordReducer;