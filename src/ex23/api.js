const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchUser = async (userId) => {
  const response = await fetch(`${BASE_URL}/users/${userId}`);
  const user = await response.json();
  return user;
};

export const fetchPost = async (postId) => {
  const response = await fetch(`${BASE_URL}/posts/${postId}`);
  const post = await response.json();
  return post;
};

// lay tat ca users / posts de hien danh sach
export const fetchUsers = async () => {
  const response = await fetch(`${BASE_URL}/users`);
  return response.json();
};

export const fetchPosts = async () => {
  const response = await fetch(`${BASE_URL}/posts`);
  return response.json();
};
