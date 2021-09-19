DROP DATABASE IF EXISTS connect;
CREATE DATABASE connect;

\c connect;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL ,
    linkedin TEXT,
    twitter TEXT,
    email TEXT,
    displayName TEXT, 
    photoURL TEXT,
    phoneNumber NUMERIC,
    uid TEXT NOT NULL PRIMARY KEY
);


-- DROP TABLE IF EXISTS events;
-- CREATE TABLE events(
--     id SERIAL PRIMARY KEY,
--     name TEXT
-- );

DROP TABLE IF EXISTS connections;
CREATE TABLE connections(
    id SERIAL PRIMARY KEY,
    user1_id TEXT REFERENCES users (uid),
    user2_id TEXT REFERENCES users (uid)
    -- event_id INT REFERENCES events (id)
);

-- SELECT displayName from users JOIN connections ON users.uid = connections.user1_id OR users.uid = connections.user2_id
--  WHERE ( connections.user1_id='JzsbUy5H7tMu2Hs0Y7mFzVk41oC2' OR connections.user2_id='JzsbUy5H7tMu2Hs0Y7mFzVk41oC2') 
--  AND users.uid != 'JzsbUy5H7tMu2Hs0Y7mFzVk41oC2'