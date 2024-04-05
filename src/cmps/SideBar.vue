<template>
  <section class="side-bar">
    <div class="logo flex align-center gap10">
      <i class="fa-brands fa-spotify"> </i>
      <h1>Spotifly</h1>
    </div>

    <article class="nav-btn flex column gap20">
      <RouterLink
        class="nome-btn flex align-center gap20"
        to="/station"
        @click="onGoTo('station')"
      >
        <img v-if="page === 'station'" src="../assets/icons/home1.png" />
        <img v-if="page != 'station'" src="../assets/icons/home2.png" />
        <p :class="{ active: page != 'station' }">Home</p>
      </RouterLink>
      <RouterLink
        class="search-btn flex align-center gap20"
        to="/search"
        @click="onGoTo('search')"
      >
        <img v-if="page === 'search'" src="../assets/icons/search1.png" />
        <img v-if="page != 'search'" src="../assets/icons/search2.png" />
        <p :class="{ active: page != 'search' }">Search</p>
      </RouterLink>
    </article>
  </section>
</template>
  
<script lang="ts">
export default {
  data() {
    return {
      page: "station",
    };
  },
  methods: {
    onGoTo(to: string) {
      this.page = to;
    },
  },
  computed: {},
  mounted() {
    setTimeout(() => {
      const path = this.$route.name;
      this.page = path;
    }, 10);
  },
};
</script>
  
<style lang="scss">
@import "../assets/styles/setup/_variables.scss";

.side-bar {
  padding-inline-start: $mainMargin;
  padding-block-start: $mainMargin;
  background-color: $BGC2;
  border-radius: 5px;
  height: 100%;
  width: 200px;
  .logo {
    margin-block-end: 24px;
    & * {
      font-size: 24px;
    }
  }
  .nav-btn {
    & * {
      cursor: pointer;
    }

    img {
      width: 24px;
    }

    .active {
      color: $txtClr2;
    }
  }
}
</style>