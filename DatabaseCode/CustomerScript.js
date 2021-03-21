const url = 'http://localhost:3020';
$(document).ready(function() {
    //Get All customers
	$('#btn-get-customer').click(() => {
		console.log('Getting all customers')
		$.get('http://localhost:3020/customers', (res) => {
			console.log('data:', res);
		});
	});

	// Create customer
	$('#btn-create-customer').click(() => {
		console.log('Creating a customer');
        const FullName = $('#Fname').val();
		const Username = $('#Uname').val();
		const Address = $('#address').val();
		const Email = $('#email').val();
		const Password = $('#password').val();
		const DrivingLicenseNo = $('#dln').val();
		const Phone = $('#phone').val();
        const customer = new Customer (FullName,Username,Address,Email,Password,DrivingLicenseNo,Phone );
        console.log(customer);
        $.post(url + '/customers', customer, (res) => {
			console.log("Created ", res)
		});
	});
});