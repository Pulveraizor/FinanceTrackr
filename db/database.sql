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

DROP TABLE IF EXISTS merchant_groups;

CREATE TABLE IF NOT EXISTS merchant_groups (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE (name)
);

INSERT INTO merchant_groups(name) VALUES
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

DROP TABLE IF EXISTS transaction_statuses;

CREATE TABLE IF NOT EXISTS transaction_statuses (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    PRIMARY KEY (id)
);

CREATE INDEX idx_name ON transaction_statuses (name);

INSERT INTO transaction_statuses (name) VALUES
('Pending'),
('Completed'),
('Failed');

DROP TABLE IF EXISTS transactions;

CREATE TABLE IF NOT EXISTS transactions(
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    merchant_name VARCHAR(255) NOT NULL,
    merchant_group VARCHAR(45) NOT NULL,
    deposit BOOLEAN NOT NULL DEFAULT FALSE,
    amount DECIMAL(10,2) NOT NULL,
    transaction_status VARCHAR(45) NOT NULL DEFAULT 'Pending',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (merchant_group) REFERENCES merchant_groups(name),
    FOREIGN KEY (transaction_status) REFERENCES transaction_statuses(name)
);

INSERT INTO transactions (user_id, merchant_name, merchant_group, deposit, amount, transaction_status) VALUES
(1, 'Amazon', 'Shopping', 0, 100.00, 'Pending'),
(1, 'Starbucks', 'Restaurants', 0, 50.00, 'Completed'),
(1, 'Walmart', 'Shopping', 0, 75.00, 'Pending'),
(1, 'Target', 'Shopping', 0,  25.00, 'Pending'),
(1, 'SEB', 'ATM', 1, 100.00, 'Completed'),
(1, 'CVS', 'Health', 0, 75.00, 'Pending'),
(1, 'Walgreens', 'Health', 0, 100.00, 'Pending'),
(1, 'Uber', 'Transport', 0, 50.00, 'Failed'),
(1, 'Lyft', 'Transport', 0, 25.00, 'Pending'),
(1, 'Netflix', 'Entertainment', 0, 10.00, 'Pending'),
(1, 'Hulu', 'Entertainment', 0, 15.00, 'Pending');
