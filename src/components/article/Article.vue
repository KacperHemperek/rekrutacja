<template>
  <div class="post">
    <div class="info">
      <h2 class="title">{{ post.title }}</h2>
      <h3>{{ user.name }}</h3>
      <p>
        {{ formattedBody }}
      </p>
    </div>
    <button class="more" @click="showingFullText = !showingFullText">
      Read {{ showingFullText ? "Less" : "More" }}
    </button>
    <button class="delete" @click="deleteArticle(post)">Delete</button>
  </div>
</template>

<script>
export default {
  name: "Article",
  props: ["post"],

  data() {
    return {
      showingFullText: false,
    };
  },
  computed: {
    formattedBody() {
      if (this.showingFullText) {
        return this.post.body;
      }
      return `${this.post.body.slice(0, 80).trim()}...`;
    },

    user() {
      const users = this.$store.state.users;

      const userArray = users.filter((user) => {
        return user.id === this.post.userId;
      });

      const [user] = [...userArray];

      return user;
    },
  },

  methods: {
    deleteArticle(post) {
      this.$store.dispatch("deleteArticle", post);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./Article.styles.scss";
</style>
