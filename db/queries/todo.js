module.exports = {
  createTodoTable: `
    create table if not exists todo (
        id UUID PRIMARY KEY,
        title varchar(70) NOT NULL,
        is_complete boolean default 'false',
        user_id uuid REFERENCES user_info NOT NULL,
        created_at TIMESTAMPTZ default now(),
        updated_at TIMESTAMPTZ default now()
    );
  `,

  insertTodo: `
    INSERT INTO todo 
      ( id, title, user_id ) 
    VALUES ($1, $2, $3)
    RETURNING *;
  `,

  fetchTodoById: 'SELECT * FROM todo WHERE id = $1',

  updateTodoById: `
    UPDATE todo
    SET 
      title = $1,
      updated_at=NOW()
    WHERE id = $2
    RETURNING *;
  `,

  deleteTodoById: 'DELETE FROM todo WHERE id = $1',

  fetchTodos: 'SELECT * FROM todo',

  fetchSingleUserTodos: 'SELECT * FROM todo WHERE user_id = $1',

  updateTodoByIdToCompleted: `
    UPDATE todo
    SET 
      is_complete = $2,
      updated_at=NOW()
    WHERE id = $1
  `,
};
