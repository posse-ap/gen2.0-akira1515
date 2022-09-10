DROP SCHEMA IF EXISTS webapp;
CREATE SCHEMA webapp;
USE webapp;

DROP TABLE IF EXISTS study_languages;
CREATE TABLE study_languages (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  study_language VARCHAR(225) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  color VARCHAR(225) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
--   created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
--   updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO study_languages 
    (study_language, color)
VALUES
    ('JavaScript', '1754EF'),
    ('CSS', '1071BD'),
    ('PHP', '20BEDE'),
    ('HTML', '3CCEFE'),
    ('Lalavel', 'B29EF3'),
    ('SQL', '6D46EC'),
    ('SHELL', '4A18EF'),
    ('情報システム基礎知識（その他)', '3105C0');


DROP TABLE IF EXISTS study_contents;
CREATE TABLE study_contents (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  study_content VARCHAR(225) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  color VARCHAR(225) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
--   created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
--   updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO study_contents 
    (study_content, color)
VALUES
    ('ドットインストール', '1754EF'),
    ('N予備校', '1071BD'),
    ('POSSE課題', '20BEDE');

DROP TABLE IF EXISTS study_data;
CREATE TABLE study_data (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  study_date date NOT NULL,
  study_language_id INT NOT NULL,
  study_content_id INT NOT NULL,
  study_hour INT
--   created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
--   updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO study_data
  (study_date, study_language_id, study_content_id, study_hour) 
VALUES
    ('2022-3-05', 1, 1, 1),
    ('2022-3-06', 3, 2, 1),
    ('2022-3-07', 4, 3, 1),
    ('2022-3-08', 2, 1, 1),
    ('2022-3-09', 1, 1, 2),
    ('2022-3-10', 5, 2, 2),
    ('2022-3-11', 6, 3, 2),
    ('2022-3-12', 7, 3, 2),
    ('2022-3-13', 3, 1, 3),
    ('2022-3-14', 3, 2, 3),
    ('2022-3-15', 8, 3, 3),
    ('2022-3-16', 3, 2, 3),
    ('2022-4-17', 4, 1, 1),
    ('2022-4-17', 3, 2, 1),
    ('2022-4-17', 2, 3, 2),
    ('2022-9-1', 2, 3, 6),
    ('2022-9-2', 2, 1, 0),
    ('2022-9-4', 1, 1, 2),
    ('2022-9-5', 3, 3, 5),
    ('2022-9-6', 3, 1, 2),
    ('2022-9-7', 4, 1, 3),
    ('2022-9-8', 3, 2, 3),
    ('2022-9-9', 2, 3, 3),
    ('2022-9-10', 2, 3, 3),
    ('2022-9-11', 3, 1, 8),
    ('2022-9-12', 3, 1, 5),
    ('2022-9-13', 8, 1, 9),
    ('2022-9-14', 3, 1, 2),
    ('2022-9-15', 1, 3, 2),
    ('2022-9-16', 7, 2, 5),
    ('2022-9-17', 3, 1, 8),
    ('2022-9-18', 5, 3, 0),
    ('2022-9-19', 2, 1, 9),
    ('2022-9-20', 7, 3, 6),
    ('2022-9-21', 5, 1, 5),
    ('2022-9-22', 1, 1, 2),
    ('2022-9-23', 3, 1, 2),
    ('2022-9-24', 8, 3, 7),
    ('2022-9-25', 4, 1, 2),
    ('2022-9-26', 3, 2, 2),
    ('2022-9-27', 4, 1, 1),
    ('2022-9-28', 6, 2, 6),
    ('2022-9-29', 1, 1, 1),
    ('2022-9-30', 7, 1, 8);
