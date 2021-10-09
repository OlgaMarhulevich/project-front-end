type initialLoginStateType = any
let initialLoginState: initialLoginStateType = {}

const loginReducer = (state = initialLoginState, action: ActionLoginReducerType) => {
    switch (action.type) {
        default:
            return state;
    }
}

export type ActionLoginReducerType = any

export default loginReducer;