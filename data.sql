CREATE SCHEMA digitalblue;
use digitalblue;
drop table usuario;
CREATE TABLE usuarios (
id int unsigned auto_increment primary key not null,
nombre varchar(80) not null,
apellido varchar(80) not null,
direccion varchar(120) not null,
telefono int not null 
);
use data;
CREATE TABLE books (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(500) NOT NULL,
rating DECIMAL(3,1) UNSIGNED NOT NULL,
awards INT UNSIGNED DEFAULT 0,
release_date DATE NOT NULL,
length INT UNSIGNED NOT NULL
);
 INSERT INTO books(title,awards,release_date,length,img)
 VALUES ("Toy Story",2,'2000-07-01',250,'buz.png');
 
 
ALTER TABLE books 
ADD img VARCHAR(500) NOT NULL;

ALTER TABLE books 
MODIFY title VARCHAR(100) NOT NULL;

ALTER TABLE books 
DROP rating;

DROP TABLE IF EXISTS books;

UPDATE nombre_tabla
SET columna_1 = valor_1, columna_2 = valor_2, ...
WHERE condición;

DELETE FROM nombre_tabla WHERE condicion;

SELECT nombre_columna, nombre_columna
FROM nombre_tabla;

SELECT * FROM books;

SELECT nombre_columna_1, nombre_columna_2
FROM nombre_tabla
WHERE condicion;

SELECT nombre, edad
FROM usuarios
WHERE edad > 17;

SELECT nombre_columna1, nombre_columna2
FROM tabla
WHERE condicion
ORDER BY nombre_columna1;

SELECT nombre, edad
FROM usuarios
WHERE edad > 21
ORDER BY nombre DESC;

SELECT nombre_columna1, nombre_columna2
FROM nombre_tabla
LIMIT cantidad_de_registros;

SELECT id, nombre, apellido
FROM alumnos
LIMIT 20
OFFSET 20;

SELECT nombre, edad
FROM alumnos
WHERE edad BETWEEN 6 AND 12;

SELECT nombre
FROM usuarios
WHERE edad LIKE '_a%';

SELECT nombre
FROM usuarios
WHERE direccion LIKE '%9 de julio%';

show databases;
