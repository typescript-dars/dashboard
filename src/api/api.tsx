import axios from "axios";

export const fullApi = {
  getPost: (posts: string) =>
    axios.get("https://jsonplaceholder.typicode.com/" + posts),
};
