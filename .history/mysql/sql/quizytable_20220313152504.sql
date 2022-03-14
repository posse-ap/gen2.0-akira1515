-- DROP DATABASE IF EXISTS big_questions;
-- CREATE DATABASE big_questions;
create database quizy;
USE quizy;

DROP TABLE IF EXISTS questions;

CREATE TABLE questions (
  id       SMALLINT(4),
  big_question_id SMALLINT(4),
  name     VARCHAR(255) NOT NULL
);

INSERT INTO questions
VALUES
(1, 'tokyo'),
(2, 'hiroshima');