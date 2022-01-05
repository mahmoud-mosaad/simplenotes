<template>

  <div class="account-pages my-3 pt-sm-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6 col-xl-5">
          <div class="text-center mb-4">
<!--            <a href="/" class="auth-logo mb-5 d-block">-->
<!--              <img src="/img/logo-dark.png" alt="" height="30" class="logo logo-dark">-->
<!--              <img src="/img/logo-light.png" alt="" height="30" class="logo logo-light">-->
<!--            </a>-->

            <h4><img src="/img/logo-dark.png" alt="" height="30" class="logo logo-dark"> Sign up</h4>
            <p class="text-muted mb-4">Get your SimpleChat account now.</p>

          </div>

          <div class="card">
            <div class="card-body p-4">
              <div class="p-3">
                <form ref="form" @submit.prevent="register">

                  <div class="mb-3">
                    <label class="form-label">Full Name</label>
                    <div class="input-group bg-soft-light mb-3 rounded-3">
                      <span class="input-group-text border-light text-muted" id="basic-addon6">
                          <i class="ri-user-2-line"></i>
                      </span>
                      <input v-model="registerData.fullname" type="text" class="form-control form-control-lg bg-soft-light border-light" placeholder="Enter Username" aria-label="Enter Username" aria-describedby="basic-addon6" control-id="ControlID-2">

                    </div>
                  </div>

                  <div class="mb-3">
                    <label class="form-label">Email</label>
                    <div class="input-group bg-soft-light rounded-3  mb-3">
                      <span class="input-group-text text-muted" id="basic-addon5">
                          <i class="ri-mail-line"></i>
                      </span>
                      <input required v-model="registerData.email" type="email" class="form-control form-control-lg bg-soft-light border-light" placeholder="Enter Email" aria-label="Enter Email" aria-describedby="basic-addon5" control-id="ControlID-1">
                    </div>
                  </div>

                  <div class="mb-4">
                    <label class="form-label">Password</label>
                    <div class="input-group bg-soft-light mb-3 rounded-3">
                      <span class="input-group-text border-light text-muted" id="basic-addon7">
                          <i class="ri-lock-2-line"></i>
                      </span>
                      <input required v-model="registerData.password" type="password" class="form-control form-control-lg bg-soft-light border-light" placeholder="Enter Password" aria-label="Enter Password" aria-describedby="basic-addon7" control-id="ControlID-3">
                    </div>
                  </div>

                  <div class="d-grid">
                    <button class="btn btn-primary waves-effect waves-light" type="submit" control-id="ControlID-4">Sign up</button>
                  </div>

                  <div class="mt-4 text-center">
                    <p class="text-muted mb-0">By registering you agree to the Chatvia <a href="/terms" class="text-primary">Terms of Use</a></p>
                  </div>

                </form>
              </div>
            </div>
          </div>

          <div class="mt-5 text-center">
            <p>Already have an account ? <a href="/login" class="fw-medium text-primary"> Signin </a> </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end account-pages -->


</template>

<script>

  export default {
    layout: 'auth',
    data() {
      return {
        registerData: {
          fullname: "",
          email: "",
          password: ""
        }
      }
    },
    computed: {

    },
    methods: {
      async register() {
        try {
          const user = await this.$axios.$post("/api/auth/register", {
            fullname: this.registerData.fullname,
            email: this.registerData.email,
            password: this.registerData.password
          });
          let response = await this.$auth.loginWith("local", {
            data: {
              email: this.registerData.email,
              password: this.registerData.password
            }
          });
          this.$router.push("/");
          // this.$router.push("/home");
          console.log(user);
        } catch (err) {
          console.log(err);
        }
      }
      // async register () {
      //   try {
      //     await this.$axios.post('/api/auth/register', {
      //       email: this.registerData.email,
      //       password: this.registerData.password
      //     })
      //
      //     const user = await this.$auth.loginWith('local', {
      //       data: {
      //         email: this.registerData.email,
      //         password: this.registerData.password
      //       }
      //     })
      //
      //     if (user) {
      //       await this.$router.push('/admin')
      //     }
      //
      //   } catch (error) {
      //     this.snackbarMessage = error.response.data.message
      //   }
      // }
    }
  }

</script>

<style>

</style>
