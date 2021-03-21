class Customer {
	constructor(FullName, Username,Address,Email,Password,DrivingLicenseNo,Phone) {
		this.FullName=FullName;
		this.Username=Username;
		this.Address=Address;
		this.Email=Email;
		this.Password=Password;
		this.DrivingLicenseNo=DrivingLicenseNo;
		this.Phone=Phone;
	}

    static fromRow(row) {
        return new Customer(row.FullName, row.Username, row.Address,row.Email,row.Password,row.DrivingLicenseNo,row.Phone);
    }

	toString() {
		console.log(`FullName[${this.FullName}]Username[${this.Username}]Address[${this.Address}]Email[${this.Email}]
		Password[${this.Password}]DrivingLicenseNo[${this.DrivingLicenseNo}]Phone[${this.Phone}]`)
	}
}