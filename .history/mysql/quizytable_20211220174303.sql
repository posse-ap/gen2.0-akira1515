DROP DATABASE IF EXISTS quizy;
CREATE DATABASE quizy;
USE quizy;

DROP TABLE IF EXISTS quizytab;

CREATE TABLE quizytable
(
  id           INT(10),
  name     VARCHAR(40)
);

INSERT INTO employee (id, name) VALUES (1, "Nagaoka");
INSERT INTO employee (id, name) VALUES (2, "Tanaka");