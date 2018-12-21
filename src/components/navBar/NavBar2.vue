<template>
  <div>
    <!--Navbar-->
    <mdb-navbar id="navBar" dark color="primary" position="top" transparent>
      <mdb-navbar-brand href="#">Your Logo</mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav>
          <mdb-nav-item href="#" waves-fixed>Home</mdb-nav-item>
          <mdb-nav-item href="#" waves-fixed>Features</mdb-nav-item>
          <mdb-nav-item href="#" waves-fixed>Pricing</mdb-nav-item>
          <!-- Dropdown -->
          <mdb-dropdown tag="li" class="nav-item">
            <mdb-dropdown-toggle tag="a" navLink color="primary" slot="toggle" waves-fixed transparent>Dropdown</mdb-dropdown-toggle>
            <mdb-dropdown-menu>
              <mdb-dropdown-item>Action</mdb-dropdown-item>
              <mdb-dropdown-item>Another action</mdb-dropdown-item>
              <mdb-dropdown-item>Something else here</mdb-dropdown-item>
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
    <div style="height: 100vh">
      <div v-show="true" class="view intro-2">
        <div class="full-bg-img">
          <mdb-mask overlay="black-strong" class="flex-center">
            <mdb-container>
              <div class="white-text text-center wow fadeInUp">
                <h2>This is test message</h2>
              </div>
            </mdb-container>
          </mdb-mask>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbDropdown, mdbDropdownItem, mdbDropdownMenu, mdbDropdownToggle, mdbInput, mdbBtn, mdbNavbarBrand, mdbMask, mdbContainer } from 'mdbvue';


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
    mdbMask,
    mdbContainer,
  },
  mounted() {

    function getCurrentScrollPercentage() {
      return (window.scrollY + window.innerHeight) / document.body.clientHeight * 100
    }

    document.addEventListener('scroll', () => {
      const currentScrollPercentage = getCurrentScrollPercentage();

      // console.log('window.scrollY: ', window.scrollY);
      // console.log('window.innerHeight: ', window.innerHeight);
      // console.log('document.body.clientHeight: ', document.body.clientHeight);
      // console.log('currentScrollPercentage: ', currentScrollPercentage);

      if (currentScrollPercentage > 193.5) {
        document.querySelector('#navBar').setAttribute('style', 'background-color: #4285F4;');
      } else {
        document.querySelector('#navBar').setAttribute('style', 'background-color: transparent;');
      }
    })
  }
}


</script>

<style scoped>
  .view {
    background: url("https://mdbootstrap.com/img/Photos/Others/img(42).jpg")no-repeat center center;
    background-size: cover;
    height: 100%;
  }
</style>

<style type="text/css">

  .navbar .dropdown-menu a:hover {
    color: inherit !important;
  }

  .intro-2 {
    background: url("https://mdbootstrap.com/img/Photos/Others/img (40).jpg")no-repeat center center;
    background-size: cover;
  }

  .navbar {
    background-color: transparent;
    text-align: left;
  }

  .top-nav-collapse {
    background-color: #4285F4;
  }

  @media only screen and (max-width: 768px) {
    .navbar {
      background-color: #4285F4;
    }
  }
  html,
  body,
  header,
  .view {
    height: 100%;
  }

</style>
