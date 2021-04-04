class CustomerLogin {
	constructor(username,password) 
    {
        this.username=username;
	    this.password=password;
    }

    static fromRow(row) {
        return new CustomerLogin( row.username, row.password);
    }

	toString() {
		console.log(`username[${this.username}password[${this.password}]`)
	}
}