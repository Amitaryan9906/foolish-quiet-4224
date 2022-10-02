

const sliderImg=["https://cdn.shopify.com/s/files/1/0153/8863/files/FOSS_HomepageBanner_Desktop_copy_2-100_1400x.jpg?v=1663696583","https://i.ibb.co/q9HJrSj/slider-img.jpg"];


const slideShow= (sliderImg)=>{
    let i=0;
    let img = document.createElement("img");
    img.src=sliderImg[i];
    document.getElementById("nj_slider-top").append(img);
    i++;

    setInterval(function(){
        if(i === 2){
            i = 0
        }
       


        img.src=sliderImg[i];
        document.getElementById("nj_slider-top").append(img);
        
       
        i++
    },5000)
    
}
slideShow(sliderImg);


// code for data fetcing;

const productFetch = async () =>{
    try{
        let res = await fetch('http://localhost:3000/products');

        let data = await res.json();
        // console.log(data)

        dataAppend(data)
        
           
        

    }catch(err){
        console.log(err)
    }
}

productFetch()


const dataAppend = (data) =>{
    let container = document.getElementById("nj_container");

    data.forEach((ele,i) =>{

    let card = document.createElement("div");
    card.setAttribute("class","nj_card");
    card.addEventListener("click", function(){
        
        catchProduct(data,i,ele.id);
        

    })

   
    let img = document.createElement("img");
    img.src=ele.url;

    let img_div = document.createElement("div");
    img_div.setAttribute("class","nj_imgdiv")
    img_div.append(img)

    let pro_name = document.createElement("h3");
    pro_name.innerText = ele.name;

    let name_div = document.createElement("div");
    name_div.append(pro_name)

    let discount = document.createElement("p");
    discount.innerText = ele.discount

    card.append(img_div,name_div,discount);
    container.append(card)


    })

    document.getElementById("wired_ear").addEventListener("click", function(){
        wired_ear(data)
    })

    document.getElementById("wired_hed").addEventListener("click", function(){
        wired_headphone(data)
    })

    document.getElementById("amp").addEventListener("click", function(){
        amps_dacs(data)
    })

    document.getElementById("wirless").addEventListener("click", function(){
        true_wirless(data)
    })

    document.getElementById("wirless_hed").addEventListener("click", function(){
        wirless_headphone(data)
    })
}

const catchProduct = (data,i,id) =>{
    window.location.href="./product.html"

let pro = data.filter((ele,i) =>{
    return i == id
})

let obj={}
pro.forEach((ele) =>{
    obj = {
        Name:ele.name,
        Gif:ele.Gif,
        Discount:ele.discount,
        Rating:ele.rating,
        Proimg:ele.ProImg,
        MRP:ele.MRP,
        SellingPrice:ele.SellingPrice,
        OffierPrice: 44990,
    }
})
localStorage.setItem("Product",JSON.stringify(obj))

let Data = JSON.parse(localStorage.getItem("Product"));
let img=Data.Proimg[0]
localStorage.setItem("ImgData",JSON.stringify(img))


}


// const 

// document.getElementById("wired_ear").addEventListener("click",function(){
//     wired_ear()
// })

const wired_ear= (data) =>{
    
    let product=data.filter((ele) => {
        return ele.type === "Wired Earphone"
    })
displaydata(product)
}

const wired_headphone = (data) =>{


    let product = data.filter((ele) =>{
        return ele.type === "Wired Headphone"
    })
    displaydata(product)
}

const amps_dacs = (data) =>{


        let product = data.filter((ele) =>{
            return ele.type === "AMP and DACS";
        })
        displaydata(product)
}

const true_wirless = (data) =>{
    let product = data.filter((ele) =>{
        return ele.type === "True Wirless"
    })
    displaydata(product)
}

const wirless_headphone = (data) =>{
    let product = data.filter((ele) =>{
        return ele.type === "Wirless headphone"
    })
    displaydata(product)
 
}


function displaydata(data){
    let nj_card = document.getElementById("nj_productCard");
    nj_card.innerHTML = null;

    data.forEach((ele) =>{
        let card = document.createElement("div");

        let img = document.createElement("img");

        img.src = ele.ProImg[1];

        let img_div = document.createElement("div");
        img_div.append(img)

        let name = document.createElement("h4") ;
        name.innerText = ele.name

        let mrp = document.createElement("p");
        mrp.setAttribute("class", "nj_mrp")
        mrp.innerText = `MRP:₹ ${ele.MRP}`;

        let selling_price = document.createElement("p");
        selling_price.setAttribute("class", "nj_mrp")
        selling_price.innerText = `Selling Price:₹ ${ele.SellingPrice}`

        let sale_price = document.createElement("p");
        sale_price.innerText = 'Sale Price:₹'  

        let price_span = document.createElement("span");
        price_span.innerText = `${ele.OfferPrice}`;
        sale_price.append(price_span)
        price_span.style.color = "blue"
        price_span.style.fontSize = "20px";

        let icones = document.createElement("img");
        icones.src = "https://i.ibb.co/ZVwk75c/icones.jpg";


        card.append(img_div,name,mrp,selling_price,sale_price,icones);
        nj_card.append(card)
    })

}


