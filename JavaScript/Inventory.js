function validate(){
    var brand=document.getElementById("brand").value;
    var model=document.getElementById("model").value;
    var year=document.getElementById("year").value;
    var type=document.getElementById("class").value;

    localStorage.setItem("txtValue",brand);
    localStorage.setItem("txtValue1",model);
    localStorage.setItem("txtValue2",year);  
    localStorage.setItem("txtValue3",type);   
}