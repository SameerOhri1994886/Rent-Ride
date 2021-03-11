CREATE DATABASE CarRental;
USE CarRental;

CREATE TABLE Customers (
    FullName varchar(255),
	Username varchar(255),
    Address varchar(255),
    Email varchar(70), 
    Password varchar(70),
    DrivingLicenseNo varchar(16),
    Phone varchar(10)
);

CREATE TABLE Employees (
    FullName varchar(255),
	Username varchar(255),
    Email varchar(70), 
    Password varchar(70)
);

CREATE TABLE Cars (
    Brand varchar(255),
	Model varchar(255),
    Year int,
    Type varchar(255) 
);
