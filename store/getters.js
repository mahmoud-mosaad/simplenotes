
export const isAuthenticated = state => {
    return state.auth.loggedIn; // auth object as default will be added in vuex state, when you initialize nuxt auth
}

export const getUserInfo = state => {
    return state.auth.user;
}

export const notes = state => state.notes

export const snackbar = state => state.snackbar

export const loadingStatus = state => state.loadingStatus

export const CardColorTypes = state => state.CardColorTypes

export const SnackbarColorTypes = state => state.SnackbarColorTypes

export const showNoteDialog = state => state.showNoteDialog

export const selectedNote = state => state.selectedNote

export const colorMenuOpen = state => state.colorMenuOpen

export const note = state => state.note
