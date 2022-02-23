DROP DATABASE IF EXISTS action_figs;
CREATE DATABASE action_figs;
\c action_figs;
CREATE TABLE figures (
    id SERIAL PRIMARY KEY,
    name TEXT,
    description TEXT,
    price INT,
    rating INT,
    is_featured BOOLEAN
);