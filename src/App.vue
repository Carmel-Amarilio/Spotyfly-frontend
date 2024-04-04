<script setup lang="ts">
import AppHeader from "./cmps/AppHeader.vue";
import UserMsg from "./cmps/UserMsg.vue";
import SideBar from "./cmps/SideBar.vue";
</script>

<template>
  <div>
    <!-- <AppHeader /> -->
    <main class="main-container">
      <SideBar />
      <RouterView />
    </main>
    <UserMsg />
  </div>
</template>

<style lang="scss">
@import url("./assets/styles/setup/_variables.scss");
</style>
