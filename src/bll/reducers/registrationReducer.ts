type initialRegistrationStateType = any
let initialRegistrationState: initialRegistrationStateType = {}

const registrationReducer = (state = initialRegistrationState, action: ActionRegistrationReducerType) => {
    switch (action.type) {
        default:
            return state;
    }
}

export type ActionRegistrationReducerType = any

export default registrationReducer;