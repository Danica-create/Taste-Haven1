function addToCart(name, price, image, description, button){
    let cart = JSON.parse(localStorage.getItem("cart")) || []

    let existingItem = cart.find(item => item.name === name);

    if(existingItem){
        existingItem.quantity++;
    } else{
        cart.push({

            name:name,
            price:price,
            image:image,
            description: description,
            quantity:1

        });
    }

    
    button.textContent = "In Cart"; 

    localStorage.setItem("cart", JSON.stringify(cart));

    
}