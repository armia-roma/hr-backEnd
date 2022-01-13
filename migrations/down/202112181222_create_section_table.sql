BEGIN;
DROP TABLE section;
DELETE FROM migrations WHERE name = "202112181222_create_section_table";
COMMIT;