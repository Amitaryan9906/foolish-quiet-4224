
// Import navbar from components


import { navbar } from "../components/navbar.js";

let nav_div = document.getElementById("navigationBar");

nav_div.innerHTML = navbar()

import { footer } from "../components/footer.js";

let foot_div = document.getElementById("footer");

foot_div.innerHTML = footer();



// Get data from localStorage
// Append data in Product Page
let body = document.getElementById('bodyP')

let pData=JSON.parse(localStorage.getItem('Product'));
// console.log(pData);

let products = document.createElement('div')
  products.id='products'

//  For Product Images


let ProImgData = document.createElement('div');
ProImgData.id='proImgData'

  const ProImg =(data)=>{
    // localStorage.setItem('ImgData',JSON.stringify(pData.Proimg[4]))
    let box= document.createElement('div');
    box.className='Pro_img';

    // localStorage.setItem('ImgData',JSON.stringify(data.Proimg[1]));

let moreImg= document.createElement('div')
moreImg.className='moreImg'
// For accessing Images
for(let i=0; i<data.Proimg.length; i++){
let icons = document.createElement('img');
icons.src=data.Proimg[i];
moreImg.append(icons)
// console.log(data.Proimg[i]);
icons.addEventListener('click',()=>{
  localStorage.setItem('ImgData',JSON.stringify(data.Proimg[i]));
  console.log("Hello")
  window.location.href="product.html"
})
}

// let imgData=JSON.parse(localStorage.getItem('ImgData')) 

let imgData=JSON.parse(localStorage.getItem('ImgData'))
console.log(imgData)

let img = document.createElement('img');
img.src=imgData;
ProImgData.append(img,moreImg)
  }
  ProImg(pData)

const appendProduct =(data)=>{
    let box=document.createElement('div');
    box.id="Aproduct"


    let product_name = document.createElement('h2')
    product_name.innerHTML=data.Name;
    product_name.className="product-name"

    let rating = document.createElement('a')
    let ratingSpan = document.createElement('span')
    ratingSpan.innerHTML =data.Rating
    rating.id="rating"
    let ratingImg = document.createElement('img')
    ratingImg.src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Rating_stars_4.5.svg/1024px-Rating_stars_4.5.svg.png"
   rating.append(ratingImg,ratingSpan)

    let mrp= document.createElement('a')
    let MRP = document.createElement('p');
    MRP.innerHTML ='MRP: ₹';
    let mrpSpan= document.createElement('span')
    mrpSpan.innerHTML =data.MRP;
    mrp.id='mrp'
    mrp.append(MRP,mrpSpan);

    let sPrice = document.createElement('a')
    // sPrice.innerHTML=data.SellingPrice;
    let sPriceP = document.createElement('p')
      sPriceP.innerHTML='Selling Price: ₹'
      let sPricespan = document.createElement('span');
      sPricespan.innerText=data.SellingPrice;
      sPrice.id='sPrice'
sPrice.append(sPriceP,sPricespan);

    let offer_price = document.createElement('a')
    // offer_price.innerHTML=data.OffierPrice;
    let offerP= document.createElement('p');
    offerP.innerHTML='Festival of Sound Sale Price: ';
    
    let offerspan = document.createElement('span');
    offerspan.innerHTML=` ₹ ${data.OffierPrice}`;
    offerspan.id='offierPrice';

offer_price.append(offerP, offerspan);

  let bankOffer = document.createElement('p');
  bankOffer.innerHTML='Or ₹ 15,000 (Simpl/Bajaj/Zest/Cards) '

    let wish_div= document.createElement('div')
    let gif= document.createElement('img')
    gif.src=data.Gif
let wp1= document.createElement('p');
wp1.innerHTML="THE BIGGEST EVENT OF THE YEAR: FESTIVAL OF SOUND SALE ✨"
let wp2= document.createElement('p');
wp2.innerHTML="Up to 80% off | 125+ Deals on 35+ Brands. Explore now"
let wish_container= document.createElement('div');
wish_container.append(wp1,wp2);

wish_div.append(gif,wish_container);

    let textDiv= document.createElement('div')
    let text1= document.createElement('p')
    text1.innerHTML="THE BIGGEST EVENT OF THE YEAR: FESTIVAL OF SOUND SALE"
    let text2 = document.createElement('h3');
    text2.innerHTML=data.Discount;

    let cartData=JSON.parse(localStorage.getItem('cart_items')) || [];
    let addToCart = document.createElement('button');
    addToCart.innerHTML="ADD TO CART";
    addToCart.addEventListener('click', () =>{
      cartData.push(pData)
    localStorage.setItem('cart_items', JSON.stringify(cartData));
    // textDiv.append(text1,text2);
    // wish_div.append(gif,textDiv)

    })
    let confusion= document.createElement('button');
    confusion.innerHTML="CONFUSED? TALK TO A HEADPHONE GURU"
    confusion.addEventListener('click', () =>{

    })
    box.append(product_name,rating,mrp,sPrice,offer_price,bankOffer,wish_div,addToCart,confusion)
products.append(box)
}
appendProduct(pData)


