module.exports = {
  createTodoTable: `
    create table if not exists todo (
        id UUID PRIMARY KEY,
        title varchar(70) NOT NULL,
        is_complete boolean default 'false',
        user_id uuid REFERENCES user_info NOT NULL,
        created_at TIMESTAMPTZ default now(),
        updated_at TIMESTAMPTZ default now()
    );`,

  insertTodo: `
      INSERT INTO todo 
            ( id, title, user_id ) 
        VALUES ($1, $2, $3)
      RETURNING *;
    `,
};
