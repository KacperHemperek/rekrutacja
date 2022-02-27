import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    posts: [],
    filteredPosts: [],
    searching: false,
  },
  getters: {},
  mutations: {
    REMOVE_ARTICLE(state, post) {
      const array = state.posts;
      const filteredPosts = state.filteredPosts;
      const filteredPostsIdx = filteredPosts.indexOf(post);
      const arrayIdx = array.indexOf(post);
      array.splice(arrayIdx, 1);
      filteredPosts.splice(filteredPostsIdx, 1);
    },

    SEARCH_ARTICLES_BY_AUTHOR(state, searchValue) {
      if (searchValue) state.searching = true;
      else state.searching = false;
      const authors = state.users;
      const posts = state.posts;
      const filterAuthors = (searchValue) => {
        return authors.filter((author) => {
          const regex = new RegExp(searchValue, "gi");
          return author.name.match(regex);
        });
      };
      const filteredAuthors = filterAuthors(searchValue);

      const filteredPosts = posts.filter(({ userId }) => {
        const ids = filteredAuthors.map((author) => author.id);
        return ids.includes(userId);
      });
      state.filteredPosts = filteredPosts;
    },

    SET_USERS(state, users) {
      state.users = users;
    },

    SET_POSTS(state, posts) {
      state.posts = posts;
    },
  },
  actions: {
    deleteArticle({ commit }, post) {
      commit("REMOVE_ARTICLE", post);
    },

    searchArticlesByAuthor({ commit }, searchValue) {
      commit("SEARCH_ARTICLES_BY_AUTHOR", searchValue);
    },

    fetchUsers({ commit }) {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
          commit("SET_USERS", data);
        });
    },

    fetchPosts({ commit }) {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
          commit("SET_POSTS", data);
        });
    },
  },
});
