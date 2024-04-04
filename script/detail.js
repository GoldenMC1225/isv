const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

// Fetch data from database & Edit content
var db = fetch('./database.json')
    .then(res => res.json())
    .then(data => {
        const item = data.products.find(item => item.id == id);
        console.log(item)
        if (item) {
            document.getElementById("pName").innerHTML = item.name;
            document.getElementById("pImg").src= item.img;
            document.getElementById("pPrice").innerHTML = `${item.price}.000 VND`;
        }

        // else if (item === undefined){
        //     window.location.href = "404.html";
        // }

        // const html = data.users.map(user => `
        //     <div>
        //         <h1>${user.name}</h1>
        //         <p>${user.email}</p>
        //     </div>
        // `).join('');
        // document.querySelector('#users').innerHTML = html;
        // const product = data.products.map(product => `
        //     <div>
        //         <h1>${product.name}</h1>
        //         <p>${product.price}</p>
        //     </div>
        // `).join('');
        // document.querySelector('#product').innerHTML = product;
        console.log(data);
    })
    .catch(error => console.error('Error:', error));

// End of Fetch data & Edit content

// Cart function

localStorage.setItem('cart', [])
var cartNum = localStorage.getItem('cart')

// End of Cart function