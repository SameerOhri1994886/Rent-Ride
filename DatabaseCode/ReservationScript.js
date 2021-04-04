const url = 'http://localhost:3080';
$(document).ready(function() {
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