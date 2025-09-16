document.addEventListener('DOMContentLoaded', function() {
    // Definir las bebidas disponibles
    const bebidas = [
        { nombre: "Expresso", categoria: "Bebidas calientes", precio: "$5" },
        { nombre: "Capuchino", categoria: "Bebidas calientes", precio: "$4.23" },
        { nombre: "Moca", categoria: "Bebidas calientes", precio: "$14" },
        { nombre: "Iced Latte", categoria: "Bebidas frías", precio: "$6" },
        { nombre: "Frappe", categoria: "Bebidas frías", precio: "$15" },
        { nombre: "Cold Brew", categoria: "Bebidas frías", precio: "$10" },
        { nombre: "Pumpkin Spice", categoria: "Bebidas de otoño", precio: "$6" },
        { nombre: "Chai Latte", categoria: "Bebidas de otoño", precio: "$15" },
        { nombre: "Caramel Apple", categoria: "Bebidas de otoño", precio: "$10" },
        { nombre: "Latte de Lavanda", categoria: "Bebidas de verano", precio: "$6" },
        { nombre: "Shakerato", categoria: "Bebidas de verano", precio: "$8" },
        { nombre: "Affogato", categoria: "Bebidas de verano", precio: "$10" }
    ];

    // Elementos del DOM
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const searchResults = document.getElementById('searchResults');
    const resultsTitle = document.getElementById('resultsTitle');
    const resultsContainer = document.getElementById('resultsContainer');

    // Función para buscar bebidas
    function buscarBebidas() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        
        if (searchTerm === '') {
            searchResults.style.display = 'none';
            return;
        }

        // Filtrar bebidas
        const resultados = bebidas.filter(bebida => 
            bebida.nombre.toLowerCase().includes(searchTerm) || 
            bebida.categoria.toLowerCase().includes(searchTerm)
        );

        // Mostrar resultados
        mostrarResultados(resultados, searchTerm);
    }

    // Función para mostrar resultados
    function mostrarResultados(resultados, termino) {
        if (resultados.length === 0) {
            resultsTitle.textContent = `No se encontraron resultados para "${termino}"`;
            resultsContainer.innerHTML = `
                <div class="no-results">
                    <p>Intenta con otro término de búsqueda.</p>
                </div>
            `;
        } else {
            resultsTitle.textContent = `Resultados para "${termino}" (${resultados.length} encontrados)`;
            
            let html = '';
            resultados.forEach(bebida => {
                html += `
                    <div class="result-item">
                        <div>
                            <h5>${bebida.nombre}</h5>
                            <p>${bebida.categoria}</p>
                        </div>
                        <div class="price">${bebida.precio}</div>
                    </div>
                `;
            });
            
            resultsContainer.innerHTML = html;
        }
        
        searchResults.style.display = 'block';
        searchResults.scrollIntoView({ behavior: 'smooth' });
    }

    // Event Listeners
    searchButton.addEventListener('click', buscarBebidas);
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            buscarBebidas();
        }
    });
});
