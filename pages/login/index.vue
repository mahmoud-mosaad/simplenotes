<template>

  <div class="account-pages my-3 pt-sm-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6 col-xl-5">
          <div class="text-center mb-4">

            <h4><img src="/img/logo-dark.png" alt="" height="30" class="logo logo-dark"> Sign in</h4>
            <p class="text-muted mb-4">Sign in to continue to SimpleNotes.</p>

          </div>

          <div class="card">
            <div class="card-body p-4">
              <div class="p-3">
                <form @submit.prevent="login">

                  <div class="mb-3">
                    <label class="form-label">Email</label>
                    <div class="input-group mb-3 bg-soft-light rounded-3">
                      <span class="input-group-text text-muted" id="basic-addon3">
                          <i class="ri-user-2-line"></i>
                      </span>
                      <input ref="email" v-model="loginData.email" type="text" class="form-control form-control-lg border-light bg-soft-light" placeholder="Enter Email" aria-label="Enter Email" aria-describedby="basic-addon3" control-id="ControlID-1">
                    </div>
                  </div>

                  <div class="mb-4">
                    <div class="float-end">
                      <a href="/password-reset" class="text-muted font-size-13">Forgot password?</a>
                    </div>
                    <label class="form-label">Password</label>
                    <div class="input-group mb-3 bg-soft-light rounded-3">
                      <span class="input-group-text text-muted" id="basic-addon4">
                          <i class="ri-lock-2-line"></i>
                      </span>
                      <input v-model="loginData.password" type="password" class="form-control form-control-lg border-light bg-soft-light" placeholder="Enter Password" aria-label="Enter Password" aria-describedby="basic-addon4" control-id="ControlID-2">

                    </div>
                  </div>

                  <div class="form-check mb-4">
                    <input type="checkbox" class="form-check-input" id="remember-check" control-id="ControlID-3">
                    <label class="form-check-label" for="remember-check">Remember me</label>
                  </div>

                  <div class="d-grid">
                    <button class="btn btn-primary waves-effect waves-light" type="submit" control-id="ControlID-4">Sign in</button>
                  </div>

                </form>

              </div>
            </div>
          </div>

          <div class="mt-5 text-center">
            <p>Don't have an account ? <a href="/register" class="fw-medium text-primary"> Signup now </a> </p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

  export default {
    layout: 'auth',
    data() {
      return {
        loginData: {
          email: "admin@admin.com",
          password: "123"
        },
        error: null
      }
    },
    computed: {
      redirect() {
        return (
          this.$route.query.redirect &&
          decodeURIComponent(this.$route.query.redirect)
        )
      }
    },
    methods: {
      async login() {
        try {
          let response = await this.$auth.loginWith("local", {
            data: this.loginData
          });
          this.$router.push("/");
          console.log(response);
        } catch (err) {
          console.log(err);
        }
      }
    }
  }

</script>

<style>

</style>
