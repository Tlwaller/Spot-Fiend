UPDATE spots
SET title = $2, address = $3, description = $4
WHERE spot_id = $1;

SELECT s.*
FROM spots s
INNER JOIN users u ON s.user_id = u.id
WHERE u.id = $5;