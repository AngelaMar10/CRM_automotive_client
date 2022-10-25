CREATE DATABASE dp_customers;
\c dp_customers_db

CREATE TABLE customers(
  id SERIAL PRIMARY KEY,
  name TEXT,
  date_of_service TEXT,
  car_kilometer REAL,
  registration REAL,
  make_and_model TEXT,
  contact_number REAL,
  service_description TEXT,
  recomendations TEXT,
  service_cost REAL
);

INSERT INTO customers(name, date_of_service, car_kilometer, registration, make_and_model, contact_number, service_description, recomendations, service_cost)
VALUES
('David', '')