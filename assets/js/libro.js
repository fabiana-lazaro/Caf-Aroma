//nuevos cambios//
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".libro-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const dni = document.getElementById("dni").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const tipo = document.getElementById("tipo").value;
    const descripcion = document.getElementById("descripcion").value.trim();
    const accion = document.getElementById("accion").value.trim();

    // Validar DNI (8 dígitos numéricos)
    if (!/^\d{8}$/.test(dni)) {
      alert("El DNI debe tener exactamente 8 números.");
      document.getElementById("dni").focus();
      return;
    }

    // Validar Teléfono (9 dígitos numéricos)
    if (!/^\d{9}$/.test(telefono)) {
      alert("El teléfono debe tener 9 números.");
      document.getElementById("telefono").focus();
      return;
    }

    // Validar nombre
    if (nombre.length < 3) {
      alert("El nombre debe tener al menos 3 caracteres.");
      document.getElementById("nombre").focus();
      return;
    }

    // Validar correo con regex básico
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
      alert("Ingrese un correo válido.");
      document.getElementById("correo").focus();
      return;
    }

    // Validar campos obligatorios
    if (!tipo || !descripcion || !accion) {
      alert("Por favor completa todos los campos obligatorios.");
      return;
    }

    alert("¡Tu reclamo ha sido enviado correctamente! ✅");
    form.reset();
  });
});
