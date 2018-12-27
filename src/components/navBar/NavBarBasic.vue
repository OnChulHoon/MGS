<template>
  <div>
    <!--Navbar-->
    <mdb-navbar class="mb-1 navbar navbar-expand-lg navbar-dark bg-primary" dark color="primary">
      <mdb-container>
      <!-- Navbar brand -->
      <mdb-navbar-brand href="/">
        MGS
      </mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav left>
          <mdb-nav-item href="#" active>Shop</mdb-nav-item>
          <!-- Dropdown -->
          <mdb-dropdown tag="li" class="nav-item">
            <mdb-dropdown-toggle tag="a" navLink color="navbar-dark" slot="toggle">Test View</mdb-dropdown-toggle>
            <mdb-dropdown-menu>
              <mdb-dropdown-item><router-link to="/test/slide-view1">Slide View 1</router-link></mdb-dropdown-item>
              <mdb-dropdown-item><router-link to="/test/slide-view2">Slide View 2</router-link></mdb-dropdown-item>
            </mdb-dropdown-menu>
          </mdb-dropdown>
          <mdb-dropdown tag="li" class="nav-item">
            <mdb-dropdown-toggle tag="a" navLink color="navbar-dark" slot="toggle">Account</mdb-dropdown-toggle>
            <mdb-dropdown-menu>
              <mdb-dropdown-item><router-link to="/account/sign-up">Sign Up</router-link></mdb-dropdown-item>
              <mdb-dropdown-item><router-link to="/account/sign-in">Sign In</router-link></mdb-dropdown-item>
            </mdb-dropdown-menu>
          </mdb-dropdown>
        </mdb-navbar-nav>
        <!-- Search form -->
        <form class="form-inline">
          <input class="form-control mr-auto p-2" type="text" placeholder="Search" aria-label="Search">
        </form>
      </mdb-navbar-toggler>
      </mdb-container>
    </mdb-navbar>

  </div>
</template>

<script>
import {mdbNavbar, mdbNavbarNav, mdbNavbarBrand, mdbNavbarToggler, mdbNavItem, mdbDropdown, mdbDropdownToggle, mdbDropdownItem, mdbDropdownMenu, mdbIcon, mdbContainer} from 'mdbvue'

export default {
  name: 'NavBar',
  components: {
    mdbNavbar,
    mdbNavbarNav,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavItem,
    mdbDropdown,
    mdbDropdownToggle,
    mdbDropdownItem,
    mdbDropdownMenu,
    mdbIcon,
    mdbContainer
  }
}
</script>

<style scoped>

</style>
