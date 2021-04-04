class EmployeeLogin {
	constructor(username,password) 
    {
        this.username=username;
	    this.password=password;
    }

    static fromRow(row) {
        return new EmployeeLogin( row.username, row.password);
    }

	toString() {
		console.log(`username[${this.username}password[${this.password}]`)
	}
}