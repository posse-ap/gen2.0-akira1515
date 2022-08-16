DROP SCHEMA IF EXISTS posse;
CREATE SCHEMA posse;
USE posse;

DROP TABLE IF EXISTS big_questions;
CREATE TABLE big_questions (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO big_questions SET name='Tokyo-quiz';
INSERT INTO big_questions SET name='Hiroshima-quiz';

DROP TABLE IF EXISTS questions;
CREATE TABLE questions (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  big_question_id INT NOT NULL,
  image VARCHAR(255) NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO questions SET big_question_id=1, image='takanawa.png';
INSERT INTO questions SET big_question_id=1, image='kameido.png';
INSERT INTO questions SET big_question_id=2, image='mukainada.png';

DROP TABLE IF EXISTS choices;
CREATE TABLE choices (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  question_id INT NOT NULL,
  name VARCHAR(255) NOT NULL,
  valid TINYINT(1) NOT NULL DEFAULT '0',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO choices
  (question_id, name, valid) 
VALUES
  (1, 'あtakanawa', 1),
  (1, 'takawa', 0),
  (1, 'kouwa', 0),
  (2, 'kameto', 0),
  (2, 'kamedo', 0),
  (2, 'kameido', 1),
  (3, 'mukouhira', 0),
  (3, 'mukihira', 0),
  (3, 'mukainada', 1);