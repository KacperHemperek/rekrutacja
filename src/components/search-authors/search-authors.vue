<template>
  <input
    type="search"
    :id="searchName"
    :placeholder="searchName"
    @keyup="onSearchChange()"
    v-model="input"
    class="search"
  />
</template>

<script>
export default {
  name: "Search",
  props: ["searchName"],
  data() {
    return {
      input: "",
    };
  },

  methods: {
    onSearchChange() {
      this.$store.dispatch("searchArticlesByAuthor", this.input);
    },
  },
};
</script>

<style lang="sass" scoped>
@import "./search-authors.styles.scss"
</style>
