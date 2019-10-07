SELECT s.*
FROM spots s
INNER JOIN users u ON s.user_id = u.id
where s.user_id = $1