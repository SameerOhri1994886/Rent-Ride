function validate() {
    var FirstName = document.getElementById("Fname").value;
    var Username = document.getElementById("Uname").value;
    var Email = document.getElementById("email").value;
    var Password = document.getElementById("password").value;
  if (FirstName == "" || Username == "" || Email == "" || Password == "") 
   {
      alert("Form should be filled completely.");
    }
    else {
          if (Password.length <= 8)
           {
              alert("Password should contain atleast 8 characters...");
           }
             else{
                   if (confirm("Do you want to Register?") == true) 
                   {
                    alert("Account Created");
                   }
                 }
         }
   }