$(document).ready(function validateForm(){
	
	/* Escribe tú código aquí */
		var nombre = $("#name").val();
		var apellido = $("#lastname").val();
		var correo = $("#input-email").val();
		var password = $("input-password").val();

		if(!(/[A-Za-z\s]/.test(nombre))){
			alert("Ingrese su nombre");
		}
		if(!(/[A-Za-z\s]/.test(apellido))){
			alert("Ingrese su apellido");
		}
		if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(correo)) ) {
  			alert("Ingrese un correo válido");
		}
		if((password.length < 6) || (password == 123456) || (password == 098765)){
			alert("Ingrese una clave válida");
		}
	

});
	