DROP DATABASE IF EXISTS burgerdb;

CREATE DATABASE budgerdb;

USE burgerdb;

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured BOOL DEFAULT false,
PRIMARY KEY (id)
);