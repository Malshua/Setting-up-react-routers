import axios from "axios";

export const getRandomUsers = axios.create({
  baseURL: "https://randomuser.me/api/",
});

export const fetchUsers = async (results, pages = 1) => {
  const response = await getRandomUsers.get(
    `/?page=${pages}&results=${results}`
  );
  return response.data;
};
