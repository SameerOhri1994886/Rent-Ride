CREATE DATABASE CarRental;
USE CarRental;

CREATE TABLE Customer (
    CustomerID int PRIMARY KEY NOT NULL,
    FullName varchar(255) NOT NULL,
    Username varchar(255) NOT NULL,
    Address varchar(255) NOT NULL,
    Email varchar(70) NOT NULL, 
    Password varchar(70) NOT NULL,
    DrivingLicenseNo varchar (16) NOT NULL,
    Phone varchar(10) NOT NULL
);

CREATE TABLE CustomerProfile (
    USerID int PRIMARY KEY NOT NULL,
    FullName varchar(255) NOT NULL,
    Address varchar(255) NOT NULL,
    Email varchar(70) NOT NULL, 
    DrivingLicenseNo varchar(16) NOT NULL,
    Phone varchar(10) NOT NULL
);

CREATE TABLE Employee (
    EmployeeID int PRIMARY KEY NOT NULL,
    UserID int NOT NULL,
    FullName varchar(255) NOT NULL,
    Username varchar(255) NOT NULL,
    Email varchar(70) NOT NULL, 
    Password varchar(70) NOT NULL,
    FOREIGN KEY(UserID) references CustomerProfile(UserID)
);

CREATE TABLE CarInventory (
    CarID int PRIMARY KEY NOT NULL,
    CarBrand varchar(255) NOT NULL,
    CarModel varchar(255) NOT NULL,
    Year int NOT NULL,
    CarType varchar(255) NOT NULL 
);

CREATE TABLE CarReservation (
    BookingID int PRIMARY KEY NOT NULL,
    StartDate date NOT NULL,
    EndDate date NOT NULL
   );


