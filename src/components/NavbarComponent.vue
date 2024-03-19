<script setup lang="ts">

</script>

<template>
  <nav class="navbar-component">
    <RouterLink class="nav-link" active-class="activeLink" to="/">Home</RouterLink>
    <RouterLink class="nav-link" active-class="activeLink" to="/about">About</RouterLink>
  </nav>

</template>

<style lang="scss" scoped>

.navbar-component {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.nav-link {
  color: var(--text-color);
  border: 1px solid var(--text-color);
  text-decoration: none;
  padding: 3px;
  border-radius: 5px;

  &:hover {
    color: var(--primary-color-text);
    border: 1px solid var(--primary-color-text);
    text-decoration: underline;
    cursor: pointer;
  }
}

.activeLink {
  color: var(--primary-color-text);
  border: 1px solid var(--primary-color-text);
  text-decoration: underline;
}

</style>
