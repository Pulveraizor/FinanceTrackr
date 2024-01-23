DROP DATABASE IF EXISTS financetrackr;

CREATE DATABASE IF NOT EXISTS financetrackr;

USE financetrackr;

DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users(
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NULL,
    PRIMARY KEY (id),
    UNIQUE (username),
    UNIQUE (email)
);

DROP TABLE IF EXISTS transaction;

CREATE TABLE IF NOT EXISTS transaction(
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    description VARCHAR(255) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    category VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

