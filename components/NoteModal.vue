<template>
  <v-dialog v-model="showNoteDialog" persistent max-width="500">
    <v-card :color="selectedNote.color">
      <div class="pa-2">
        <v-text-field
          label="الموضوع"
          single-line
          flat
          solo
          :value="selectedNote.title"
          @input="updateTitle"
          counter
          background-color="transparent"
        ></v-text-field>
        <!-- maxlength="30" -->
        <v-textarea
          auto-grow
          flat
          solo
          label="إدخل ملاحظاتك..."
          single-line
          :value="selectedNote.content"
          @input="updateContent"
          counter
          background-color="transparent"
        ></v-textarea>
        <!-- maxlength="100" -->
      </div>
      <v-card-actions>
        <v-btn icon @click="deleteNote" :loading="deleteLoading">
          <v-icon>mdi-delete-outline</v-icon>
        </v-btn>
        <ColorPickerMenu @color-selected="colorSelected" :selected="selectedNote.color" />
        <v-spacer></v-spacer>
        <v-btn text @click="setShowNoteDialog(false)">Close</v-btn>
        <v-btn text @click="saveNote" :loading="loading">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

    import ColorPickerMenu from './ColorPickerMenu.vue'
    import { mapGetters, mapActions } from 'vuex'

    export default {
        data: function(){
            return {
                loading: false,
                deleteLoading: false
            }
        },
        computed: {
            ...mapGetters(['showNoteDialog', 'selectedNote', 'SnackbarColorTypes', 'CardColorTypes'])
        },
        methods: {
            async updateNoteToDB(id, title, content, color){
                await this.$axios.patch('/api/note/' + id, { title: title, content: content, color: color })
            },
            async deleteNoteToDB(id){
                await this.$axios.delete('/api/note/' + id)
            },
            async saveNote() {
                this.loading = true
                await this.updateNoteToDB(this.selectedNote.id, this.selectedNote.title.trim(), this.selectedNote.content.trim(), this.selectedNote.color)
                await this.updateNote(this.selectedNote)
                this.loading = false
                this.showSnackbar({
                    open: true,
                    text: 'تم التعديل',
                    color: this.SnackbarColorTypes.Success
                })
                this.setShowNoteDialog(false)
            },
            async deleteNote() {
                this.deleteLoading = true
                await this.deleteNoteToDB(this.selectedNote.id)
                await this.removeNoteAsync(this.selectedNote.id)
                this.deleteLoading = false
                this.showSnackbar({
                    open: true,
                    text: 'تم الحذف',
                    color: this.SnackbarColorTypes.Success
                })
                this.setShowNoteDialog(false)
            },
            updateTitle(value) {
                this.setNoteField({
                    name: 'title',
                    value
                })
            },
            updateContent(value) {
                this.setNoteField({
                    name: 'content',
                    value
                })
            },
            colorSelected(dispatch, color) {
                this.setNoteField({
                    name: 'color',
                    value: this.CardColorTypes[color]
                })
            },
            ...mapActions({
                updateNote (dispatch, note) {
                    dispatch('updateNote', {
                        id: note.id,
                        title: note.title,
                        content: note.content,
                        color: note.color
                    })
                },
                removeNoteAsync (dispatch, id) {
                    dispatch('removeNoteAsync', id)
                },
                showSnackbar (dispatch, snackbar) {
                    dispatch('showSnackbar', snackbar)
                },
                setNoteField (dispatch, note) {
                    dispatch('setNoteField', note)
                },
                setShowNoteDialog (dispatch, showNoteDialog) {
                    dispatch('setShowNoteDialog', showNoteDialog)
                },
            })
        },
        components: {
            ColorPickerMenu,
        },
        mounted(){
            console.log('Create Component mounted.')
        }
    }

</script>

<style lang="scss">

</style>
