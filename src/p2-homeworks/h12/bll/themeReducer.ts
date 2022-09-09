export type InitialStateType = {
    theme: string
}


const initState = {
    theme: 'some'

};
type ActionsType = {
    type: 'CHANGE-THEME'
    theme: string
}

export const themeReducer = (state:InitialStateType = initState, action: ActionsType): InitialStateType => { // fix any
    switch (action.type) {
        case 'CHANGE-THEME': {
            return{ ...state, theme: action.theme};
        }
        default: return state;
    }
};

export const changeThemeC = (theme: string): ActionsType => {
    return {
        type: 'CHANGE-THEME',
        theme
    }
}; // fix any