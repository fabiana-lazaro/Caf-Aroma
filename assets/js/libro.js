//pagina cafe aroma//

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".libro-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const dni = form.dni.value.trim();
    const nombre = form.nombre.value.trim();
    const correo = form.correo.value.trim();
    const tipo = form.tipo.value;
    const descripcion = form.descripcion.value.trim();
    const accion = form.accion.value.trim();

    if (!/^\d{8}$/.test(dni)) {
      alert("El DNI debe tener exactamente 8 dígitos.");
      return;
    }

    if (!nombre || !tipo || !descripcion || !accion) {
      alert("Por favor completa todos los campos obligatorios.");
      return;
    }

    console.log("Formulario enviado con éxito ✅");
    console.log({ dni, nombre, correo, tipo, descripcion, accion });

    alert("¡Tu reclamo ha sido enviado correctamente!");
    form.reset();
  });

});
