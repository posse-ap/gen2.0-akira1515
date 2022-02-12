-- DROP DATABASE IF EXISTS big_questions;
-- CREATE DATABASE big_questions;
-- USE quizy;

DROP TABLE IF EXISTS quizytable;

CREATE TABLE quizytable
(
  id           INT(10),
  name     VARCHAR(40)
);

INSERT INTO employee (id, name) VALUES (1, "Nagaoka");
INSERT INTO employee (id, name) VALUES (2, "Tanaka");