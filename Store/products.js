"use strict";
var soccerBall = {
  firstTime: 0,
  id:0,
  name:"Soccer Ball",
  objectName:"soccerBall",
  stock:10,
  price:"$10",
  soccerBallSetup: function(item){
    var row = $("<tr>");
    row.append($("<td id='soccerBallId' class='left'>" + item.id + "</td>"));
    row.append($("<td id='soccerBallName' class='left'>" + item.name +"</td>"));
    row.append($("<td id='soccerBallPrice' class='left'>" + item.price + "</td>"));
    row.append($("<td id='soccerBallStock' class='left'>" + item.stock + "</td>"));
    row.append($('<td><button onclick=addToCart(soccerBall)>Add to Cart</button></td>'));
    $("#catalogue").append(row);
  },
  soccerBallCart: function(){
    if(this.firstTime == 0){
      var row = $("<tr>");
      row.append($("<td id='soccerBallCartName' class='left'>" + this.name + "</td>"));
      row.append($("<td id='soccerBallCartQuantity' class='left'>" + 0 + "</td>"));
      row.append($("<td id='soccerBallCartCost'>" + this.price + "</td>"))
      $("#cart").append(row);
      document.getElementById('soccerBallCartQuantity').innerHTML = parseInt(document.getElementById('soccerBallCartQuantity').innerHTML) + 1;
      this.firstTime = 1;
    }
    else {
      document.getElementById('soccerBallCartQuantity').innerHTML = parseInt(document.getElementById('soccerBallCartQuantity').innerHTML) + 1;
      document.getElementById('soccerBallCartCost').innerHTML =  "$" + this.price.slice(1,this.price.length) * document.getElementById("soccerBallCartQuantity").innerHTML;
    }
    totalMoney = Math.round((parseFloat(this.price.slice(1,this.price.length)) + totalMoney) * 100) / 100;
  }
};
var soapBar = {
  firstTime:0,
  id:1,
  name:"Soap Bar",
  objectName:"soapBar",
  stock:40,
  price:"$3",
  soapBarSetup: function(item){
    var row = $("<tr>");
    row.append($("<td id='soapBarId' class='left'>" + item.id + "</td>"));
    row.append($("<td id='soapBarName' class='left'>" + item.name +"</td>"));
    row.append($("<td id='soapBarPrice' class='left'>" + item.price + "</td>"));
    row.append($("<td id='soapBarStock' class='left'>" + item.stock + "</td>"));
    row.append($('<td><button onclick=addToCart(soapBar)>Add to Cart</button></td>'));
    $("#catalogue").append(row);
  },
  soapBarCart: function(){
    if(this.firstTime == 0){
      var row = $("<tr>");
      row.append($("<td id='soapBarCartName' class='left'>" + this.name + "</td>"));
      row.append($("<td id='soapBarCartQuantity' class='left'>" + 0 + "</td>"));
      row.append($("<td id='soapBarCartCost'>" + this.price + "</td>"))
      $("#cart").append(row);
      document.getElementById('soapBarCartQuantity').innerHTML = parseInt(document.getElementById('soapBarCartQuantity').innerHTML) + 1;
      this.firstTime = 1;
    }
    else {
      document.getElementById('soapBarCartQuantity').innerHTML = parseInt(document.getElementById('soapBarCartQuantity').innerHTML) + 1;
      document.getElementById('soapBarCartCost').innerHTML =  "$" + this.price.slice(1,this.price.length) * document.getElementById("soapBarCartQuantity").innerHTML;
    }
    totalMoney = Math.round((parseFloat(this.price.slice(1,this.price.length)) + totalMoney) * 100) / 100;
  }
};
var glasses = {
  firstTime:0,
  id:2,
  name: "Glasses",
  objectName:"glasses",
  stock:13,
  price:"$37.99",
  glassesSetup: function(item){
    var row = $("<tr>");
    row.append($("<td id='gassesId' class='left'>" + item.id + "</td>"));
    row.append($("<td id='glassesName' class='left'>" + item.name +"</td>"));
    row.append($("<td id='glassesPrice' class='left'>" + item.price + "</td>"));
    row.append($("<td id='glassesStock' class='left'>" + item.stock + "</td>"));
    row.append($('<td><button onclick=addToCart(glasses)>Add to Cart</button></td>'));
    $("#catalogue").append(row);
  },
  glassesCart: function(){
    if(this.firstTime == 0){
      var row = $("<tr>");
      row.append($("<td id='glassesCartName' class='left'>" + this.name + "</td>"));
      row.append($("<td id='glassesCartQuantity' class='left'>" + 0 + "</td>"));
      row.append($("<td id='glassesCartCost'>" + this.price + "</td>"))
      $("#cart").append(row);
      document.getElementById('glassesCartQuantity').innerHTML = parseInt(document.getElementById('glassesCartQuantity').innerHTML) + 1;
      this.firstTime = 1;
    }
    else {
      document.getElementById('glassesCartQuantity').innerHTML = parseInt(document.getElementById('glassesCartQuantity').innerHTML) + 1;
      document.getElementById('glassesCartCost').innerHTML =  "$" + Math.round(parseFloat(this.price.slice(1,this.price.length)) * parseFloat(document.getElementById("glassesCartQuantity").innerHTML) * 100) / 100;
    }
    totalMoney = Math.round((parseFloat(this.price.slice(1,this.price.length)) + totalMoney) * 100) / 100;
  }
};
var cocaine = {
  firstTime:0,
  id:3,
  name:"Cocaine",
  objectName:"cocaine",
  stock:2,
  price:"$999",
  cocaineSetup: function(item){
    var row = $("<tr>");
    row.append($("<td id='cocaineId' class='left'>" + item.id + "</td>"));
    row.append($("<td id='cocaineName' class='left'>" + item.name +"</td>"));
    row.append($("<td id='cocainePrice' class='left'>" + item.price + "</td>"));
    row.append($("<td id='cocaineStock' class='left'>" + item.stock + "</td>"));
    row.append($('<td><button onclick=addToCart(cocaine)>Add to Cart</button></td>'));
    $("#catalogue").append(row);
  },
  cocaineCart: function(){
    if(this.firstTime == 0){
      var row = $("<tr>");
      row.append($("<td id='cocaineCartName' class='left'>" + this.name + "</td>"));
      row.append($("<td id='cocaineCartQuantity' class='left'>" + 0 + "</td>"));
      row.append($("<td id='cocaineCartCost'>" + this.price + "</td>"))
      $("#cart").append(row);
      document.getElementById('cocaineCartQuantity').innerHTML = parseInt(document.getElementById('cocaineCartQuantity').innerHTML) + 1;
      this.firstTime = 1;
    }
    else {
      document.getElementById('cocaineCartQuantity').innerHTML = parseInt(document.getElementById('cocaineCartQuantity').innerHTML) + 1;
      document.getElementById('cocaineCartCost').innerHTML =  "$" + this.price.slice(1,this.price.length) * document.getElementById("cocaineCartQuantity").innerHTML;
    }
    totalMoney = Math.round((parseFloat(this.price.slice(1,this.price.length)) + totalMoney) * 100) / 100;
  }
};
var gun = {
  firstTime: 0,
  id:4,
  name:"Gun",
  objectName:"gun",
  stock:4,
  price:"$120000",
  gunSetup: function(item){
    var row = $("<tr>");
    row.append($("<td id='gunId' class='left'>" + item.id + "</td>"));
    row.append($("<td id='gunName' class='left'>" + item.name +"</td>"));
    row.append($("<td id='gunPrice' class='left'>" + item.price + "</td>"));
    row.append($("<td id='gunStock' class='left'>" + item.stock + "</td>"));
    row.append($('<td><button onclick=addToCart(gun)>Add to Cart</button></td>'));
    $("#catalogue").append(row);
  },
  gunCart: function(){
    if(this.firstTime == 0){
      var row = $("<tr>");
      row.append($("<td id='gunCartName' class='left'>" + this.name + "</td>"));
      row.append($("<td id='gunCartQuantity' class='left'>" + 0 + "</td>"));
      row.append($("<td id='gunCartCost'>" + this.price + "</td>"))
      $("#cart").append(row);
      document.getElementById('gunCartQuantity').innerHTML = parseInt(document.getElementById('gunCartQuantity').innerHTML) + 1;
      this.firstTime = 1;
    }
    else {
      document.getElementById('gunCartQuantity').innerHTML = parseInt(document.getElementById('gunCartQuantity').innerHTML) + 1;
      document.getElementById('gunCartCost').innerHTML =  "$" + this.price.slice(1,this.price.length) * document.getElementById("gunCartQuantity").innerHTML;
    }
    totalMoney = Math.round((parseFloat(this.price.slice(1,this.price.length)) + totalMoney) * 100) / 100;
  }
};
