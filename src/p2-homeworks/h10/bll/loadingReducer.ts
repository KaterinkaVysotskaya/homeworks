export type InitialStateType = {
    isLoading: boolean
}
const initState = {
    isLoading: false
}
type ActionType = {
    type:'CHANGE_IS_LOAGING'
    isLoading: boolean
}

export const loadingReducer = (state: InitialStateType = initState, action: ActionType): InitialStateType => { // fix any
    switch (action.type) {
        case 'CHANGE_IS_LOAGING': {
            return {...state, isLoading: action.isLoading}
        }

    
        default: return state
    }
}

export const loadingAC = (isLoading:boolean): ActionType => {
    return{
        type:'CHANGE_IS_LOAGING',
        isLoading
    } as const
} // fix any