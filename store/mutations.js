import Vue from 'vue'

export default {
  receiveAll (state, notes) {

    Object.values(notes).filter(note => {
      setNote(state, note)
    })

  },

  receiveNote (state, note) {
    setNote(state, note)
  },

  resetNote(state){
    state.note = {
      title: '',
      content: '',
      color: state.CardColorTypes.Default
    }
  },

  updateNote (state, note) {
    editNote(state, note)
  },

  removeNote (state, id) {
    deleteNote(state, id)
  },

  setSnackbar (state, snackbar) {
    state.snackbar = snackbar
  },

  setShowNoteDialog (state, showNoteDialog) {
    state.showNoteDialog = showNoteDialog
  },

  setColorMenuOpen (state, colorMenuOpen) {
    state.colorMenuOpen = colorMenuOpen
  },

  setSelectedNote (state, selectedNote) {
    state.selectedNote = selectedNote
  },

  setSelectedNoteColor (state, color) {
    state.selectedNote.color = state.CardColorTypes[color]
  },

  setNoteColor (state, color) {
    state.note.color = color
  },

  setNoteField (state, field) {
    state.selectedNote = {
      ...state.selectedNote,
      [field.name]: field.value
    }
  },

  disableLoadingStatus (state) {
    state.loadingStatus = false
  },

}

function setNote (state, note) {
    // state.notes[note.id] = note
    Vue.set(state.notes, note.id, note)
}

function editNote (state, note) {
    // state.notes[note.id] = state.selectedNote
    Vue.set(state.notes, note.id, state.selectedNote)
}

function deleteNote (state, id) {
    Vue.delete(state.notes, id)
}
