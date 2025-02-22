import axios from 'axios';
const API = axios.create({ baseURL: 'http://localhost:5000' });
//calls the users and the posts
//sending the token to the backend middleware to verify if the user is loged in
API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});
//requests
export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) =>  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) =>  API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);