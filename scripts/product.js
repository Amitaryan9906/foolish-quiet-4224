
// Import navbar from components






// Get data from localStorage
// Append data in Product Page
let body = document.getElementById('body')
/*
let pData=JSON.parse(localStorage.getItem('product_data'));

let viewProduct=document.createElement('div');
viewProduct.id="product"

const appendProduct =(data)=>{
    let img = document.createElement('img');
    img.src =data.Image;

    let brand = document.createElement('h3')
    brand.innerHTML=data.Brand;

    let product_name = document.createElement('h2')
    product_name.innerHTML=data.Product;

    let rating = document.createElement('img')
    rating.src =data.Rating

    let mrp= document.createElement('p')
    mrp.innerHTML=data.MRP;

    let sPrice = document.createElement('p')
    sPrice.innerHTML=data.SellingPrice;

    let offer_price = document.createElement('p')
    offer_price.innerHTML=data.OfferPrice;

    let wish_div= document.createElement('div')
    let gif= document.createElement('img')
    gif.src=data.Gif
    let textDiv= document.createElement('div')
    let text1= document.createElement('p')
    text1.innerHTML="THE BIGGEST EVENT OF THE YEAR: FESTIVAL OF SOUND SALE"
    let text2 = document.createElement('h3');
    text2.innerHTML="Up to 80% off | 125+ Deals on 35+ Brands. Explore now"

    let cartData=JSON.parse(localStorage.getItem('cart_items')) || [];
    let addToCart = document.createElement('button');
    addToCart.innerHTML="ADD TO CART";
    addToCart.addEventListener('click', () =>{
    localStorage.setItem('cart_items', JSON.stringify(cartData));
    textDiv.append(text1,text2);
    wish_div.append(gif,textDiv)
    let confusion= document.createElement('button');
    confusion.innerHTML="CONFUSED? TALK TO A HEADPHONE GURU"
    confusion.addEventListener('click', () =>{

    })

   viewProduct.append(img,brand,product_name,rating,mrp,sPrice,offer_price)
  body.append(viewProduct);
    })
}
appendProduct(pData)
*/

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

//  This bob for queries
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

body.append(Dilivery_details,div1,div2,div3)

