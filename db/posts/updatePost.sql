UPDATE spots
SET title = $2, longitude = $3, latitude = $4, description = $5
WHERE spot_id = $1;

SELECT s.*
FROM spots s
INNER JOIN users u ON s.user_id = u.id
WHERE u.id = $6;