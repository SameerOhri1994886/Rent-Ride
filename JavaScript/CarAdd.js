function validate() {
    var brand = document.getElementById("Brand").value;
    var model = document.getElementById("Model").value;
    var year = document.getElementById("Year").value;
    var type = document.getElementById("Type").value;

    if (brand == "" || model == "" || year == "" || type == "") 
   {
      alert("Form should be filled completely...");
    }
    else {
          if (year.length != 4 || !/[^a-zA-Z]/.test(year))
           {
              alert("Please enter the correct value for the year... ");
           }
           else{
                 if (confirm("Do you want to add this car?") == true) 
                   {
                    alert("Car Added!");
                    const table=document.getElementById("inventory");
            const row = table.insertRow();
            var brandCell=row.insertCell(0);
            var modelCell=row.insertCell(1);
            var yearCell=row.insertCell(2);
            var typeCell=row.insertCell(3);
            brandCell.innerHTML=brand;
            modelCell.innerHTML=model;
            yearCell.innerHTML=year;
            typeCell.innerHTML=type;
                   }
                 }
         }
   }