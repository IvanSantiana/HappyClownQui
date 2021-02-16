window.onload=function() {
    var registrarse=document.getElementById("btnregistro");
    registrarse.onclick=function () {
        var nombre=document.getElementById("fname").value;
        var apellido=document.getElementById("lname").value;
        var correo=document.getElementById("email").value;
        var telf=document.getElementById("phone").value;
        if (fname.value=="" || apellido.value=="" || correo.value=="" || telf.value=="") {
            alert("Por favor, ingrese la informacion requerida");
        } else {
            localStorage.setItem("fname",nombre);
            localStorage.setItem("lname",apellido);
            localStorage.setItem("email",correo);
            localStorage.setItem("phone",telf);
            event.preventDefault();
            location.href="confirmacion.html";
        }
    }

}