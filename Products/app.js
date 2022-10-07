console.log("Hello World!");

fetch("shop.json")
    .then(response => response.json())
    .then(json => {

        // let list = "";
        let list = "<table>";
        json.popItems.forEach(item => {
            // list += `<li>${item.name} ${item.price} ${item.desc}</li>`
            list += `<tr><td>${item.name}</td><td>${item.price}</td><td>${item.desc}</td></tr>`
        });
        document.querySelector(`ol`).innerHTML = list;
        list += "</table>";
    })


