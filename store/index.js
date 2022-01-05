
import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export const state = () => ({
  debug: true,
  loadingStatus: true,
  note: {
      title: '',
      content: '',
      color: 'none'
  },    
  selectedNote: {
      id: '',
      title: '',
      content: '',
      color: 'none'
  },
  showNoteDialog: false,
  snackbar: {
      open: false,
      text: '',
      color: 'success'
  },
  colorMenuOpen: false,
  notes: {},
  SnackbarColorTypes: {
      Success: 'success',
      Error: 'error',
      Info: 'info'
  },
  CardColorTypes: {
      Default: 'none',
      Red: 'red accent-1',
      Orange: 'orange accent-2',
      Yellow: 'yellow accent-1',
      Green: 'light-green accent-1',
      Blue: 'cyan lighten-4',
      Purple: 'purple lighten-4',
      Pink: 'pink lighten-4'
  },
})

export const strict = false

export const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins: process.env.NODE_ENV !== 'production'
    ? []
    : []
})
