<template>
  <v-row>
    <v-col
      v-for="(note, idx) in notes"
      :key="idx"
      cols="12"
      sm="6"
      md="4"
      lg="3"
      xl="2"
      class="d-flex flex-column"
    >
      <NoteItem :note="note" />
    </v-col>
  </v-row>
</template>

<script>

    import NoteItem from './Note.vue';
    import { mapGetters, mapActions } from 'vuex'

    export default {
        computed: {
            ...mapGetters(['notes'])
        },
        components: {
            NoteItem,
        },
        mounted(){
            console.log('Notes Component mounted.')
        }
    }

</script>

<style lang="scss">

</style>
