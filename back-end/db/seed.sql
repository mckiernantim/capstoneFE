\c connect

INSERT INTO users (
        linkedin,
        twitter,
        email,
        displayName,
        photoURL,
        phoneNumber,
        uid
    )
VALUES (
        'https://www.linkedin.com/in/carlos/',
        '@carlos',
        'carlos@aol.com',
        'CarlosH',
        'https://picsum.photos/200/300',
        7185551234,
        'JzsbUy5H7tMu2Hs0Y7mFzVk41oC2'
    ),
    (
        'https://www.linkedin.com/in/coreen/',
        '@coreen',
        'coreen@gmail.com',
        'CCooper',
        'https://picsum.photos/200/300',
        2125551234,
        '2987uyh4ry89o3ikjwjhued8r3iwk'
    ),
    (
        'https://www.linkedin.com/in/jessica/',
        '@jessica',
        'Jessica@gmail.com',
        'JessN',
        'https://picsum.photos/200/300',
        3475551234,
        '0928u3j4nrhfu7y63th4n5tjgfiid'
    ), (
        'https://www.linkedin.com/in/poonam/',
        '@poonam',
        'poonam@gmail.com',
        'PDass',
        'https://picsum.photos/200/300',
        9175551234,
        'n5rkio92ij3nedixc9oqk234'
    );

INSERT INTO connections (
    user1_id, user2_id
)
VALUES (
        'JzsbUy5H7tMu2Hs0Y7mFzVk41oC2', 
        '2987uyh4ry89o3ikjwjhued8r3iwk'
        
    ),(
        '0928u3j4nrhfu7y63th4n5tjgfiid',
        'JzsbUy5H7tMu2Hs0Y7mFzVk41oC2'
        
    ),(
        '2987uyh4ry89o3ikjwjhued8r3iwk',
        '0928u3j4nrhfu7y63th4n5tjgfiid'
        
    );



-- INSERT into events (
--     name
-- )
-- VALUES (
--     'Event 1'
-- ), (
--     'Event 2'
-- )
