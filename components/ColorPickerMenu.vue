<template>
  <v-menu open-on-hover :close-on-content-click="false" top offset-y v-model="open">
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon>mdi-palette-outline</v-icon>
      </v-btn>
    </template>
    <v-card max-width="160" tile>
      <v-card-text class="pa-2 d-flex flex-wrap">
        <v-tooltip
          color="grey darken-3"
          bottom
          v-for="(value, name) in colors"
          :key="name"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              :color="`${name !== 'Default' ? value : ''}`"
              @click="colorEmit == 'outside' ? $emit('color-selected', name) : colorSelected(name)"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>
                {{
                  name !== 'Default'
                    ? selectedIcon(value, false)
                    : selectedIcon(value, true)
                }}
              </v-icon>
            </v-btn>
          </template>
          <span>{{ name }}</span>
        </v-tooltip>
      </v-card-text>
    </v-card>
  </v-menu>
</template>


<script>

    import { mapGetters, mapActions } from 'vuex'

    export default {
        data: function(){
          return {
            open: false
          }
        },
        computed: {
          colors() {
              return this.CardColorTypes
          },
          ...mapGetters(['CardColorTypes'])
        },
        props: ['selected', 'color-emit'],
        watch: {
          'open': function (val){
            this.setColorMenuOpen(val)
          },
        },
        methods: {
          selectedIcon(color, blank) {
            const defaultIcon = blank
                ? 'mdi-checkbox-blank-circle-outline'
                : 'mdi-checkbox-blank-circle'
            const checkedIcon = blank ? 'mdi-check-circle-outline' : 'mdi-checkbox-marked-circle'
            return this.selected === color ? checkedIcon : defaultIcon
          },
          colorSelected(color) {
            this.setSelectedNoteColor(color)
          },
          ...mapActions({
            setColorMenuOpen (dispatch, val) {
                dispatch('setColorMenuOpen', val)
            },
            setSelectedNoteColor (dispatch, color) {
                dispatch('setSelectedNoteColor', color)
            },
          })
        },
        mounted(){
          console.log('Color Picker Menu Component mounted.')
        }
    }

</script>

<style lang="scss">

</style>