// FOR DELIVERY & SHIPPING

let Dilivery_details = document.createElement('div')
import {DiliveryDetails} from "../components/dilivery&waranty.js";

Dilivery_details.innerHTML=DiliveryDetails()



let div1 = document.createElement('div')
div1.id='div1'
let cdDiv = document.createElement('div')
let p = document.createElement('h2')
p.innerHTML='The Audeze Euclid is amongst the first few IEMs to incorporate a full-sized planner magnetic driver. With Audezes expertise in planar drivers, what you get in the Euclid is superior detail retrieval and sonic accuracy with a soundstage, unlike any IEMs.'
let p2 = document.createElement('h3')
p2.innerHTML='RAGHAV SOMANI'
let p3 = document.createElement('p')
p3.innerHTML='Headphone Guru Info'
let img1 = document.createElement('img')
img1.src='https://cdn.shopify.com/s/files/1/0153/8863/files/Raghav-03.png?v=1580556037'
cdDiv.append(p,p2,p3)
div1.append(cdDiv,img1)

// Suggestion section
// ---------------------------
let suggestion = document.createElement('div');
suggestion.className='suggestion'

const sugg =(data)=>{

}
// ---------------------------

let div2 = document.createElement('div')
div2.id='div2'
let tab1 = document.createElement('p')
tab1.innerHTML='B-STOCK';

let tab2 = document.createElement('p')
tab2.innerHTML='DISCRIPTION';

let tab3= document.createElement('p')
tab3.innerHTML='SPECS';

let tab4 = document.createElement('p')
tab4.innerHTML='IN THE BOX';

let tab5 = document.createElement('p')
tab5.innerHTML='ABOUT AUDEZE';
let tab6 = document.createElement('p')
tab6.innerHTML='FAQs';
div2.append(tab1,tab2,tab3,tab4,tab5,tab6)


// Div 2 paragraphs

let div2_P = document.createElement('div');
div2_P.className='div2_P';

let div2_h2 = document.createElement('h2');
div2_h2.innerHTML = 'M-SHAPED BERYLLIUM DOME FOR FLAWLESS SOUND'
let div2_p1 = document.createElement('p');
div2_p1.innerHTML ='Focal has been known for producing pure acoustic sound for 40 years and the Stellia is one of them. An exceptional headphone, these are equipped with an M-shaped pure Beryllium dome and new surround, frameless 100% copper voice coil that ensures stunning dynamics for this closed-back headphone. The Stellia reveals the tiniest details and realistic audio reproduction.'

div2_P.append(div2_h2,div2_p1)
//Div2 images

let div2_Img = document.createElement('div');
div2_Img.className='div2_Img'
for (let i = 0; i <3;i++) {
  let div2_Img1 = document.createElement('img');
div2_Img1.src =pData.Proimg[i]
div2_Img.append(div2_Img1);
}





// Contant div3 
let div3 = document.createElement('div')
div3.id='div3';

