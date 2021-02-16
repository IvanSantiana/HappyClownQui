    var nom=localStorage.getItem("fname");
    var apell=localStorage.getItem("lname");
    var empre=localStorage.getItem("email");
    var dir=localStorage.getItem("phone");
window.onload = function(){
    document.getElementById("rnombre").append(nom);
    document.getElementById("rapellido").append(apell);
    document.getElementById("rmail").append(empre);
    document.getElementById("rtlf").append(dir);
	var envia = document.getElementById("btncontinuar");
	envia.onclick = function(){
		location.href = "index.html";
	}
}