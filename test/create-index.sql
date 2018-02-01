DROP INDEX todo_title on todos;
CREATE INDEX todo_title ON todos (title);