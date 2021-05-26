export type ThemeType = 'dark' | 'red' | 'some' | 'white'
export type ThemesInitStateType = {
    theme: ThemeType
}

const initState: ThemesInitStateType = {
    theme: 'white'
};

export const themeReducer = (state = initState, action: any): ThemesInitStateType => { // fix any
    switch (action.type) {
        case "CHANGE_THEME": {
            return {...state, theme: action.theme};
        }
        default:
            return state;
    }
};
type ChangeThemeACType = {
    type: 'CHANGE_THEME'
    theme: string
}
export const changeThemeAC = (theme: string): ChangeThemeACType => ({
    type: 'CHANGE_THEME',
        theme
}); // fix any