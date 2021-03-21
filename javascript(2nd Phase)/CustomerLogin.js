function validate() {
    var Username = document.getElementById("Uname").value;
    var Password = document.getElementById("password").value;
   if (Username == "" || Password == "") 
   {
      alert("Please fill the Fields...");
    }
    else {
          if (Password.length <= 8)
           {
      alert("Password should contain atleast 8 characters");
           }
           else if(){
             
           }
           else{
      if (confirm("Do you want to Sign in?") == true) {
        alert("Logged in");
        location.href="CustomerHome.html";

      }
    }
}
}