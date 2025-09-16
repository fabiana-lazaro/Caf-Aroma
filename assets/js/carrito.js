console.log("Carrito cargado");
document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todos los inputs de cantidad y las celdas de precio total
  const quantityInputs = document.querySelectorAll(
    ".product-quantity .input-text.qty"
  );
  const totalPriceCells = document.querySelectorAll(
    ".product-subtotal .total-price"
  );
  const unitPriceSpans = document.querySelectorAll(
    ".product-price .unit-price"
  ); // Selecciona el precio unitario

  // Función para calcular y actualizar el total
  function updateTotals() {
    quantityInputs.forEach((input, index) => {
      const quantity = parseInt(input.value);
      const unitPriceText = unitPriceSpans[index].textContent; // Obtiene el texto del precio unitario
      const unitPrice = parseFloat(unitPriceText.replace(/[^0-9.-]+/g, "")); // Convierte a número, eliminando símbolos

      const totalPrice = quantity * unitPrice;

      // Formatea el total para mostrarlo con dos decimales y el símbolo de moneda
      totalPriceCells[index].textContent = `$${totalPrice.toFixed(2)}`;
    });
  }

  // Añade un escuchador a cada input de cantidad
  quantityInputs.forEach((input) => {
    input.addEventListener("input", updateTotals); // 'input' se "dispara" cada vez que el valor cambia
  });

  // Llama a la función
  updateTotals();
});
