DROP DATABASE IF EXISTS financetrackr;

CREATE DATABASE IF NOT EXISTS financetrackr;

USE financetrackr;

DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users(
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE (username),
    UNIQUE (email)
);

INSERT INTO users(username, password, email) VALUES
('admin', 'admin', 'admin@localhost'),
('user', 'user', 'user@localhost');

DROP TABLE IF EXISTS users_balance;

CREATE TABLE IF NOT EXISTS users_balance (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    balance DECIMAL(10,2) NOT NULL DEFAULT "0.00",
    PRIMARY KEY (id),
    FOREIGN KEY(user_id) REFERENCES users(id)
);

INSERT INTO users_balance(user_id, balance) VALUES
(1, 0.00);

DROP TABLE IF EXISTS merchant_groups;

CREATE TABLE IF NOT EXISTS merchant_groups (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE (name)
);

INSERT INTO merchant_groups(name) VALUES
('Top up'),
('ATM'),
('Clothing'),
('Health'),
('Education'),
('Housing'),
('Utilities'),
('Groceries'),
('Restaurants'),
('Transport'),
('Entertainment'),
('Shopping'),
('Personal'),
('Other');

DROP TABLE IF EXISTS transactions;

CREATE TABLE IF NOT EXISTS transactions(
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    merchant_name VARCHAR(255) NOT NULL,
    merchant_group INT NOT NULL,
    deposit BOOLEAN NOT NULL DEFAULT FALSE,
    amount DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (merchant_group) REFERENCES merchant_groups(id)
);

INSERT INTO transactions (user_id, merchant_name, merchant_group, deposit, amount) VALUES
(1, 'Amazon', 3, 0, 100.00),
(1, 'Starbucks', 5, 0, 50.00),
(1, 'Walmart', 7, 0, 75.00),
(1, 'Target', 7, 0,  25.00),
(1, 'SEB', 1, 1, 100.00),
(1, 'CVS', 4, 0, 75.00),
(1, 'Walgreens', 4, 0, 100.00),
(1, 'Uber', 10, 0, 50.00),
(1, 'Lyft', 10, 0, 25.00),
(1, 'Netflix', 11, 0, 10.00),
(1, 'Hulu', 11, 0, 15.00);