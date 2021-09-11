-- DROP DATABASE IF EXISTS connect;
-- CREATE DATABASE connect;

-- \c connect;

-- DROP TABLE IF EXISTS users;

-- CREATE TABLE users (
--     id SERIAL PRIMARY KEY,
--     firstname TEXT NOT NULL,
--     lastname TEXT NOT NULL,
--     email TEXT NOT NULL,
--     phone NUMERIC,
--     linkedin TEXT,
--     uid TEXT NOT NULL
-- );

-- DROP DATABASE IF EXISTS connect;
-- CREATE DATABASE connect;

-- \c connect;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    color TEXT,
    uid TEXT NOT NULL
);
