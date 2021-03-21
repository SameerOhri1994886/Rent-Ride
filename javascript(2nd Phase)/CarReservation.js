function validate() {
    var startDate = new Date(document.getElementById("start").value);
    var endDate = new Date(document.getElementById("end").value);
    var price = document.getElementById("price").value;
    if(!Date.parse(startDate) || !Date.parse(endDate))

   {
      alert("Form should be filled completely.");
    }
    else{
                   if (confirm("Do you want to Book Your Reservation ?") == true) 
                   {
                    alert("Car Reserved!");
                   }
                 }
         }
  function check(){
    var startDate = new Date(document.getElementById("start").value);
    var endDate = new Date(document.getElementById("end").value);
    var total_days = (endDate - startDate) / (1000 * 60 * 60 * 24);
    var TotalPrice=Math.round(total_days)*55;
   document.getElementById("total").innerHTML = TotalPrice;
}
function del(){
  if (confirm("Do you want to Cancel Your Reservation ?") == true) 
  {
    location.href="CustomerHome.html";
   }
  }
   