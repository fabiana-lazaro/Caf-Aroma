document.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector(".contact-form");
  let btn = document.querySelector(".contact-btn");

  // Función para mostrar error
  function showError(input, message) {
    let div = document.createElement("div");
    div.className = "feedback error";
    div.innerText = message;
    input.classList.add("input-error");
    input.parentNode.appendChild(div);
  }

  // Quitar error automáticamente al escribir
  function clearOnInput(input) {
    input.addEventListener("input", () => {
      input.classList.remove("input-error");
      let errorDiv = input.parentNode.querySelector(".feedback.error");
      if (errorDiv) errorDiv.remove();
    });
  }

  let name = document.getElementById("client-name");
  let email = document.getElementById("client-email");
  let message = document.getElementById("client-message");

  [name, email, message].forEach(clearOnInput);

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Valores de los inputs
    let nameValue = name.value.trim();
    let emailValue = email.value.trim();
    let messageValue = message.value.trim();

    // Patrón para email
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Eliminar mensajes previos
    form.querySelectorAll(".feedback").forEach((f) => f.remove());
    [name, email, message].forEach((input) =>
      input.classList.remove("input-error")
    );

    // Validaciones
    if (!nameValue) showError(name, "El nombre es obligatorio.");
    if (!emailValue) {
      showError(email, "El email es obligatorio.");
    } else if (!emailPattern.test(emailValue)) {
      showError(email, "Por favor ingresa un email válido.");
    }
    if (!messageValue) showError(message, "El mensaje es obligatorio.");

    // Si hay errores, detener envío
    if (form.querySelectorAll(".feedback.error").length > 0) return;

    // Simulación de envío
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
