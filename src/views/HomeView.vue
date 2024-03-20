<script setup lang="ts">

</script>

<template>
  <main class="home-view">

    <nav class="navbar-component">
      <RouterLink class="nav-link" active-class="activeLink" to="/signup">signup</RouterLink>
      <RouterLink class="nav-link" active-class="activeLink" to="/sign-in">signin</RouterLink>
    </nav>

    <router-view v-slot="{ Component, route }">
      <transition name="route">
        <div :key="route.name">
          <component :is="Component" />
        </div>
      </transition>
    </router-view>

<!--    <SignupComponent/>-->
  </main>
</template>

<style scoped>

/* when the animation starts */
.route-enter-from {
  transform: translateY(-100px);
}

/* when the animation ends */
.route-enter-to {
  transform: translateY(0);
}

/* after the animation ends */
.route-enter-active {
  transition: all 0.3s ease;
}

</style>
