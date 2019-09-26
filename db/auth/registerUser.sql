INSERT INTO users (username, hash, email) 
VALUES ($1, $2, $3)
RETURNING *;