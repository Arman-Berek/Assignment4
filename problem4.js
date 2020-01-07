function myFunction() {
    var passw = document.getElementById("password");
    if(passw.value == 12345678) {
        var headd = document.getElementById("headd");
        headd.innerText = "YAASS!! Right Password, Good Job :)"
    } 
    else {
        alert("Wrong Password!")
    }
    
}