let cart = JSON.parse(localStorage.getItem("cart")) || [];
let discount = 0;

function formatPrice(amount) {
    return "\u20A6" + amount.toLocaleString("en-NG", { minimumFractionDigits: 2 });
}

function calculateSubtotal() {
    return cart.reduce(function (total, item) {
        return total + (item.price * item.quantity);
    }, 0);
}

function calculateDeliveryFee(subtotal) {
    if (subtotal === 0) return 0;
    if (subtotal < 10000) return 1500;
    if (subtotal <= 25000) return 2500;
    return 3500;
}

function renderSummary() {
    // Always read the latest cart in case it changed on another tab/page
    cart = JSON.parse(localStorage.getItem("cart")) || [];

    let subtotal = calculateSubtotal();
    let deliveryFee = calculateDeliveryFee(subtotal);
    let total = subtotal + deliveryFee - discount;
    if (total < 0) total = 0;

    document.getElementById("summary-subtotal").textContent = formatPrice(subtotal);
    document.getElementById("summary-delivery").textContent = formatPrice(deliveryFee);
    document.getElementById("summary-discount").textContent = "-" + formatPrice(discount);
    document.getElementById("summary-total").textContent = formatPrice(total);

    let checkoutBtn = document.getElementById("checkout-btn");
    checkoutBtn.disabled = cart.length === 0;
}

let promoApplyBtn = document.getElementById("promo-apply-btn");
promoApplyBtn.addEventListener("click", function () {
    let code = document.getElementById("promo-input").value.trim().toUpperCase();

    if (code === "") {
        alert("Please enter a promo code.");
    } else if (code === "TASTE2000") {
        discount = 2000;
        alert("Promo code applied! \u20A62,000 off.");
    } else {
        discount = 0;
        alert("Invalid promo code.");
    }

    renderSummary();
});

let checkoutBtn = document.getElementById("checkout-btn");
checkoutBtn.addEventListener("click", function () {
    if (cart.length === 0) {
        alert("Your cart is empty. Add something from the menu first!");
        return;
    }

    alert("Order placed successfully! Thank you for choosing Taste Haven.");
    localStorage.removeItem("cart");
    window.location.href = "cart.html";
});

renderSummary();