<template>
  <section class="search">
    <SearchHeader />
  </section>
</template>

<script lang="ts">
import SearchHeader from "../cmps/search/SearchHeader.vue";
export default {
  data() {
    return {
      search: "",
    };
  },
  components: {
    SearchHeader,
  },
};
</script>

<style lang="scss">
@import "../assets/styles/setup/_variables";

.search {
  background-color: $BGC2;
}
</style>