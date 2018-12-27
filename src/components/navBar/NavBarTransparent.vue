<template>
  <div>
    <!--Navbar-->
    <mdb-navbar id="navBar" dark color="primary" position="top" transparent>
      <mdb-navbar-brand href="/">Your Logo</mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav>
          <mdb-nav-item href="#" waves-fixed>Shop</mdb-nav-item>
          <!-- Dropdown -->
          <mdb-dropdown tag="li" class="nav-item dropdown" aria-expanded="true">
            <mdb-dropdown-toggle tag="a" navLink color="primary" slot="toggle" waves-fixed transparent >Test View</mdb-dropdown-toggle>
            <mdb-dropdown-menu>
              <mdb-dropdown-item><router-link to="/test/slide-view1">Slide View 1</router-link></mdb-dropdown-item>
              <mdb-dropdown-item><router-link to="/test/slide-view2">Slide View 2</router-link></mdb-dropdown-item>
            </mdb-dropdown-menu>
          </mdb-dropdown>
          <mdb-dropdown tag="li" class="nav-item">
            <mdb-dropdown-toggle tag="a" navLink color="primary" slot="toggle" waves-fixed transparent>Account</mdb-dropdown-toggle>
            <mdb-dropdown-menu>
              <mdb-dropdown-item><router-link to="/account/sign-up">Sign Up</router-link></mdb-dropdown-item>
              <mdb-dropdown-item><router-link to="/account/sign-in">Sign In</router-link></mdb-dropdown-item>
            </mdb-dropdown-menu>
          </mdb-dropdown>
        </mdb-navbar-nav>
        <!-- Search form -->
        <form>
          <mdb-input type="text" class="text-white" placeholder="Search" aria-label="Search" label navInput waves waves-fixed/>
        </form>
      </mdb-navbar-toggler>
    </mdb-navbar>
    <!--/.Navbar-->
  </div>
</template>

<script>
import {mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbDropdown, mdbDropdownItem, mdbDropdownMenu, mdbDropdownToggle, mdbInput, mdbBtn, mdbNavbarBrand } from 'mdbvue';


export default {
  name: 'NavBar2',
  components: {
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbDropdown,
    mdbDropdownItem,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbInput,
    mdbBtn,
    mdbNavbarBrand,
  },
  mounted() {

    function getCurrentScrollPercentage() {
      return (window.scrollY + window.innerHeight) / document.body.clientHeight * 100
    }

    document.addEventListener('scroll', () => {
      const currentScrollPercentage = getCurrentScrollPercentage();

      console.log('window.scrollY: ', window.scrollY);
      console.log('window.innerHeight: ', window.innerHeight);
      console.log('document.body.clientHeight: ', document.body.clientHeight);
      console.log('currentScrollPercentage: ', currentScrollPercentage);

      if (currentScrollPercentage > 103.5) {
        document.querySelector('#navBar').setAttribute('style', 'background-color: #4285F4;');
      } else {
        document.querySelector('#navBar').removeAttribute('style');
      }
    })
  }
}


</script>

<style scoped>
  .view {
    /*background: url("https://mdbootstrap.com/img/Photos/Others/img(42).jpg")no-repeat center center;*/
    background-size: cover;
    height: 100%;
  }
</style>

<style type="text/css">

  .navbar .dropdown-menu a:hover {
    color: inherit !important;
  }
  @media only screen and (max-width: 700px) {
    #navBar {
      background-color: #4285F4;
    }
  }

  .intro-2 {
    /*background: url("https://mdbootstrap.com/img/Photos/Others/img (40).jpg")no-repeat center center;*/
    background-size: cover;
  }

  .navbar {
    background-color: transparent;
    text-align: left;
  }

  .top-nav-collapse {
    background-color: #4285F4;
  }


  html,
  body,
  header,
  .view {
    height: 100%;
  }

</style>
