function display(){
    document.getElementById("Fname").innerHTML=localStorage.getItem("txtValue");
    document.getElementById("address").innerHTML=localStorage.getItem("txtValue1");
    document.getElementById("email").innerHTML=localStorage.getItem("txtValue2");
    document.getElementById("dln").innerHTML=localStorage.getItem("txtValue3");
    document.getElementById("phone").innerHTML=localStorage.getItem("txtValue4");
}