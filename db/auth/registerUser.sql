INSERT INTO users (username, hash, is_admin) 
VALUES ($1, $2, $3, $4)
RETURNING *;