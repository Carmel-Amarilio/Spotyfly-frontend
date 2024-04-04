<template>
  <section class="search">
    <SearchHeader />
    <h1>search</h1>
  </section>
</template>

<script>
import SearchHeader from "@/cmps/search/SearchHeader.vue";
export default {
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