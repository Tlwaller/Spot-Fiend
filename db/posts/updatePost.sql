-- SELECT spots,
--     CASE
--         WHEN $2 != '' THEN UPDATE spots SET title = $2
--         WHEN $3 != '' THEN address = $3
--         WHEN $4 != '' THEN longitude = $4
--         WHEN $5 != '' THEN latitude = $5
--         WHEN $6 != '' THEN description = $6
-- WHERE spot_id = $1;

UPDATE spots
SET title = CASE 
                WHEN $2 = '' THEN title
                ELSE $2
            END
WHERE spot_id = $1;

UPDATE spots
SET address = CASE 
                WHEN $3 = '' THEN address
                ELSE $3
            END
WHERE spot_id = $1;

UPDATE spots
SET longitude = CASE 
                WHEN $4 = 0 THEN longitude
                ELSE $4
            END
WHERE spot_id = $1;

UPDATE spots
SET latitude = CASE 
                WHEN $5 = 0 THEN latitude
                ELSE $5
            END
WHERE spot_id = $1;

UPDATE spots
SET description = CASE 
                WHEN $6 = '' THEN description
                ELSE $6
            END
WHERE spot_id = $1;

SELECT s.*
FROM spots s
INNER JOIN users u ON s.user_id = u.id
WHERE u.id = $7;