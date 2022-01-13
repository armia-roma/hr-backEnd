BEGIN;
CREATE TABLE state(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    code VARCHAR(250) NOT NULL,
    name VARCHAR(250) NOT NULL,
    leaveDaysForTravel INT 
);
INSERT INTO migrations (name)
VALUEs("202112211219_create_state_table");
COMMIT;