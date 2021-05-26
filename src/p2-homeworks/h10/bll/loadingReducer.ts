const initState = {
    isLoading: false
};
type LoadingStateType = {
    isLoading: boolean
}
type LoadingActionType = {
    type: "SET_IS_LOADING"
    isLoading: boolean
}

export const loadingReducer = (state: LoadingStateType = initState, action: LoadingActionType): LoadingStateType => { // fix any
    switch (action.type) {
        case "SET_IS_LOADING": {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state;
    }
};

export const loadingAC = (isLoading: boolean): LoadingActionType =>
    ({type: "SET_IS_LOADING", isLoading}); // fix any