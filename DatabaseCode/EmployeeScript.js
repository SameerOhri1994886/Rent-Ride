const url = 'http://localhost:3060';
$(document).ready(function() {
//Get All employees
	$('#btn-get-employee').click(() => {
		console.log('Getting all employees')
		$.get('http://localhost:3060/employees', (res) => {
			console.log('data:', res);
		});
	});

	// Create employee
	$('#btn-create-employee').click(() => {
		console.log('Creating an employee');
        const FullName = $('#Fname').val();
		const Username = $('#Uname').val();
		const Email = $('#email').val();
		const Password = $('#password').val();
		const employee = new Employee(FullName,Username,Email,Password);
        console.log(employee);
        $.post(url + '/employees',employee,(res) => {
			console.log("Created ", res)
		});
	});
});