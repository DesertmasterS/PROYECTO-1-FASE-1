
function validarContra(){
    document.getElementById("mensaje").style.display = "block";
      
}


 pass.onfocus = function validarcorreo(){
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let correo = document.getElementById("correoP").value;
}
