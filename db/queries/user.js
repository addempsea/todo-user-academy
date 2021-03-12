module.exports = {
  createUserTable: `
    CREATE TABLE IF NOT EXISTS user_info (
        id uuid PRIMARY KEY,
        email varchar unique not null,
        first_name varchar not null,
        last_name varchar not null,
        password varchar not null,
        gender varchar,
        is_admin boolean default 'false',
        created_at TIMESTAMPTZ default now(),
        updated_at TIMESTAMPTZ default now()
    );
  `,

  insertUser: `
    insert into user_info (
        id,
        first_name,
        last_name,
        email,
        password,
        gender
    ) values ($1, $2, $3, $4, $5, $6)
    RETURNING id, first_name, last_name, email, created_at, is_admin, gender;
  `,

  fetchUserByEmail: 'SELECT * FROM user_info WHERE email = $1',
  fetchUserById: 'SELECT * FROM user_info WHERE id = $1',
};
