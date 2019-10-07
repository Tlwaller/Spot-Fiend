SELECT s.*
FROM spots s
INNER JOIN users u ON s.user_id = u.id
WHERE s.spot_id = $1