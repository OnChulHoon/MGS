<template>
  <div id="form">
    <!-- Card -->
    <mdb-card>
      <mdb-card-body>
        <form>
          <h1 class="h4 text-center py-4">Sign up</h1>
          <div id="formInput" class="grey-text">
            <mdb-input label="Your name" icon="user" group type="text" validate error="wrong" success="right"/>
            <mdb-input label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
            <mdb-input label="Confirm your email" icon="exclamation-triangle" group type="text" validate error="wrong" success="right"/>
            <mdb-input label="Your password" icon="lock" group type="password" validate/>
          </div>
          <div class="text-center py-4 mt-3">
            <mdb-btn color="primary" type="submit">Register</mdb-btn>
          </div>
        </form>
      </mdb-card-body>
    </mdb-card>
    <!-- Card -->
  </div>
</template>

<script>
import {mdbInput, mdbBtn, mdbIcon, mdbCard, mdbCardBody, mdbCardTitle} from 'mdbvue'

export default {
  name: 'SignUp',
  components: {
    mdbInput,
    mdbIcon,
    mdbBtn,
    mdbCard,
    mdbCardBody,
    mdbCardTitle
  }
}
</script>

<style scoped>
  h3 {
    font-weight: normal;
    padding-top: 20px;
    padding-bottom: 30px;
  }
  p {
    color: #969696;
    margin-bottom: 0;
    font-size: 14px;
  }
  #form{
    margin: 0 auto;
    max-width: 400px;
  }
  #formInput{
    text-align: left;
  }
</style>
