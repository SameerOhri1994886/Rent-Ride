CREATE DATABASE CarRental;
USE CarRental;
CREATE TABLE Customer (
    CustomerID int PRIMARY KEY NOT NULL auto_increment,
    FullName varchar(255) NOT NULL,
    Username varchar(255) NOT NULL,
    Address varchar(255) NOT NULL,
    Email varchar(70) NOT NULL, 
    Password varchar(70) NOT NULL,
    DrivingLicenseNo varchar (16) NOT NULL,
    Phone varchar(10) NOT NULL
);

CREATE TABLE CustomerProfile (
    UserID int PRIMARY KEY NOT NULL auto_increment,
    CustomerID int NOT NUll,
    FullName varchar(255) NOT NULL,
    Address varchar(255) NOT NULL,
    Email varchar(70) NOT NULL, 
    DrivingLicenseNo varchar(16) NOT NULL,
    Phone varchar(10) NOT NULL,
    FOREIGN KEY(CustomerID) REFERENCES Customer(CustomerID)
	);

CREATE TABLE Employee (
    EmployeeID int PRIMARY KEY NOT NULL auto_increment ,
    FullName varchar(255) NOT NULL,
    Username varchar(255) NOT NULL,
    Email varchar(70) NOT NULL, 
    Password varchar(70) NOT NULL
);

CREATE TABLE CarInventory (
    CarID int PRIMARY KEY NOT NULL auto_increment,
    EmployeeID int NOT NULL,
    CarBrand varchar(255) NOT NULL,
    CarModel varchar(255) NOT NULL,
    Year int NOT NULL,
    CarType varchar(255) NOT NULL,
    FOREIGN KEY(EmployeeID) REFERENCES Employee(EmployeeID)
);

CREATE TABLE CarReservation (
    BookingID int PRIMARY KEY NOT NULL auto_increment,
    CustomerID int NOT NULL,
    StartDate date NOT NULL,
    EndDate date NOT NULL,
    FOREIGN KEY(CustomerID) REFERENCES Customer(CustomerID)
  );

INSERT INTO CustomerProfile(CustomerID,FullName,Address,Email,DrivingLicenseNo,Phone)
SELECT CustomerID,FullName,Address,Email,DrivingLicenseNo,Phone FROM Customer;

SELECT * FROM Customer;
SELECT * FROM CustomerProfile;
SELECT * FROM Employee;
SELECT * FROM CarReservation;
SELECT * FROM CarInventory;



