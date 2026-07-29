// Load cart from localStorage - starts empty if nothing has been added yet
let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartList = document.getElementById("cart-list");
let cartTotalEl = document.getElementById("cart-total");

function formatPrice(amount) {
    return amount.toLocaleString("en-NG", { minimumFractionDigits: 2 });
}

function renderCart() {
    cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartList.innerHTML = "";

    if (cart.length === 0) {
        cartList.innerHTML = '<p class="empty-cart-msg">Your cart is empty. Add something from the menu page!</p>';
        cartTotalEl.textContent = "\u20A60.00";
        return;
    }

    let total = 0;

    cart.forEach(function (item, index) {
        let subtotal = item.price * item.quantity;
        total += subtotal;

         // Funmi's  product page doesn't send cuisine/description yet, so fall back to blank
        let cuisineType = item.cuisineType || "";
        let cuisineBadge = item.cuisine
            ? `<span class="cuisine-badge cuisine-badge--${cuisineType}">${item.cuisine}</span>`
            : "";
        let description = item.description
            ? `<p class="cart-item__description">${item.description}</p>`
            : "";

        cartList.innerHTML += `
        <div class="cart-item">
          <div class="cart-item__figure">
            <img src="${item.image}" alt="${item.name}">
          </div>

          <div class="cart-item__details">
            <h3>${item.name}</h3>
            ${cuisineBadge}
            ${description}
          </div>

          <span class="cart-item__price">${formatPrice(item.price)}</span>

          <div class="quantity-stepper">
            <button type="button" class="qty-btn qty-btn--decrease" onclick="decrease(${index})">-</button>
            <span class="qty-value">${item.quantity}</span>
            <button type="button" class="qty-btn qty-btn--increase" onclick="increase(${index})">+</button>
          </div>

          <span class="cart-item__total"><span class="strike">&#8358;${formatPrice(subtotal)}</span></span>

          <button type="button" class="delete-btn" onclick="removeItem(${index})">&#128465;</button>
        </div>`;
    });

    cartTotalEl.textContent = "\u20A6" + formatPrice(total);
}

function increase(index) {
    cart[index].quantity++;
    saveCart();
}

function decrease(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    }
    saveCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    saveCart();
}

/*
function addToCart(name, price, image) {
    cart.push({
        name: name,
        price: price,
        quantity: 1,
        image: image,
        cuisine: "Nigerian Cuisine",
        cuisineType: "nigerian",
        description: ""
    });
    saveCart();
}
*/

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

renderCart();







