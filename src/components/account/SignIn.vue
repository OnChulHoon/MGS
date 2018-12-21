<template>
  <div align="center">
        <mdb-col md="3">
          <mdb-card>
            <mdb-card-body class="mx-4">
              <div class="text-center">
                <h3 class="dark-grey-text mb-5"><strong>Sign in</strong></h3>
              </div>
              <mdb-input label="Your email" type="email"/>
              <mdb-input label="Your password" type="password" containerClass="mb-0"/>
              <p class="font-small blue-text d-flex justify-content-end pb-3">Forgot <a href="#" class="blue-text ml-1"> Password?</a></p>
              <div class="text-center mb-3">
                <mdb-btn type="button" gradient="blue" rounded class="btn-block z-depth-1a">Sign in</mdb-btn>
              </div>
              <p class="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"> or Sign in with:</p>
              <div class="row my-3 d-flex justify-content-center">
                <mdb-btn type="button" color="white" rounded class="mr-md-3 z-depth-1a"><mdb-icon icon="facebook" class="blue-text text-center"/></mdb-btn>
                <mdb-btn type="button" color="white" rounded class="mr-md-3 z-depth-1a"><mdb-icon icon="twitter" class="blue-text"/></mdb-btn>
                <mdb-btn type="button" color="white" rounded class="z-depth-1a"><mdb-icon icon="google-plus" class="blue-text"/></mdb-btn>
              </div>
            </mdb-card-body>
            <mdb-modal-footer class="mx-5 pt-3 mb-1">
              <p class="font-small grey-text d-flex justify-content-end">Don't have an account?
                <a href="#" class="blue-text ml-1"> <router-link to="/account/sign-up"> Sign Up</router-link></a></p>
            </mdb-modal-footer>
          </mdb-card>
        </mdb-col>
  </div>
</template>

<script>
import {mdbInput, mdbBtn, mdbCard, mdbCardBody, mdbIcon, mdbModalFooter, mdbCol} from 'mdbvue'

export default {
  name: 'SignIn',
  components : {
    mdbInput,
    mdbBtn,
    mdbCard,
    mdbCardBody,
    mdbIcon,
    mdbModalFooter,
    mdbCol,
  }
}
</script>

<style scoped>
  #signInForm{
    margin: 0 auto;
  }
  #signInBtn{
    background-color: #007bff;
  }
</style>
