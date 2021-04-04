const url = 'http://localhost:3090';
$(document).ready(function() {
    //Get All cars
	$('#btn-get-car').click(() => {
		console.log('Getting all cars')
		$.get('http://localhost:3090/cars', (res) => {
			console.log('data:', res);
		});
	});
   // Adding a Car
	$('#button').click(() => {
		console.log('Adding a car');
        const Brand = $('#Brand').val();
		const Model = $('#Model').val();
        const Year = $('#Year').val();
        const Type = $('#Type').val();
		const car = new CarInventory(Brand,Model,Year,Type);
        console.log(car);
        $.post(url + '/cars',car, (res) => {
			console.log("Car Added ", res)
		});
	});
});