   
document.querySelector("form").addEventListener("submit",checkoutFunction);
 
function checkoutFunction(){
    event.preventDefault();
    var mail=document.querySelector("#email").value;
   
    var checkbtn=document.querySelector("#checked").checked;
// radio button output in another function that is myFunction
//console.log(mail,checkbtn)
    
    var select_country=document.querySelector("#country").value;
    var Fname=document.querySelector("#fname").value;
    var Lname=document.querySelector("#lname").value;
    var Add=document.querySelector("#add").value;
    var city=document.querySelector("#city").value;
    var select_state=document.querySelector("#state").value;
    var pin=document.querySelector("#pin").value;
    var mob=document.querySelector("#mob").value;
    var save_time=document.querySelector("#save_time").checked;

 console.log(pin,mob,save_time)
}

function myFunction(Gst_detail) {
 var  radiobtn= Gst_detail
 console.log(radiobtn)
 }