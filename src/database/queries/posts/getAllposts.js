const connection = require("../../config/connection");

const getAllpostsQuery = () => {
  return connection.query(
    "SELECT users.username, posts.content, posts.votes_number, posts.id FROM users JOIN posts ON users.id = posts.user_id ORDER BY id DESC"
  );
};

module.exports = getAllpostsQuery;
