<template>
  <section class="search-header">
    <article class="search-sec flex align-center gap10">
      <img src="../../assets/icons/search2.png" />
      <input
        type="text"
        v-model="search"
        placeholder="What do tou want to play?"
      />
      <button v-if="search.length > 0" class="delete-btn" @click="onDelete">
        <i class="fa-solid fa-x"></i>
      </button>
    </article>
  </section>
</template>

<script lang="ts">
export default {
  data() {
    return {
      search: "",
    };
  },
  methods: {
    onDelete() {
      this.search = "";
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/styles/setup/_variables.scss";

.search-header {
  padding: 10px;

  .search-sec {
    background-color: $BGC5;
    padding: 5px 15px;
    border-radius: 2em;
    width: 400px;
    border: 2px solid $BGC5;
    cursor: pointer;

    img {
      width: 20px;
    }

    input {
      background-color: $BGC5;
      color: $txtClr1;
      border: none;
      width: 100%;
    }

    .delete-btn {
      font-size: 16px;
      border-color: transparent;
      background-color: transparent;
      color: $txtClr1;
    }

    &:focus-within {
      border-color: $txtClr1;
    }
  }
}
</style>