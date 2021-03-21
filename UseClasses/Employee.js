class Employee {
	constructor(FullName,Username,Email,Password){
		this.FullName=FullName;
		this.Username=Username;
		this.Email=Email;
		this.Password=Password;
		}

    static fromRow(row) {
        return new Employee(row.FullName, row.Username, row.Email,row.Password);
    }

	toString() {
		console.log(`FullName[${this.FullName}]Username[${this.Username}]Email[${this.Email}]
		Password[${this.Password}]`)
	}
}