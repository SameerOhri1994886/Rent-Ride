class Car{
	constructor(Brand,Model,Year,Type){
		this.Brand=Brand;
		this.Model=Model;
		this.Year=Year;
		this.Type=Type;
		}

    static fromRow(row) {
        return new Car(row.Brand, row.Model, row.Year,row.Type);
    }

	toString() {
		console.log(`Brand[${this.Brand}]Model[${this.Model}]Year[${this.Year}]
		Type[${this.Type}]`)
	}
}