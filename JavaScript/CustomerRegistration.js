function validate() {
    var FullName = document.getElementById("Fname").value;
    var Username = document.getElementById("Uname").value;
    var Email = document.getElementById("email").value;
    var Address =document.getElementById("address").value;
    var Password = document.getElementById("password").value;
    var License=document.getElementById("dln").value;
    var Phone=document.getElementById("phone").value;

   if (FullName == "" || Username == "" || Email == "" || Password == "" || Address == "" || License == "" || Phone == "") 
   {
      alert("Form should be filled completely.");
    }
    else {
          if (Password.length <= 8 )
           {
              alert("Password should contain atleast 8 characters...");
           }
           else if(License.length != 16 ){
              alert("Driving License Number should contain 16 characters");
           }
           else if(Phone.length != 10){
              alert("Phone number should contain 10 digits");
           }
           else if(!/[^a-zA-Z]/.test(Phone)){
             alert("Phone number can only contain digits");
           }
             else{
                   if (confirm("Do you want to Register?") == true) 
                   {
                    alert("Account Created");
                    localStorage.setItem("txtValue", FullName);
                    localStorage.setItem("txtValue1", Address);
                    localStorage.setItem("txtValue2", Email);  
                    localStorage.setItem("txtValue3", License);   
                    localStorage.setItem("txtValue4", Phone);   
                   }
                 }
         }
   }