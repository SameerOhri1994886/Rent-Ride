const url = 'http://localhost:3020';
$(document).ready(function() {
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
	// Sending Credentials to server
	$('#btn-get-customer').click(() => {
		const username = $('#Uname').val();
		const password = $('#password').val();
		const customerLogin = new CustomerLogin(username, password);
		console.log("Username : ",customerLogin.username);
		console.log("Password : ",customerLogin.password);
        $.post('http://localhost:3020/login', customerLogin, (res) => {
			 console.log("Fetching Credentials from SQL Query");
			 console.log(res["Username"]);
			 console.log(res["Password"]);
			 if (customerLogin.username==res["Username"]&&customerLogin.password==res["Password"]) {
				console.log("Customer ID :",res["CustomerID"]);
				const id = res["CustomerID"];
				const localStorage = window.localStorage;
		        localStorage.setItem("Customer ID Key", id);
				window.location.href = `CustomerLogin.html?id=${id}`
                alert("Signed In...");
				location.href="CustomerHome.html";
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

