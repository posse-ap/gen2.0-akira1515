DROP SCHEMA IF EXISTS webapp;
CREATE SCHEMA webapp;
USE webapp;

DROP TABLE IF EXISTS study_languages;
CREATE TABLE study_languages (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  study_language VARCHAR(225) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  color VARCHAR(225) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
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
  study_date datetime NOT NULL,
  study_languages INT NOT NULL,
  study_contents INT NOT NULL,
  study_hour INT
--   created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
--   updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO study_data
  (study_date, study_language, study_content, study_hour) 
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
    ('2022-4-17', 3, 1, 2),
    ('2022-5-17', 4, 1, 3),
    ('2022-5-17', 3, 2, 3),
    ('2022-5-17', 2, 3, 3);