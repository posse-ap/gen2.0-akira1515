-- DROP DATABASE IF EXISTS big_questions;
-- CREATE DATABASE big_questions;
-- USE quizy;

DROP TABLE IF EXISTS big_questions;

CREATE TABLE big_questions
(
  id           SMALLINT(4),
  name     VARCHAR(255)
);

INSERT INTO employee (id, name) VALUES (1, "Nagaoka");
INSERT INTO employee (id, name) VALUES (2, "Tanaka");