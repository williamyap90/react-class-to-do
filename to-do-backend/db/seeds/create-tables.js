exports.createUsersTable = `
  CREATE TABLE users (
    username VARCHAR(100) PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    avatar_url VARCHAR(200) DEFAULT 'https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png' NOT NULL
  );
`;

exports.createToDosTable = `
  CREATE TABLE toDos (
    toDo_id SERIAL PRIMARY KEY,
    task VARCHAR(500) NOT NULL,
    complete BIT DEFAULT '0' NOT NULL,
    username VARCHAR(100) REFERENCES users(username) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT NOW()
  ); 
`;
