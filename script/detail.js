const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

console.log(urlParams)

var db = fetch('./database.json')
    .then(res => res.json())
    .then(data => {
        const item = data.products.find(item => item.id == id);
        console.log(item)
        if (item) {
            document.querySelector('#product').innerHTML = `
                <div>
                    <h1>${item.name}</h1>
                    <p>${item.price}</p>
                    <img src="${item.image}" alt="">
                </div>
            `;
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
    })
    .catch(error => console.error('Error:', error));
