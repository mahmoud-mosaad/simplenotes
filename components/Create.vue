<template>
  <v-row justify="center">
    <v-col cols="12" md="8" lg="6" xl="4" v-click-outside="onClickOutside">
      <v-card :color="getColorByName(note.color)">
        <div class="pa-2">
          <v-text-field
            v-model="note.title"
            v-show="titleFieldVisible"
            label="الموضوع"
            single-line
            flat
            solo
            background-color="transparent"
            counter
          ></v-text-field>
          <!-- maxlength="30" -->
          <v-textarea
            v-model="note.content"
            @focus="showTitleFieldAndActions"
            :rows="2"
            auto-grow
            flat
            solo
            label="إدخل ملاحظاتك..."
            single-line
            counter
            background-color="transparent"
          ></v-textarea>
          <!-- maxlength="100" -->
        </div>
        <v-card-actions v-show="actionsVisible">
          <ColorPickerMenu @color-selected="colorSelected" :selected="note.color" :color-emit="'outside'" />
          <v-spacer></v-spacer>
          <v-btn text @click="close">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

    import ColorPickerMenu from './ColorPickerMenu.vue';
    import { mapGetters, mapActions } from 'vuex'

    export default {
        data: function(){
            return {
                titleFieldVisible: false,
                actionsVisible: false,
                createdNoteInfo: {}
            }
        },
        computed: {
            getUserInfo() {
                return this.$store.getters.getUserInfo;
            },
            ...mapGetters(['note', 'notes', 'colorMenuOpen', 'CardColorTypes', 'SnackbarColorTypes'])
        },
        methods: {
            async saveNoteToDB(title, content, color, authorId){
                await this.$axios.post('/api/note', { title: title, content: content, color: color, authorId: authorId })
                    .then(response => (
                        this.createdNoteInfo = response.data
                    ))
            },
            showTitleFieldAndActions() {
                this.titleFieldVisible = true
                this.actionsVisible = true
            },
            hideTitleFieldAndActions() {
                this.titleFieldVisible = false
                this.actionsVisible = false
            },
            colorSelected(color) {
                this.changeColor(color)
            },
            onClickOutside() {
                if (!this.colorMenuOpen) {
                    this.close()
                }
            },
            getColorByName(color){
                return this.$store.state.CardColorTypes[color]
            },
            async close() {
                this.hideTitleFieldAndActions();
                if (this.note.title.trim() || this.note.content.trim()) {
                    await this.createNote(this.note)
                    this.showSnackbar({
                        open: true,
                        text: 'تم الحفظ',
                        color: this.SnackbarColorTypes.Success
                    })
                }
            },
            ...mapActions({
                changeColor (dispatch, color) {  
                    dispatch('setNoteColor', {
                        color: color
                    })
                },
                async createNote (dispatch, note) {
                    const {createdNoteInfo, authUser} = this
                    if (note.title.trim() || note.content.trim()) {
                        await this.saveNoteToDB(note.title.trim(), note.content, note.color, this.getUserInfo.id)
                        dispatch('createNote', {
                            id: createdNoteInfo.id,
                            title: note.title.trim(),
                            content: note.content.trim(),
                            color: note.color
                        })
                    }
                },
                showSnackbar (dispatch, snackbar) {
                    dispatch('showSnackbar', snackbar)
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
