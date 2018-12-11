<template>
  <div>
    <!--Navbar-->
    <mdb-navbar class="indigo" dark>
      <!-- Navbar brand -->
      <mdb-navbar-brand href="/">
        Navbar
      </mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav>
          <mdb-nav-item href="#" active>Home</mdb-nav-item>
          <mdb-nav-item href="#">Features</mdb-nav-item>
          <mdb-nav-item href="#">Pricing</mdb-nav-item>
          <!-- Dropdown -->
          <mdb-dropdown tag="li" class="nav-item">
            <mdb-dropdown-toggle tag="a" navLink color="indigo" slot="toggle" waves-fixed>Account</mdb-dropdown-toggle>
            <mdb-dropdown-menu>
              <mdb-dropdown-item href="/account/sign-up">Sign Up</mdb-dropdown-item>
              <mdb-dropdown-item>Log In</mdb-dropdown-item>
            </mdb-dropdown-menu>
          </mdb-dropdown>
        </mdb-navbar-nav>
        <!-- Search form -->
        <form class="form-inline">
          <input class="form-control mr-auto p-2" type="text" placeholder="Search" aria-label="Search">
        </form>
      </mdb-navbar-toggler>
    </mdb-navbar>
  </div>
</template>

<script>
import {mdbNavbar, mdbNavbarNav, mdbNavbarBrand, mdbNavbarToggler, mdbNavItem, mdbDropdown, mdbDropdownToggle, mdbDropdownItem, mdbDropdownMenu} from 'mdbvue'

export default {
  name: 'Home',
  components: {
    mdbNavbar,
    mdbNavbarNav,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavItem,
    mdbDropdown,
    mdbDropdownToggle,
    mdbDropdownItem,
    mdbDropdownMenu
  }
}
</script>

<style scoped>

</style>
