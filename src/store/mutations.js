const SET_POSTS = (state, posts) => {
  state.posts = posts;
};

const SET_USERS = (state, users) => {
  state.users = users;
};

const REMOVE_ARTICLE = (state, post) => {
  const array = state.posts;
  const filteredPosts = state.filteredPosts;
  const filteredPostsIdx = filteredPosts.indexOf(post);
  const arrayIdx = array.indexOf(post);
  array.splice(arrayIdx, 1);
  filteredPosts.splice(filteredPostsIdx, 1);
};

const SEARCH_ARTICLES_BY_AUTHOR = (state, searchValue) => {
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
};

const mutations = {
  REMOVE_ARTICLE,
  SEARCH_ARTICLES_BY_AUTHOR,
  SET_USERS,
  SET_POSTS,
};

export default mutations;
