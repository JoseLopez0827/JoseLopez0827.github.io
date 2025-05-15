let currentSlide = 0;

function moveSlide(direction) {
    const slidesContainer = document.querySelector('.carousel-images');
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;

    if (!slidesContainer || totalSlides === 0) return;

    // Actualiza el índice de la imagen actual
    currentSlide += direction;

    // Si el índice es menor que 0, vuelve al último slide
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    // Si el índice es mayor o igual al total de slides, vuelve al primer slide
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    // Ajusta el desplazamiento correctamente
    slidesContainer.style.transform = `translateX(-${currentSlide * 2}%)`;
    slidesContainer.style.transition = "transform 0.5s ease-in-out";
}

// Mover automáticamente cada 3 segundos
setInterval(() => {
    moveSlide(1);  // 1 para avanzar
}, 3000);




function toggleCart() {
    let cart = document.getElementById("cart");
    cart.style.display = (cart.style.display === "none" || cart.style.display === "") ? "block" : "none";
}
let products = [
    { name: "Anillo de Oro", price: 100 },
    { name: "Collar de Plata", price: 80 },
    { name: "Pulsera de Diamantes", price: 200 }
];

function renderProducts() {
    let container = document.getElementById("products");
    container.innerHTML = "";
    
    products.forEach((product, index) => {
        let div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
            <span>${product.name} - $<span id="price-${index}">${product.price}</span></span>
            <input type="number" id="input-${index}" placeholder="Nuevo precio">
            <button onclick="updatePrice(${index})">Actualizar Precio</button>
        `;
        container.appendChild(div);
    });
}

function updatePrice(index) {
    let newPrice = document.getElementById(`input-${index}`).value;
    if (newPrice && newPrice > 0) {
        products[index].price = parseFloat(newPrice);
        document.getElementById(`price-${index}`).innerText = newPrice;
    } else {
        alert("Ingrese un precio válido.");
    }
}

renderProducts();
// Función para mostrar la información del producto al hacer clic
function mostrarInformacion(nombre, descripcion, precio) {
    document.getElementById('productoNombre').textContent = nombre;
    document.getElementById('productoDescripcion').textContent = descripcion;
    document.getElementById('productoPrecio').textContent = precio;
    document.getElementById('infoProducto').style.display = 'block'; // Mostrar la sección de información
}
// Ocultar la información cuando se hace clic sobre la ventana de información
document.getElementById('infoProducto').addEventListener('click', function () {
    this.style.display = 'none'; // Ocultar la ventana de información
});







document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("search-input");
    if (!input) return;

    input.addEventListener("input", function () {
        const query = this.value.toLowerCase();
        const productos = document.querySelectorAll(".espacio");

        productos.forEach(function (prod) {
            const titulo = prod.querySelector(".titulo").textContent.toLowerCase();
            prod.style.display = titulo.includes(query) ? "block" : "none";
        });
    });
});