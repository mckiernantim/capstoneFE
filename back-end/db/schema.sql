-- DROP DATABASE IF EXISTS connect;
-- CREATE DATABASE connect;

-- \c connect;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    linkedin TEXT,
    twitter TEXT,
    email TEXT,
    displayName TEXT, 
    photoURL TEXT,
    phoneNumber NUMERIC,
    uid TEXT NOT NULL
);
