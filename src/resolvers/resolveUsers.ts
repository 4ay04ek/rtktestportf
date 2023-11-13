import axios from "axios";

export const resolveUsers = async () => {
  const res = axios
    .get("http://localhost:8000/users", {
      headers: { "Cache-Control": "max-age=60" },
    })
    .then((res) => res.data)
    .catch(() => require("../__mock__/users.json"));
  return await res;
};
