DELETE FROM spots WHERE spot_id = $1;

SELECT s.user_id, s.title, s.address, s.description, s.spot_id
FROM spots s
INNER JOIN users u ON s.user_id = u.id
WHERE u.id = $2;