

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
        let res = await fetch(' http://localhost:3000/products');

        let data = await res.json();
        console.log(data)

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
        catchProduct(data,i,ele.id)

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
// addToLs()

}

//  For Update Image
// const addToLs=()=>{
//     localStorage.setItem("ImgData",JSON.stringify(ele.ProImg[1]))
//     console.log("Added")
// }