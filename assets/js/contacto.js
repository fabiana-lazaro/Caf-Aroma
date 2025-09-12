document.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector(".contact-form");
  let btn = document.querySelector(".contact-btn");

  // Crear nuevo contenedor de feedback
  feedback = document.createElement("div");
  feedback.className = "feedback";
  form.appendChild(feedback);

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

    // Resetear errores previos
    feedback.className = "feedback";
    feedback.innerHTML = "";
    [name, email, message].forEach((input) =>
      input.classList.remove("input-error")
    );

    // Resetear error de inputs
    [name, email, message].forEach((input) =>
      input.classList.remove("input-error")
    );

    // Validaciones
    let errors = [];

    if (nameValue === "") {
      errors.push("El nombre es obligatorio.");
      name.classList.add("input-error");
    }
    if (emailValue === "") {
      errors.push("El email es obligatorio.");
      email.classList.add("input-error");
    } else if (!emailPattern.test(emailValue)) {
      errors.push("Por favor ingresa un email válido.");
      email.classList.add("input-error");
    }
    if (messageValue === "") {
      errors.push("El mensaje es obligatorio.");
      message.classList.add("input-error");
    }

    //Mostrar errores si los hay
    if (errors.length > 0) {
      feedback.classList.add("error");
      feedback.innerHTML = errors.join("<br>");
      return;
    }

    //Simulación de envío
    btn.disabled = true;
    btn.innerText = "Enviando...";

    setTimeout(function () {
      feedback.classList.remove("error");
      feedback.classList.add("success");
      feedback.innerText = "¡Mensaje enviado!";

      form.reset();
      btn.disabled = false;
      btn.innerText = "Enviar";

      [name, email, message].forEach((input) =>
        input.classList.remove("input-error")
      );
    }, 1500);
  });
});
