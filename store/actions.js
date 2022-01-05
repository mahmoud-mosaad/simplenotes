import * as api from './api'

export const getAllNotes = ({ commit }) => {
  api.getAllNotes(notes => {
    commit('receiveAll', notes)
  })
}

export const recieveNotesData = ({ commit }, payload) => {
    commit('receiveAll', payload)
    setTimeout(() => {
        commit('disableLoadingStatus')
    }, 1000)
}

export const createNote = ({ commit }, payload) => {
  api.createNote(payload, note => {
    commit('receiveNote', note)
    commit('resetNote')
  })
}

export const updateNote = ({ commit }, payload) => {
    commit('updateNote', payload)
}

export const removeNoteAsync = ({ commit }, payload) => {
    commit('removeNote', payload)
}

export const showSnackbar = ({ commit }, payload) => {
    commit('setSnackbar', payload)
}

export const setShowNoteDialog = ({ commit }, payload) => {
    commit('setShowNoteDialog', payload)
}

export const setColorMenuOpen = ({ commit }, payload) => {
    commit('setColorMenuOpen', payload)
}

export const setSelectedNote = ({ commit }, payload) => {
    commit('setSelectedNote', payload)
}

export const setNoteField = ({ commit }, payload) => {
    commit('setNoteField', payload)
}

export const setSelectedNoteColor = ({ commit }, payload) => {
    commit('setSelectedNoteColor', payload)
}

export const setNoteColor = ({ commit }, payload) => {
    commit('setNoteColor', payload.color)
}
