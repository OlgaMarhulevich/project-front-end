type initialPasswordRecoveryStateType = any
let initialPasswordRecoveryState: initialPasswordRecoveryStateType = {}

const passwordRecoveryReducer = (state = initialPasswordRecoveryState, action: ActionPasswordRecoveryReducerType) => {
    switch (action.type) {
        default:
            return state;
    }
}

export type ActionPasswordRecoveryReducerType = any

export default passwordRecoveryReducer;