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

            <h4><img src="/img/logo-dark.png" alt="" height="30" class="logo logo-dark"> Reset Password</h4>
            <p class="text-muted mb-4">Reset Password With SimpleChat.</p>

          </div>

          <div class="card">
            <div class="card-body p-4">
              <div class="p-3">
                <div class="alert alert-success text-center mb-4" role="alert">
                  Enter your Email and instructions will be sent to you!
                </div>
                <form @keydown.enter="resetPassword">

                  <div class="mb-4">
                    <label class="form-label">Email</label>
                    <div class="input-group mb-3 bg-soft-light rounded-3">
                      <span class="input-group-text text-muted" id="basic-addon5">
                          <i class="ri-mail-line"></i>
                      </span>
                      <input type="email" class="form-control form-control-lg border-light bg-soft-light" placeholder="Enter Email" aria-label="Enter Email" aria-describedby="basic-addon5" control-id="ControlID-1">
                    </div>
                  </div>

                  <div class="d-grid">
                    <button class="btn btn-primary waves-effect waves-light" type="submit" control-id="ControlID-2">Reset</button>
                  </div>

                </form>
              </div>
            </div>
          </div>

          <div class="mt-5 text-center">
            <p>Remember It ? <a href="/login" class="fw-medium text-primary"> Signin </a> </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end account-pages -->

</template>

<script>

export default {
  layout: 'auth'
}

</script>

<style>

</style>
