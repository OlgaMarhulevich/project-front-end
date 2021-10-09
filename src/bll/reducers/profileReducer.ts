type initialProfileStateType = any
let initialProfileState: initialProfileStateType = {}

const profileReducer = (state = initialProfileState, action: ActionProfileReducerType) => {
    switch (action.type) {
        default:
            return state;
    }
}

export type ActionProfileReducerType = any

export default profileReducer;