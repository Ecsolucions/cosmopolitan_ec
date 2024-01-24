CREATE DATABASE mi_base_de_datos;

USE mi_base_de_datos;

CREATE TABLE usuarios (
  nombre_de_usuario VARCHAR(255) NOT NULL,
  contraseña VARCHAR(255) NOT NULL,
  PRIMARY KEY (nombre_de_usuario)
);

