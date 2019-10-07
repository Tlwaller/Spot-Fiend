SELECT username
FROM users u
JOIN spots s ON $1 = u.id
WHERE s.spot_id = $1;