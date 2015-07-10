window.addEventListener("message", function(e) {
  var confirmacion = document.getElementsByTagName("small")[0],
      origenRemoto = e.origin;

  console.log(e);

  if(origenRemoto ==  "http://127.0.0.1:4444") {
    confirmacion.innerHTML = "Confirmación el iframe con origen " + origenRemoto +
    " ha recibido el mensaje que le hemos enviado y lo ha notificado";
  }
}, false);

window.onload = function() {
  var iframe = document.getElementById("remoto"),
      textarea = document.getElementById("mensaje");
      button = document.getElementsByTagName("button")[0];

  button.onclick = function( e ) {
    e.preventDefault();
    console.log(textarea.value);
    iframe.contentWindow.postMessage(textarea.value, "http://127.0.0.1:4444/remoto.html")
  };

};
