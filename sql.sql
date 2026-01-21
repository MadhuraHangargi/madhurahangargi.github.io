CREATE DATABASE contract_management;
USE contract_management;

CREATE TABLE contracts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    contract_name VARCHAR(255),
    client_name VARCHAR(255),
    client_address TEXT,
    start_date DATE,
    template VARCHAR(100),
    status VARCHAR(50) DEFAULT 'Created'
);

USE contract_management;
DESCRIBE contracts;
ALTER TABLE contracts ADD COLUMN agreement_html LONGTEXT;

USE contract_management;
ALTER TABLE contracts
ADD COLUMN signature LONGTEXT;
SELECT * FROM contracts;
