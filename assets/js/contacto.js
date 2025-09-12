document.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector(".contact-form");
  let btn = document.querySelector(".contact-btn");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Obtener valores de los inputs
    let name = document.getElementById("client-name");
    let email = document.getElementById("client-email");
    let message = document.getElementById("client-message");

    let nameValue = name.value.trim();
    let emailValue = email.value.trim();
    let messageValue = message.value.trim();

    // Expresión para validar el email
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Eliminar feedback previo
    form.querySelectorAll(".feedback").forEach((f) => f.remove());
    [name, email, message].forEach((input) =>
      input.classList.remove("input-error")
    );

    // Validaciones
    if (!nameValue) {
      let div = document.createElement("div");
      div.className = "feedback error";
      div.innerText = "El nombre es obligatorio.";
      name.classList.add("input-error");
      name.parentNode.appendChild(div);
    }

    if (!emailValue) {
      let div = document.createElement("div");
      div.className = "feedback error";
      div.innerText = "El email es obligatorio.";
      email.classList.add("input-error");
      email.parentNode.appendChild(div);
    } else if (!emailPattern.test(emailValue)) {
      let div = document.createElement("div");
      div.className = "feedback error";
      div.innerText = "Por favor ingresa un email válido.";
      email.classList.add("input-error");
      email.parentNode.appendChild(div);
    }

    if (!messageValue) {
      let div = document.createElement("div");
      div.className = "feedback error";
      div.innerText = "El mensaje es obligatorio.";
      message.classList.add("input-error");
      message.parentNode.appendChild(div);
    }

    //Mostrar errores si los hay
    if (form.querySelectorAll(".feedback.error").length > 0) return;

    //Simulación de envío
    btn.disabled = true;
    btn.innerText = "Enviando...";

    setTimeout(function () {
      let div = document.createElement("div");
      div.className = "feedback success";
      div.innerText = "¡Mensaje enviado!";
      form.appendChild(div);

      form.reset();
      btn.disabled = false;
      btn.innerText = "Enviar";
    }, 1500);
  });
});
