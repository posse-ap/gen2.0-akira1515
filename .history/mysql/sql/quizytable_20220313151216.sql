-- DROP DATABASE IF EXISTS big_questions;
-- CREATE DATABASE big_questions;
create database quizy;
USE quizy;

DROP TABLE IF EXISTS big_questions;

CREATE TABLE big_questions (
  id       SMALLINT(4),
  name     VARCHAR(255) NOT NULL
);

INSERT INTO big_questions
VALUES
(1, 'tokyo'),
(2, 'hiroshima');