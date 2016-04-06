DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS recipes CASCADE;
DROP TABLE IF EXISTS exercises CASCADE;
DROP TABLE IF EXISTS exercise_categories CASCADE;

create table users(
  user_id serial primary key,
  username text,
  email text unique,
  password_hash text,
  age integer,
  gender text,
  weight numeric,
  height numeric,
  photo text
);

create table exercises(
  exercise_id serial primary key,
  exercise text,
  duration numeric,
  status boolean not null DEFAULT FALSE
);

create table exercise_categories(
  category_id serial primary key,
  type text,
  met numeric
);

create table recipes(
  recipe_id serial primary key,
  recipe text,
  yummly_id text,
  img_url text,
  calories numeric,
  user_id integer references users on delete cascade,
  exercise_id integer references exercises on delete cascade,
  created timestamp NOT NULL DEFAULT(transaction_timestamp())
);

