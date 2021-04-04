const url = 'http://localhost:3060';
$(document).ready(function() {
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
	// Sending Credentials to server
	$('#btn-get-employee').click(() => {
		const username = $('#Uname').val();
		const password = $('#password').val();
		const employeeLogin = new EmployeeLogin(username, password);
		console.log("Username : ",employeeLogin.username);
		console.log("Password : ",employeeLogin.password);
        $.post('http://localhost:3060/login', employeeLogin, (res) => {
			 console.log("Retrieved Credentials from SQL Query");
			 console.log(res["Username"]);
			 console.log(res["Password"]);
			 if (employeeLogin.username==res["Username"]&&employeeLogin.password==res["Password"]) {
				alert("Signed In...");
				location.href="EmployeeHome.html";
			} 
			else if(username==""&&password==""){
				alert("Please Fill the credentials...");
			}
			else if(password.length<=8){
               alert("Password should contain atleast 8 characters");
			}
			else{
				alert("Invalid Credentials...");
			}
		})
     });
});