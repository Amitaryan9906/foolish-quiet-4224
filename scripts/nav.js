import { navbar } from "../components/navbar.js";

let nav_div = document.getElementById("navbarRP");

nav_div.innerHTML = navbar()


function openNav() {
    document.getElementById("mySidenav").style.width = "550px";
    document.querySelector("body").style.backgroundColor = "#b3b3b3"

}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.querySelector("body").style.backgroundColor = "";
}






let arr = [{
        id: 0,
        name: "V-MODA Crossfade 2 Wireless",
        price: "₹ 1765",
        discount: "Get flat 30.00% off",
        url: "https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-iFi-Audio-ZEN-Air-DAC-250-250.jpg?v=1663240396"
    },

    {
        id: 1,
        name: "LYPERTEK PurePlay Z3",
        price: "₹ 4444",
        discount: "Get flat 30.00% off",
        url: "https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Lypertek-Pureplay-Z3-250-250.jpg?v=1663240397"
    },

    {
        id: 2,
        name: "Shanling UA3",
        price: "₹ 3444",
        discount: "Get flat 27.28% off",
        url: "https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Shanling-UA3-250-250.jpg?v=1663240701"
    },

    {
        id: 3,
        name: "Astell&Kern AK XB10",
        price: "₹ 5334",
        discount: "Get flat 27.28% off",
        url: "https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Astell_Kern-XB10-250-250.jpg?v=1663240157"
    },

    {
        id: 4,
        name: "V-MODA Crossfade 2 Wireless",
        price: "₹ 8974",
        discount: "Get flat 26.68% off",
        url: "https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-V-Moda-Crossfade-Codex-Edition-250-250.jpg?v=1663240700"
    },

    {
        id: 5,
        name: "STAX - SRS-3100",
        price: "₹ 9866",
        discount: "Get Flat 47.83% Off",
        url: "https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-STAX-SRS-3100-250-250.jpg?v=1663240701"
    },

    {
        id: 6,
        name: "FINAL - A3000",
        price: "₹ 4876",
        discount: "Get Flat 46.16% Off",
        url: "https://cdn.shopify.com/s/files/1/0153/8863/files/Untitled-Headphone-Zone-Final-A3000-250-250.jpg?v=1663240170"
    },

    {
        id: 7,
        name: "CCA - LYRA",
        price: "₹ 1446",
        discount: "Get Flat 36.01% Off",
        url: "https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-KZ-Lyra-250-250.jpg?v=1663240157"
    },

    {
        id: 8,
        name: "Focal Stellia",
        price: "₹ 3474",
        discount: "Get flat 33.34% off",
        url: "https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Focal-Stellia-250-250.jpg?v=1663240157"
    },

    {
        id: 9,
        name: "KZ ZEX",
        price: "₹ 1944",
        discount: "Get flat 32.01% off",
        url: "https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-KZ-ZEX-250-250.jpg?v=1663240397"
    },

    {
        id: 10,
        name: "iFi Audio ZEN Air DAC",
        discount: "Get flat 30.00% off",
        url: "https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-iFi-Audio-ZEN-Air-DAC-250-250.jpg?v=1663240396"
    },

    {
        id: 11,
        name: "LYPERTEK PurePlay Z3",
        discount: "Get flat 30.00% off",
        url: "https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Lypertek-Pureplay-Z3-250-250.jpg?v=1663240397"
    },

    {
        id: 12,
        name: "Shanling UA3",
        discount: "Get flat 27.28% off",
        url: "https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Shanling-UA3-250-250.jpg?v=1663240701"
    },

    {
        id: 13,
        name: "Astell&Kern AK XB10",
        discount: "Get flat 27.28% off",
        url: "https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Astell_Kern-XB10-250-250.jpg?v=1663240157"
    },

    {
        id: 14,
        name: "V-MODA Crossfade 2 Wireless",
        discount: "Get flat 26.68% off",
        url: "https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-V-Moda-Crossfade-Codex-Edition-250-250.jpg?v=1663240700"
    },

    {
        id: 15,
        name: "Cayin RU6",
        discount: "Get flat 24.04% off",
        url: "https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Cayin-RU6-250-250.jpg?v=1663240865"
    },

    {
        id: 16,
        name: "Moondrop Aria",
        discount: "Get flat 22.32% off",
        url: "https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Moondrop-Aria-250-250.jpg?v=1663240397"
    },

    {
        id: 17,
        name: "HiFiMAN Sundara (2022)",
        discount: "Get flat 16.67% off",
        url: "https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-HiFiMAN-Sundara-250-250.jpg?v=1663240397"
    },

    {
        id: 18,
        name: "Meze 99 Classics",
        discount: "Get flat 16.13% off",
        url: "https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Meze-99-Classics-250-250.jpg?v=1663240397"
    },

    {
        id: 19,
        name: "HiFiMAN Edition XS",
        discount: "Get flat 12.50% off",
        url: "https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-HiFiMAN-Edition-XS-250-250.jpg?v=1663240157"
    },

    {
        id: 20,
        name: "Chord Mojo 2",
        discount: "Get Mojo 2 Premium Leather Case free",
        url: "https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Chord-Mojo2-250-250.jpg?v=1663240865"
    },

    {
        id: 21,
        name: "Astell&Kern AK70 MKⅡ",
        discount: "Get PU Case free",
        url: "https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Astell_Kern-AK70-MKII-250-250.jpg?v=1663240864"
    },

    {
        id: 22,
        name: "Shanling UA3",
        discount: "Get flat 27.28% off",
        url: "https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Shanling-UA3-250-250.jpg?v=1663240701"
    },

    {
        id: 23,
        name: "Astell&Kern AK XB10",
        discount: "Get flat 27.28% off",
        url: "https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Astell_Kern-XB10-250-250.jpg?v=1663240157"
    },

    {
        id: 24,
        name: "V-MODA Crossfade 2 Wireless",
        discount: "Get flat 26.68% off",
        url: "https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-V-Moda-Crossfade-Codex-Edition-250-250.jpg?v=1663240700"
    },

    {
        id: 25,
        name: "Cayin RU6",
        discount: "Get flat 24.04% off",
        url: "https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Cayin-RU6-250-250.jpg?v=1663240865"
    }

];






function mkFunction() {

    let mk_container = document.getElementById("mkData")


    for (let i = 0; i < arr.length; i++) {
        let box = document.createElement("div");
        box.setAttribute("class", "box")

        let a = document.createElement("a")
        a.setAttribute("href", "url");
        a.href = "#"
        let box2 = document.createElement("div")

        let name = document.createElement("h3");
        name.innerText = arr[i].name;

        let discount = document.createElement("h4");
        discount.innerText = arr[i].discount;

        let price = document.createElement("h3");
        price.innerText = arr[i].price;
        price.style.color = "red"

        let image = document.createElement("img");
        image.setAttribute("src", "url")
        image.src = arr[i].url;
        a.append(image)
        box.append(a)
        box2.append(name, price, discount)
        mk_container.append(box, box2)

    }

}