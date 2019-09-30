SELECT s.*
FROM spots s
INNER JOIN users u ON s.user_id = u.id
WHERE u.id = $1;