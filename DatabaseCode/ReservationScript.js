const url = 'http://localhost:3070';
$(document).ready(function() {
    //Get All reservations
	$('#btn-get-reservation').click(() => {
		console.log('Getting all reservations')
		$.get('http://localhost:3070/reservations', (res) => {
			console.log('data:', res);
		});
	});

	// Create reservation
	$('#btn-create-reservation').click(() => {
		console.log('Creating a reservation');
        const StartDate = $('#start').val();
		const EndDate = $('#end').val();
		const reservation = new Reservation (StartDate,EndDate);
        console.log(reservation);
        $.post(url + '/reservations',reservation, (res) => {
			console.log("Created ", res)
		});
	});
});