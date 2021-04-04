function display(){
    document.getElementById("Fname").innerHTML=localStorage.getItem("txtValue");
    document.getElementById("address").innerHTML=localStorage.getItem("txtValue1");
    document.getElementById("email").innerHTML=localStorage.getItem("txtValue2");
    document.getElementById("dln").innerHTML=localStorage.getItem("txtValue3");
    document.getElementById("phone").innerHTML=localStorage.getItem("txtValue4");
}
function edit(){
    location.href="EditProfile.html";
}
function Saved(){ 
var FullName = document.getElementById("Fname").value;
var Email = document.getElementById("email").value;
var Address =document.getElementById("address").value;
var License=document.getElementById("dln").value;
var Phone=document.getElementById("phone").value;
if (FullName == "" || Email == "" || Address == "" || License == "" || Phone == "") 
   {
      alert("Form should be filled completely.");
    }
    else {
            if(License.length != 16 ){
              alert("Driving License Number should contain 16 characters");
           }
           else if(Phone.length != 10){
              alert("Phone number should contain 10 digits");
           }
           else if(!/[^a-zA-Z]/.test(Phone)){
             alert("Phone number can only contain digits");
           }
             else{
                   if (confirm("Are you sure to make changes?") == true) 
                   {
                    alert("Profile Edited!");
                    localStorage.setItem("txtValue", FullName);
                    localStorage.setItem("txtValue1", Address);
                    localStorage.setItem("txtValue2", Email);  
                    localStorage.setItem("txtValue3", License);   
                    localStorage.setItem("txtValue4", Phone);   
}
             }
            }
        }