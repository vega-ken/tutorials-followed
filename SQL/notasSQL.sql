-- crear database
  create database test2;

-- borrar database
  drop database test2;

-- crear una tabla
  create table customers(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255),
    address VARCHAR(255),
    city VARCHAR(255),
    state VARCHAR(255),
    zip_code VARCHAR(255),
    PRIMARY KEY (id)
  );

-- insertar filas en la tabla
  INSERT INTO customers (first_name, last_name, email,address,city,state,zip_code) VALUES ('John', 'Doe', 'jdoe@gmail.com' , '55 main street' , 'Boston', 'massachusetts','011221' ); 

-- insertar varias filas en la tabla

  INSERT INTO customers (first_name, last_name, email,address,city,state,zip_code) VALUES
  ('Mike','Smith','msmithEigmail.com','22 Birch lane','Amesbury','Massachusetts','01913'),
  ('kathy','Morris','kmorris@gmail.com','40 Williow st','Hayerhill','Massachusetts','01860'),
  ('Steyen','Samson','ssamson@gmail.com','12 Gills Rd','Exeter','New Hampshire','01283'),
  ('lilian','Davidson','1iliand@gmail.com','7 Whittier st','Brooklyn','New York','34883'),
  ('Derek','Williams','dwillgigmail.com','445 Madison ct','Yonkers','New York','34993'); 

-- actualizar una filas

  UPDATE customers
  SET email = 'test@gmail.com'
  WHERE id = 3;

-- borrar una fila

  DELETE from customers
  WHERE id = 3;

-- alter table - agregar/borrar columnas a una tabla 

  -- agregar una columna

    ALTER TABLE customers
    ADD testCol VARCHAR(255);
  
  -- cambiar el tipo de data de una columna

    ALTER TABLE customers
    MODIFY COLUMN testCol INT(11);

  -- borrar una columna

    ALTER TABLE customers
    DROP COLUMN testCol;

-- seleccionar data

  SELECT first_name, last_name FROM `customers`;

  SELECT * FROM `customers` ORDER BY  last_name; -- de A a Z

  SELECT * FROM `customers` ORDER BY  last_name DESC; -- de Z a A

  -- retornar todos los states
    SELECT DISTINCT state FROM `customers`;
      -- no repite los valores
    
  SELECT * FROM `customers` WHERE age < 30;

  -- seleccionar customers que tienen edad entre 22 y 30
    SELECT * FROM customers
    WHERE age
    BETWEEN 22 and 30;

  -- cambiar el nombre de una colummna (misspell) 

    ALTER TABLE `customers` CHANGE `las_name` `last_name` VARCHAR(255);

  
28:45



