console.log("Hello World!");

// fetch("shop.json")
//     .then(response => response.json())
//     .then(json => {

//         // let list = "";
//         let list = "<table>";
//         json.popItems.forEach(item => {
//             // list += `<li>${item.name} ${item.price} ${item.desc}</li>`
//             list += `<tr><td>${item.image}</td><td>${item.name}</td><td>${item.price}</td><td>${item.desc}</td></tr>`
//         });
//         document.querySelector(`ol`).innerHTML = list;
//         list += "</table>";
//     })

fetch("shop.json")

    .then(function(response) {
        return response.json();
    })

    .then(function(products) {
        let placeholder = document.querySelector("#data-output");
        let out = "";
        for(let product of products) {
            out += `
            <tr>
                <td> <img src='${product.image}'></td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.desc}</td>
            </tr>
            
            `;
        }

        placeholder.innerHTML = out;
    })
