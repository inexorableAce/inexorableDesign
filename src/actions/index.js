import axios from 'axios';
export const FETCH_POSTS = 'FETCH_POSTS';
const API_BASE_URL = 'https://cdn.contentful.com';
const API_SPACE_ID = 'ahsp2ycgckbo';
const API_TOKEN = 'OkISM2VJTBhF45lWA4VxVXBmuyZb1Alec8FygVvjydk';
export function fetchPosts() {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=blog&order=-fields.date`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}