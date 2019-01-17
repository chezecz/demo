CREATE DATABASE demo;
USE demo;

DROP TABLE names;

CREATE TABLE names (
	userid integer primary key AUTO_INCREMENT,
	first_name text not null,
	last_name text not null) AUTO_INCREMENT=1;
