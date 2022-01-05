
<template>

    <div v-if="loadingStatus" class="center-div">
        <FulfillingBouncingCircleSpinner
            :animation-duration="2500"
            :size="128"
            color="#7269ef"
        />
    </div>
    <v-app v-else>
        <v-app-bar app color="white">
            <div class="d-flex align-center">
                <a href="/" title="الصفحة الرئيسية" class="logo-sm">
                    <img src="~/static/img/logo-dark.png" alt="" height="50px">
                </a>
            </div>
            <v-spacer></v-spacer>
            <v-toolbar-title>
                دفتر الملاحظات
                <v-icon>mdi-note-multiple</v-icon>
                  <span class="nav-item" @click="logout">
                    <nuxt-link class="nav-link active" aria-current="page" to="#">Logout</nuxt-link
                  >
                </span>
            </v-toolbar-title>
        </v-app-bar>
        <v-main>
            <v-container class="mt-3">
                <Create />
                <Notes />
                <NoteModal />
                <v-snackbar v-model="snackbar.open" :color="snackbar.color">{{ snackbar.text }}</v-snackbar>
            </v-container>
        </v-main>
    </v-app>

</template>

<script>

  import { mapGetters, mapActions } from 'vuex'
  import gql from 'graphql-tag' 

  export default {
    layout: 'notes',
    middleware: 'auth',
    data() {
      return {

      }
    },
    methods: {
      async logout() {
        await this.$auth.logout();
      },
      getAuthenticatedUserNotes(){

        const authUserId = this.getUserInfo.id

        this.$apollo.query({
          query: require('~/gql/queries/userNotes.gql').userNotes,
          variables: {
            id: authUserId
          }
        }).then(rs => {
          this.recieveNotes(rs.data.author.notes)
        }).catch(error => {
            console.log(error)
        })
      },
      ...mapActions({
        recieveNotes (dispatch, data) {
          dispatch('recieveNotesData', data)
        }
    }),
    },
    computed: {
      getUserInfo() {
        return this.$store.getters.getUserInfo;
      },
      isAuthenticated() {
        return this.$store.getters.isAuthenticated;
      },
      loadingStatus(){
        return this.$store.state.loadingStatus
      },
      ...mapGetters(['snackbar', 'loadingStatus'])
    },
    mounted(){
        this.getAuthenticatedUserNotes()
    }
  };

</script>

<style>

    .center-div
    {
        position: absolute;
        margin: auto;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100px;
        height: 100px;
        border-radius: 3px;
    }

</style>
