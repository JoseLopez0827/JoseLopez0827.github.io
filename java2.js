let cart= [];
 let total =0;

 function toggleCart()  {
    const createElement = document.getElementById('cart')
    createElement.style.display = cartElement.style.display === 'flex'? 'none': 'flex'; 

 } 


 function addToCart(produc,price) {
cart.push( { product,price });
total += price;
updateCart ();


}

function updateCart() {
const cartItems = document.getElementById('cart-items');
const totalELment = document.getElementById ('total');


cartItems.innerHTML = '';
cart.forEach(item =>{
   const li =document.createElement('li');
    li.textContent = `${item.ptoduct} - $${item.price.topFixed(2)}`;
    cartItems.appendChild(li);
});

totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

function checkout() {
if(cart.length === 0){
    alert(`el carrito esta vacio.`);
    return;
}

alert(`Gracias por tu compra. !Huele bicho!. Total pagar: $${total.toFixed(2)}`);
cart = []
total = 0;
updateCart();

}

