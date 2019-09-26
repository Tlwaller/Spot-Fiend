SELECT user_id, title, address, description
FROM spots s
LEFT JOIN users u ON s.user_id = u.id
WHERE u.id = $1;