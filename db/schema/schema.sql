DROP TABLE IF EXISTS users CASCADE;

create table users(
  user_id serial primary key,
  username text,
  email text unique,
  password_hash text,
  age integer,
  gender text,
  weight integer,
  height integer,
  photo text
);
