const axios = require("axios");
const fs = require("fs");

const groups = ["Senior", "Middle", "Junior", "Intern"];

const a = axios
  .get(
    "https://randomuser.me/api/?results=400&nat=us&inc=name,email,login,phone"
  )
  .then((res) => {
    let users = res.data.results;
    let add_group = [];
    for (let user of users) {
      let copy = user;
      copy.group = groups[Math.floor(Math.random() * 3.2)];
      copy.login = user.login.username;
      copy.name = `${user.name.first} ${user.name.last}`;
      copy.phone = `+7 ${user.phone}`;
      add_group.push(user);
    }
    fs.writeFileSync("users.json", JSON.stringify(add_group));
  });
