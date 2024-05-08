const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const pQuantity = document.getElementById("pQuantity");
const pSize = document.getElementById("pSize");

// Fetch data from database & Edit content
var db = fetch('./database.json')
    .then(res => res.json())
    .then(data => {
        const item = data.products.find(item => item.id == id);
        // console.log(item) // TESTING PURPOSES
        if (item) {
            document.getElementById("pName").innerHTML = item.name;
            document.getElementById("pImg").src = item.img;
            document.getElementById("pPrice").innerHTML = `&dollar;${item.price}`;

            // RELATED PRODUCTS
            for (let i=0; i<4; i++) {
                let id = Math.floor(Math.random() * data.products.length);
                const relatedProducts = document.getElementById("relatedProducts");
                const related = document.createElement("a");
                related.classList.add("product");
                related.href = `detail.html?id=${data.products[id].id}`;
                related.innerHTML = 
                `
                <img src="${data.products[id].img}">
                <h6>${data.products[id].name}</h6>
                <p>&dollar;${data.products[id].price}</p>
                `
                relatedProducts.appendChild(related);
            }
        }

        else if (item === undefined){
            window.location.href = "404.html";
        }
    })
    .catch(error => console.error('Error:', error));

// End of Fetch data & Edit content

// Cart function

function addToCart(){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let itemInCart = cart.find(item => item.id === id);
    let size = pSize.value == "select" ? "M" : pSize.value;
    if (itemInCart) {
        itemInCart.quantity += parseInt(pQuantity.value);
    } else {
        cart.push({id: id, quantity: parseInt(pQuantity.value), size: size});
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}

// End of Cart function

