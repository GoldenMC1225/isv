let cart = JSON.parse(localStorage.getItem("cart")) || [];

const db = fetch('./database.json')
    .then(res => res.json())
    .then(data => {
        if (cart.length == 0) {
            console.log("Cart is empty"); // TESTING PURPOSES
            document.getElementById("orderSubtotal").innerText = `$0.00`;
            document.getElementById("totalPrice").innerText = `$10.00`;
        } else {
            let total = 0;
            cart.forEach((item, index) => {
                const cartProducts = document.getElementById("cartProducts");
                const div = document.createElement("div");
                div.classList.add("divTableRow")
                div.innerHTML = 
                `
                    <div class="divTableCell product">&nbsp;
                        <img src="img/product-${item.id}.jpg" id="pImg" style="width: 100px; height: 100px; object-fit: cover;">
                        <div class="product-details">
                            <div class="product-name">
                                <h6>${data.products[index].name}</h6>
                                <a onclick="removeFromCart(${index})" style="cursor: pointer">Remove</a>
                            </div>
                        </div>
                    </div>
                    <div class="divTableCell size">&nbsp;${item.size}</div>
                    <div class="divTableCell price">&nbsp;$${data.products[index].price}</div>
                    <div class="divTableCell quantity">&nbsp;${item.quantity}</div>
                    <div class="divTableCell total">&nbsp;$${data.products[index].price*item.quantity}</div>
                `
                cartProducts.appendChild(div);
                total += data.products[index].price * item.quantity;
            });
            document.getElementById("orderSubtotal").innerText = `$${total.toFixed(2)}`;
            document.getElementById("totalPrice").innerText = `$${(total+=10).toFixed(2)}`;
        }
    });

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}