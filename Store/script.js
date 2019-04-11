"use strict";
$(document).ready(function(){
  soccerBall.soccerBallSetup(soccerBall);
  soapBar.soapBarSetup(soapBar);
  glasses.glassesSetup(glasses);
  $("#cart").hide();
  $("#totalMoney").hide();
  $("#cartTitle").hide();
  $("#checkout").hide();
  $("#outOfStock").hide();
  $("#checkout").click(function(){
    document.getElementById('hiddenElement').innerHTML = "<b>YOU FOOL!</b> For now I have attained all of that <b>MONEY</b> that you gave me. That's right, $" + totalMoney + " is now <b>MINE TO KEEP!</b> You thought you were purchasing products, LOL <img src='PointAtHead.jpg' style='width:500px;height:500px;' />";
    $("#hiddenElement").show();
  });
});
var totalMoney = 0;
function soon(Product){
  console.log("The product " + Product.name + " is yet to be implemented");
}
function addToCart(Product){
  $("#cart").show();
  if(Product.stock > 0){
    Product.stock = Product.stock - 1;
    document.getElementById(Product.objectName + "Stock").innerHTML = Product.stock;
    console.log(Product.name + " stock remaining is " + Product.stock);
    var cruncher = Product.objectName + "Cart";
    cruncher = cruncher.toString();
    Product[cruncher]();
    $('#totalMoney').show();
    $("#cartTitle").show();
    $("#checkout").show();
    $("#outOfStock").hide();
    document.getElementById("totalMoney").innerHTML = "Grandtotal: $" + totalMoney;
  }
  else{
    $("#outOfStock").show();
    document.getElementById("outOfStock").innerHTML = "Sorry, we are currently out of stock for the product, <b>" + Product.name + ".</b>";
  }
}
function trigger(){
  $("#secret").hide();
  cocaine.cocaineSetup(cocaine);
  gun.gunSetup(gun);
}
