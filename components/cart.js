const viewCart=()=>{
    return ` <div id="mywindowCart" class="windowCart">
    <div id="popup_body">
      <div id="popup_nav">
      <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdqmo9Tf03Ld28hxLG99nIdNbJLiC7QhJwRz1fNLvLAJknVxVmyXUbBrbvuUH1gfjNMTg&usqp=CAU" alt="">
          <p><span id="total_items">0</span>  ITEM</p>
        </div>
        <a class="closebtn"> <img src="https://tampamagazines.com/wp-content/uploads/2020/06/black-x-png-1.png"></a>

      </div>
      
     <div id="cart_products"></div>
     <div id='winFooter'>
      <p>Add order note</p>
      <button id='checkout'><img src="https://cdn-icons-png.flaticon.com/512/61/61457.png" alt=""> CHECKOUT. ₹  <span id="total_price"></span> </button>
      <p>Login to earn Club Audiophile points. No account?<a href="signin.html"> Sign up now.</a></p>
     </div>
  </div>
</div> 



</div>`

}

export {viewCart}