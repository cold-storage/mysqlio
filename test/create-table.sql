-- Can we have comments ???
drop table if exists todos;
-- I sure hope so!
create table if not exists todos (
  id int primary key auto_increment,
  title varchar(255) not null,
  completed tinyint(1) not null default 0
);
-- What will this do?
-- Yes you can have comments. Just don't put semicolons ;;;;;
-- in them unless it's AFTER everything else.