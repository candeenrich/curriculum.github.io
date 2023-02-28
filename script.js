function mostrar() {
    var x = document.getElementById('contacto');
    if (x.style.visibility === 'hidden') {
      x.style.visibility = 'visible';
    } else {
      x.style.visibility = 'hidden';
    }
}

function copiar() {
  let mail=document.getElementById(`mail`);
  let button=document.getElementById(`copymail`);
  navigator.clipboard.writeText(mail.textContent);
  button.textContent = `Mail copiado`;
}

function copiarDireccion() {
  let direccion=document.getElementById(`direccion`);
  let button=document.getElementById(`copydirec`);
  navigator.clipboard.writeText(direccion.textContent);
  button.textContent = `Dirección copiada`;
}
    
function copiarNum() {
  let num=document.getElementById(`num`);
  let button=document.getElementById(`copynum`);
  navigator.clipboard.writeText(num.textContent);
  button.textContent = `Número copiado`;
}