let box1 = document.createElement('div')

let ch1 = document.createElement('div')
let header1 = document.createElement('h2')
header1.innerHTML='WHAT ARE B-STOCK HEADPHONES?'
let paragraph = document.createElement('p')
paragraph.innerHTML='Each high-end headphone or IEM undergoes a thorough inspection by the brand before being packaged to maintain high-quality standards. As such, products with aesthetic imperfections do not make the cut. These are then sold at huge discounts. The flaws are limited to only visual defects. The sonic qualities are uncompromised and work similarly to a new product. You get the same uncompromised service, and features along with massive savings.'
let ch2 = document.createElement('img')
ch2.src='https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Refurbished-Product-280x220-1_2048x2048.jpg?42360'
ch1.append(header1,paragraph)
box1.append(ch1,ch2)

let box2 = document.createElement('div')

let image1 = document.createElement('img')
image1.src='https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Refurbished-Product-32x32-1.svg?42407'

let d1=document.createElement('div')

let d1h4=document.createElement('h4')
d1h4.innerHTML='GET THE BEST DEAL'
let d1p = document.createElement('p')
d1p.innerHTML='Available at a considerable discount, B-Stock products offer an impressive price to performance ratio.'
d1.append(d1h4,d1p)


let image2 = document.createElement('img')
image2.src='https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Refurbished-Product-32x32-4.svg?42405'

let d2=document.createElement('div')

let d2h4=document.createElement('h4')
d2h4.innerHTML='UNBIASED CUSTOMER SERVICE & SUPPORT'
let d2p = document.createElement('p')
d2p.innerHTML='One will have the same Headphone Zone customer support experience for b-stock products like on new products.'
d2.append(d2h4,d2p)

let image3 = document.createElement('img')
image3.src='https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Refurbished-Product-32x32-6.svg?42405'

let d3=document.createElement('div')

let d3h4=document.createElement('h4')
d3h4.innerHTML='UNCHANGED REPLACEMENT POLICY'
let d3p = document.createElement('p')
d3p.innerHTML='Received a defective B-Stock unit? Return it under our Replacement policy. If you do not like your gear, we will not be able to accept the return.'
d3.append(d3h4,d3p)

box2.append(image1,d1,image2,d2,image3,d3)

//  This box for queries
let box3 = document.createElement('div')
let bp1 = document.createElement('p')
bp1.innerHTML='What is the physical condition of the headphones?'
let bp2 = document.createElement('p')
bp2.innerHTML='What cost benefit do I get?'
let bp3 = document.createElement('p')
bp3.innerHTML='Are B-Stock products genuine?'
let bp4= document.createElement('p')
bp4.innerHTML='Will I get all the accessories with the B-Stock product?'
let bp5 = document.createElement('p')
bp5.innerHTML='What if the B-Stock product is not working?'
let bp6 = document.createElement('p')
bp6.innerHTML='Can I return the B-Stock product?'

box3.append(bp1, bp2, bp3, bp4, bp5, bp6)


let box4= document.createElement('div')
let Img = document.createElement('img')
Img.src='https://www.fireflyeducation.com.au/content/www/icons/parachute.svg'
let chb4 = document.createElement('div')
let chb4h=document.createElement('h2')
chb4h.innerHTML='4 YEAR WARRANTY'
let chb4p=document.createElement('p')
chb4p.innerHTML='Dont sweat it, this Audeze - Euclid (B-Stock) comes with a warranty on the driver and a 1 year on the rest of the parts from Audeze that covers manufacturing defects. All products featured on Headphone Zone are backed by an original manufacturers warranty.Read more about Audezes warranty in India.'
chb4.append(chb4h,chb4p)
box4.append(Img,chb4)


let box5= document.createElement('div')
let bImg=document.createElement('img')
bImg.src='https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Finder-Image_800x.jpg?v=1644990056'
let b5ch= document.createElement('div')
let b5h2= document.createElement('h2')
b5h2.innerHTML='WELCOME TO OUR HEADPHONE FINDER'

