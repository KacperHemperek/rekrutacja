<template>
  <div id="app">
    <div class="card m-3">
      <h2 class="card-header">POSTS</h2>
      <div class="card-body">
        <span class="searches">
          <Search searchName="name" />
        </span>
        <div>
          <Article v-for="post in posts" :key="post.id" :post="post" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Article from "./components/article/Article.vue";
import Search from "./components/search-authors/search-authors.vue";

export default {
  data() {
    return {
      pageOfItems: [],
    };
  },
  name: "App",
  components: {
    Article,
    Search,
  },
  computed: {
    posts() {
      const state = this.$store.state;

      return state.searching ? state.filteredPosts : state.posts;
    },
    filtered() {
      const state = this.$store.state;
      return state.filteredPosts;
    },
    // checkData() {
    //   const state = this.$store.state;
    //   return state.searching;
    // },
  },
  created() {
    this.$store.dispatch("fetchUsers");
    this.$store.dispatch("fetchPosts");
  },

  methods: {
    onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto+Serif:wght@300&display=swap");

* {
  font-family: "Roboto Serif", sans-serif;
}

body {
  widows: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 95%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .searches {
    display: flex;
    widows: 100%;
  }
}
</style>
