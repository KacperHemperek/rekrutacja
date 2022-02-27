<template>
  <input
    type="search"
    id="searchName"
    placeholder="Search by author's name"
    @keyup="onSearchChange()"
    v-model="input"
    class="search"
    value=""
  />
</template>

<script>
export default {
  name: "Search",
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
