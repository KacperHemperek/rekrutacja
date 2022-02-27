const deleteArticle = ({ commit }, post) => {
  commit("REMOVE_ARTICLE", post);
};

const searchArticlesByAuthor = ({ commit }, searchValue) => {
  commit("SEARCH_ARTICLES_BY_AUTHOR", searchValue);
};

const fetchUsers = ({ commit }) => {
  try {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        commit("SET_USERS", data);
      });
  } catch (error) {
    console.error(error);
  }
};

const fetchPosts = ({ commit }) => {
  try {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        commit("SET_POSTS", data);
      });
  } catch (error) {
    console.error(error);
  }
};

const actions = {
  deleteArticle,
  searchArticlesByAuthor,
  fetchUsers,
  fetchPosts,
};

export default actions;
