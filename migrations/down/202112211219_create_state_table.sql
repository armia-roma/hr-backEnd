BEGIN;
DROP TABLE state;
DELETE FROM magrations WHERE nmae = "202112211219_create_state_table";
COMMIT;