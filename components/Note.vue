<template>
  <v-card
    :color="getColorByName(note.color)"
    outlined
    hover
    class="flex d-flex flex-column"
    @mouseenter="toggleEditIcon"
    @mouseleave="toggleEditIcon"
    @click="viewNote"
  >
    <v-card-title>
      {{ note.title }}
      <v-spacer></v-spacer>
      <v-btn icon :ripple="false">
        <v-icon v-show="showEditIcon">mdi-pencil-outline</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text v-text="note.content"></v-card-text>
  </v-card>
</template>

<script>

    import { mapGetters, mapActions } from 'vuex'

    export default {
        data: function(){
          return {
              showEditIcon: false
          }
        },
        props: ['note'],
        methods: {
          getColorByName(color){
            return this.$store.state.CardColorTypes[color]
          },
          toggleEditIcon() {
              this.showEditIcon = !this.showEditIcon
          },
          viewNote() {
              this.setSelectedNote(this.note)
              this.setShowNoteDialog(true)
          },
          ...mapActions(['setSelectedNote', 'setShowNoteDialog'])
        },
        mounted(){
            console.log('Notes Component mounted.')
        }
    }

</script>

<style lang="scss">

</style>
