CREATE DATABASE IF NOT EXISTS test;

USE test;

CREATE TABLE Users(
       id INT PRIMARY KEY AUTO_INCREMENT, 
       username VARCHAR(60), 
       age INT
);

INSERT INTO Users(username, age) 
VALUES("oussama badreddine", 21);

INSERT INTO Users(username, age) 
VALUES("yassine ", 20);

INSERT INTO Users(username, age) 
VALUES("ahlam radi", 23);
