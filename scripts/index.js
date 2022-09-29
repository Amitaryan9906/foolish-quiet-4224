

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

        dataAppend(data)

    }catch(err){
        console.log(err)
    }
}

productFetch()


const dataAppend = (data) =>{
    let container = document.getElementById("nj_container");

    data.forEach(ele =>{

    let card = document.createElement("div");
    card.setAttribute("class","nj_card");

   
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