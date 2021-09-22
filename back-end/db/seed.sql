\c connect;

INSERT INTO users (
        linkedin,
        twitter,
        email,
        display_name,
        photo_url,
        phone_number,
        uid
    )
VALUES (
        'https://www.linkedin.com/in/carlos-hidalgo',
        '@carlos',
        'carlos@pursuit.org',
        'CarlosH',
        'https://picsum.photos/200',
        7185551234,
        'szyR5ui895Toro3cnm75MJKOYkf1'
    ),
    (
        'https://www.linkedin.com/in/coreenmcooper/',
        '@cc0upa',
        'coreen@pursuit.org',
        'CCooper',
        'https://picsum.photos/200',
        2125551234,
        'XsyyfBlnlJeve32xqPQUaVv9f5J2'
    ),
    (
        'https://www.linkedin.com/in/jessicanetto/',
        '@jessica',
        'jessicanetto@pursuit.org',
        'JNetto',
        'https://picsum.photos/200',
        3475551234,
        'OUO4QH8PETgcO5TAECPxz4K16VF3'
    ), (
        'https://www.linkedin.com/in/poonam-dass/',
        '@poonam',
        'poonamdass@pursuit.org',
        'PDass',
        'https://picsum.photos/200',
        9175551234,
        'JzsbUy5H7tMu2Hs0Y7mFzVk41oC2'
        
    );

INSERT INTO connections (
    user1_id, user2_id
)
VALUES (
        'OUO4QH8PETgcO5TAECPxz4K16VF3', 
        'szyR5ui895Toro3cnm75MJKOYkf1'
        
    ),(
        'XsyyfBlnlJeve32xqPQUaVv9f5J2',
        'szyR5ui895Toro3cnm75MJKOYkf1'
        
    ),(
        'JzsbUy5H7tMu2Hs0Y7mFzVk41oC2',
        'XsyyfBlnlJeve32xqPQUaVv9f5J2'
        
    ),(
        'XsyyfBlnlJeve32xqPQUaVv9f5J2',
        'OUO4QH8PETgcO5TAECPxz4K16VF3'
        
    );



-- INSERT into events (
--     name
-- )
-- VALUES (
--     'Event 1'
-- ), (
--     'Event 2'
-- )
