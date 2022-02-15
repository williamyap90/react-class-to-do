exports.insertUsers = `
  INSERT INTO users
    (username, first_name, last_name, avatar_url)
  VALUES
    %L
  RETURNING *;
`;

exports.insertToDos = `
  INSERT INTO toDos
    (task, complete, username, created_at)
  VALUES
    %L
  RETURNING *;
`;
