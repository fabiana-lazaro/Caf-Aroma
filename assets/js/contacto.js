document.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector(".contact-form");
  let btn = document.querySelector(".contact-btn");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Obtener valores de los inputs
    let name = document.getElementById("client-name").value.trim();
    let email = document.getElementById("client-email").value.trim();
    let message = document.getElementById("client-message").value.trim();

    // Eliminar feedback previo si existe
    let feedback = document.querySelector(".feedback");
    if (feedback) feedback.remove();

    // Crear nuevo contenedor de feedback
    feedback = document.createElement("div");
    feedback.className = "feedback";
    form.appendChild(feedback);

    // Validaciones
    if (name === "" || email === "" || message === "") {
      feedback.classList.add("error");
      feedback.innerText = "Por favor completa todos los campos.";
      return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      feedback.classList.add("error");
      feedback.innerText = "Por favor ingresa un email válido";
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
    }, 1500);
  });
});
