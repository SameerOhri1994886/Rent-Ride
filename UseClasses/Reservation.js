class Reservation {
	constructor(StartDate,EndDate) {
		this.StartDate=StartDate;
		this.EndDate=EndDate;
	}

    static fromRow(row) {
        return new Reservation(row.StartDate,row.EndDate);
    }

	toString() {
		console.log(`StartDate[${this.StartDate}]EndDate[${this.EndDate}]`)
	}
}