let b5p1= document.createElement('p')
b5p1.innerHTML='Meet our Headphone Gurus.'
let b5p2= document.createElement('p')
b5p2.innerHTML='They obsess over every headphone so you get the perfect one. They have spent years reviewing & listening to countless headphones every day. Our Headphone Gurus are the go-to guys for everything audio.'
let b5p3= document.createElement('p')
b5p3.innerHTML='Our Headphone Finder puts together their top recommendations. In 4 easy steps, find the perfect headphones for you.'
let b5btn= document.createElement('button');
b5btn.innerHTML='BIGIN HERE'
b5btn.addEventListener('click',()=>{
    // some functions will be here
})
b5ch.append(b5h2,b5p1,b5p2,b5btn)
box5.append(bImg,b5ch)
div3.append(box1,box2,box3,box4,box5,)



// Toggle navbar for cart

let PopUpnavbar =document.getElementById("navbar");
let PopupData=document.createElement("div");
let PopupImg = document.createElement('img');
PopupImg.src=pData.Proimg[1];
let anchor=document.createElement("a");
let title=document.createElement("p");
title.innerHTML=pData.Name;
let P_price=document.createElement("p");
P_price.innerHTML=` = ₹ ${pData.OffierPrice}`;

anchor.append(title,P_price);
PopupData.append(PopupImg,anchor);

let PopUpBtn =document.createElement("button");
PopUpBtn.innerHTML='ADD TO CART';

let cartData=JSON.parse(localStorage.getItem('cart_items')) || [];


PopUpBtn.addEventListener("click",()=>{

  cartData.push(pData)
  localStorage.setItem('cart_items',JSON.stringify(cartData));
})

PopUpnavbar.append(PopupData,PopUpBtn)

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.visibility="visible";

  } else {
    document.getElementById("navbar").style.top = "-250px";
  }
}


 
body.append(ProImgData,products,Dilivery_details,div1,div2,div2_P,div2_Img,div3)

// For Pop cart Page

let popup_cart = document.getElementById('cartP');

import {viewCart} from '../components/cart.js'

popup_cart.innerHTML=viewCart()

let Pop=document.getElementById('openPOP');
Pop.addEventListener('click',()=>{
 
  let ON=document.querySelector("#bodyP");
ON.style.opacity ='0.2';
 ON.style.position="fixed";
 ON.style.pointerEvents="none";
  document.getElementById("mywindowCart").style.width = "550px";
  totalPrice()
  totalItems()
})

let end= document.querySelector(".closebtn");
end.addEventListener("click",()=>{
  document.getElementById("mywindowCart").style.width = "0";
 let off= document.querySelector("#bodyP")
 off.style.backgroundColor="";
 off.style.opacity="1";
 off.style.position="static";
 off.style.pointerEvents="auto";

})



//  View Cart Data 
let CartData=JSON.parse(localStorage.getItem('cart_items'))

const viewCartData= (data) =>{
let box=document.createElement("div")
  data=data.map((ele)=>{
    let div=document.createElement("div");

    let img=document.createElement("img");
    img.src=ele.Proimg[1];

    let products = document.createElement('p');
    products.innerHTML=ele.Name;

    let sPrice = document.createElement('p')
    sPrice.innerHTML=ele.MRP

    let price=document.createElement('p');
    price.innerHTML=ele.SellingPrice;

   

    div.append(img,products,sPrice,price);
    document.getElementById('cart_products').append(div) 
   })

}
viewCartData(CartData)



//  For totalItems

const totalItems=()=>{
let cdata=JSON.parse(localStorage.getItem('cart_items'))
return (document.getElementById('total_items').innerHTML=cdata.length)
}


//  For Total Price 

const totalPrice =()=>{
  let cdata=JSON.parse(localStorage.getItem('cart_items'))
cdata.reduce((ac,ele)=>{
return document.getElementById('total_price').innerHTML=(ac+Number(ele.SellingPrice))
},0)
  
}
// totalPrice()



