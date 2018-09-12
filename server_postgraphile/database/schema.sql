begin;

SET CLIENT_ENCODING TO 'utf8';

create schema kanban;

drop role if exists kanban_anonymous;
create role kanban_anonymous;

grant usage on schema kanban 
to kanban_anonymous;

create table kanban.user (
  id          serial primary key,
  username    text,
  name        text,
  email       text unique,
  created_at  timestamptz default now()
);

grant all on table kanban.user 
to kanban_anonymous;

comment on table kanban.user is 'Represents users.';
comment on column kanban.user.id is 'Primary Key for a user';
comment on column kanban.user.username is 'Username of the user.';
comment on column kanban.user.name is 'Name of the user.';
comment on column kanban.user.email is 'Users email address';
comment on column kanban.user.created_at is 'Date user created';

create table kanban.board (
  id          serial primary key,
  name        text,
  user_id     integer not null references kanban.user(id),
  created_at  timestamptz default now()
);

grant all on table kanban.board 
to kanban_anonymous;

create index board_user_id_idx on kanban.board(user_id);

comment on table kanban.board is 'Represents a list of kanban lists';
comment on column kanban.board.id is 'Primary Key for a kanban board';
comment on column kanban.board.name is 'Name of the kanban board';
comment on column kanban.board.user_id is 'User who created this board';
comment on column kanban.board.created_at is 'Date when board was created';

create table kanban.list(
  id          serial primary key,
  name        text,
  sequence    integer,
  board_id    integer not null references kanban.board(id),
  user_id     integer not null references kanban.user(id),
  created_at  timestamptz default now()
);

grant all on table kanban.list 
to kanban_anonymous;

create index list_board_id_idx on kanban.list(board_id);
create index list_sequence_idx on kanban.list(sequence);
create index list_user_id_idx on kanban.list(user_id);

comment on table kanban.list is 'Represents a list of kanban items.  ie the column of a kanban board';
comment on column kanban.list.id is 'Primary Key for a kanban list';
comment on column kanban.list.name is 'Name of the kanban list.  ie Todo, Doing, Done etc';
comment on column kanban.list.sequence is 'Used to sort the lists';
comment on column kanban.list.board_id is 'Board id this list belongs to';
comment on column kanban.list.user_id is 'User who created this board';
comment on column kanban.list.created_at is 'Date when list was created';


create table kanban.item(
  id          serial primary key,
  name        text,
  sequence    int,
  list_id     integer not null references kanban.list(id),
  user_id     integer not null references kanban.user(id),
  created_at  timestamptz default now()
);

grant all on table kanban.item 
to kanban_anonymous;

create index item_list_id_idx on kanban.item(list_id);
create index item_sequence_idx on kanban.item(sequence);
create index item_user_id_idx on kanban.item(user_id);

comment on table kanban.item is 'Represents an individual kanban item/task';
comment on column kanban.item.id is 'Primary Key for a kanban item';
comment on column kanban.item.name is 'Name of the kanban item.';
comment on column kanban.item.sequence is 'Used to sort the items';
comment on column kanban.item.list_id is 'Kanban list id this item belongs to';
comment on column kanban.item.user_id is 'User who created this item';
comment on column kanban.item.created_at is 'Date when item was created';

create table kanban.comment(
  id          serial primary key,
  body        text,
  sequence    int,
  item_id     integer not null references kanban.item(id),
  user_id     integer not null references kanban.user(id),
  created_at  timestamptz default now()
);

grant all on table kanban.comment 
to kanban_anonymous;

create index comment_item_id_idx on kanban.comment(item_id);
create index comment_sequence_id_idx on kanban.comment(sequence);
create index comment_user_id_idx on kanban.comment(user_id);

comment on table kanban.comment is 'Represents an individual kanban item/task comment';
comment on column kanban.comment.id is 'Primary Key for a kanban comment';
comment on column kanban.comment.body is 'Contents of the comment';
comment on column kanban.comment.sequence is 'Used to sort the comments';
comment on column kanban.comment.item_id is 'Kanban item id this comment belongs to';
comment on column kanban.comment.user_id is 'User who created this comment';
comment on column kanban.comment.created_at is 'Date when comment was created';

insert into kanban.user(id, username, name, email) values
  (1, 'scurry', 'Stephen Curry', 'stephen@email.com'),
  (2, 'kd', 'Kevin Durant', 'kevin@email.com'),
  (3, 'klay', 'Klay Thomphson', 'klay@email.com'),
  (4, 'dray', 'Draymond Gree', 'draymond@email.com');

alter sequence kanban.user_id_seq restart with 5;

insert into kanban.board(id, name, user_id) values
  (1, 'Dev', 1),
  (2, 'Marketing', 2),
  (3, 'HR', 3);

alter sequence kanban.board_id_seq restart with 4;

insert into kanban.list(id, name, sequence, board_id, user_id) values
  (1, 'Todo', 1, 1, 1),
  (2, 'Doing', 2, 1, 1),
  (3, 'Done', 3, 1, 1);

alter sequence kanban.list_id_seq restart with 4;

insert into kanban.item(id, name, sequence, list_id, user_id) values
  (1, 'Register with email', 1, 3, 1),
  (2, 'Login with email & password', 1, 2, 2),
  (3, 'Login with Twitter', 1, 1, 3),
  (4, 'Password Recovery email', 2, 1, 4),
  (5, 'Password Reset', 3, 1, 1),
  (6, '2 Factor Auth with SMS', 4, 1, 3),
  (7, 'Passwordless Login', 5, 1, 4),
  (8, 'Password Reset Throttling', 6, 1, 1),
  (9, 'Login with Facebook', 7, 1, 1),
  (10, 'Login with Google', 8, 1, 1);

alter sequence kanban.item_id_seq restart with 8;

insert into kanban.comment(id, body, sequence, item_id, user_id) values
  (1, 'suggest corrections for common misspelled domains', 1, 1, 4),
  (2, 'make sure user is emailed a validation email', 2, 1, 4),
  (3, 'Use nist password guidelines', 3, 1, 3),
  (4, 'Use JWT with 4 wk exp', 1, 2, 2),
  (5, 'FYI, Jack has done this before', 1, 3, 1),
  (6, 'AWS SES is setup for this', 1, 4, 4),
  (7, 'Twilio credentials in lastpass team', 1, 6, 1),
  (8, 'This should allow either login via email or SMS', 1, 7, 1),
  (9, 'Log auth for audit purposes', 1, 2, 2),
  (10, 'Link to page from login and register pages', 1, 5, 2);

alter sequence kanban.comment_id_seq restart with 9;

commit;