/*
1-ui vs frontend
2-js intro&history
3-js where to write
4-o/p to user
    window.alert("welcome from first js");
    document.getElementById("demo").innerHTML = "nadiaaaaaaaaaaa";
    console.log("welcome from console"); //development purpose
5-variables
6-data types
  1-primitive data-types
 //string,number,boalean,undefined,null
 2-non-primitive
  object
strongly typed(static) language
int x=5;
string y="ahmed"
bool z=true
----
loosly typed(dynamiclly) lang.
7-prompt 
-----------------
1-logical pathes
if condition
= assigment op
== comparison op(check for value only)
=== identical op(check for value and type)

>,<,>=,<=

logical ops
&& 
||

switch case

arithmatic op
%,+,-,*,/

loops(for,while,do-while)
--------
1-while&&do-while
2-function(scheme--functional prog. lang)
reusable
3-return & function rules
4-types of functions&&hoisting
5-scope&&interview questions
6-self-invoked fun(iife)
7-functional prog. lang
  -function can be assigmned to a variable
  -function can be passed as a param to another func.
  -function can be returned from another fun.
  -function can be proprty of object
 -----------

 1-Object
 2-built-in objects
    window,document,screen
 3-array
 /*
 console.log(colors);
 console.log(colors.length)
 console.log(colors[3]);
 4-array built-in methods
 5-inputs exercise
 6-crud project idea
 7-crud html
 8-crud add and display
 */

/*
console.log(friends.indexOf("abeer"))
console.log(friends.lastIndexOf("ahmed"))
console.log(friends.includes("nora"))
console.log(friends.concat("nora"));
------------------------------------------
console.log(friends.sort());
console.log(friends.reverse());

friends.push("nora");
friends.unshift("nora");
friends.pop();
friends.shift();
friends.splice(2,1);     //remove
friends.splice(2,0,"nora");     //add
friends.splice(2,1,"nora");     //add,remove
*/
//think twice , code once
//move then improve
var productNameInput = document.getElementById('productName');
var productPriceInput = document.getElementById('productPrice');
var productCategoryInput = document.getElementById('productCategory');
var productDescInput = document.getElementById('productDesc');
var addBtn = document.getElementById('addBtn');
var inputs = document.getElementsByClassName('form-control');
var currentIndex = 0;

var products = [];
if (JSON.parse(localStorage.getItem('productsList')) != null) {
  products = JSON.parse(localStorage.getItem('productsList'));
  displayData()
}

addBtn.onclick = function () {
  if (addBtn.innerHTML == 'Add product') //add mode
  {
    addProduct();
  }
  else {  //update mode
    updateProduct()
  }

  displayData();
  resetForm();
}

function addProduct() {
  var product =
  {
    name: productNameInput.value,
    price: productPriceInput.value,
    category: productCategoryInput.value,
    desc: productDescInput.value,
  };
  products.push(product);
  localStorage.setItem('productsList', JSON.stringify(products));
}

function displayData() {
  var cartona = '';
  for (var i = 0; i < products.length; i++) {
    cartona +=
      `
    <tr>
      <td>${products[i].name}</td>
      <td>${products[i].price}</td>
      <td>${products[i].category}</td>
      <td>${products[i].desc}</td>
      <td><button onclick='getProductInfo(${i})' class='btn btn-outline-warning'>update</button></td>
      <td><button onclick='deleteProduct(${i})' class='btn btn-outline-danger'>delete</button></td>
    </tr>
    `
  }
  document.getElementById('tableBody').innerHTML = cartona
}
function getProductInfo(index) {
  currentIndex = index;
  var currentProduct = products[index];
  productNameInput.value = currentProduct.name;
  productPriceInput.value = currentProduct.price;
  productCategoryInput.value = currentProduct.category;
  productDescInput.value = currentProduct.desc;
  addBtn.innerHTML = "update product"
}
function updateProduct() {
  var product =
  {
    name: productNameInput.value,
    price: productPriceInput.value,
    category: productCategoryInput.value,
    desc: productDescInput.value,
  };
  products[currentIndex] = product;
  localStorage.setItem('productsList', JSON.stringify(products));
  addBtn.innerHTML = 'Add product';

}
function deleteProduct(index) {
  products.splice(index, 1);
  displayData();
  localStorage.setItem('productsList', JSON.stringify(products));
}

function resetForm() {
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = ''
  }
}

function search(searchTxt) {
  var cartona = '';
  for (var i = 0; i < products.length; i++) {
    if (products[i].name.toLowerCase().includes(searchTxt.toLowerCase())) {
      cartona +=
        `
    <tr>
      <td>${products[i].name}</td>
      <td>${products[i].price}</td>
      <td>${products[i].category}</td>
      <td>${products[i].desc}</td>
      <td><button class='btn btn-outline-warning'>update</button></td>
      <td><button onclick='deleteProduct(${i})' class='btn btn-outline-danger'>delete</button></td>
    </tr>
    `
    }

  }
  document.getElementById('tableBody').innerHTML = cartona
}

/*
string built-in methods
console.log(userName.length);
console.log(userName.indexOf('a'));
console.log(userName.lastIndexOf('a'));
console.log(userName.concat(' sayed'));
console.log(userName.search('i'));
console.log(userName.includes('h')); //case sensitive
console.log(userName.startsWith('n')); //case sensitive
console.log(userName.endsWith('A')); //case sensitive
console.log(userName.charAt(i));
-------
console.log(userName.substr(2,7));
console.log(userName.substring(2,7));
console.log(userName.slice(9,3));

*/

//validation(data is valid)
//logically
//secure wise
//regular expressions(rejex)--pattern of symbols and chars
//entry,intermediate,advanced
var nameAlert = document.getElementById('nameAlert');

productNameInput.onkeyup = function () {
  var nameRejex = /^[A-Z][a-z]{2,8}$/;
  if (nameRejex.test(productNameInput.value))    //lw tmm(valid)
  {
    addBtn.removeAttribute('disabled');
    productNameInput.classList.add('is-valid');
    productNameInput.classList.remove('is-invalid');
    nameAlert.classList.add('d-none');
  }
  else    //lw m4 tmm(not valid)
  {
    addBtn.disabled = true;
    productNameInput.classList.add('is-invalid');
    productNameInput.classList.remove('is-valid');
    nameAlert.classList.remove('d-none');
  }
}




//DOM(document object model)
/*
1-select element in html
  var demo = document.getElementById('demo');  //dom statement
var test1 = Array.from(document.getElementsByClassName('form-control'));//coll
var test2 = document.getElementsByTagName('input');//coll
var test3 = document.getElementsByName('gender');//nodelist
var test4 = document.querySelector('.form-control')
var test5 = document.querySelectorAll('input');  //nodelist
*/

var demo = document.getElementById('demo');  //dom statement
var test1 = Array.from(document.getElementsByClassName('form-control'));//coll
var test2 = document.getElementsByTagName('input');//coll
var test3 = document.getElementsByName('gender');//nodelist
var test4 = document.querySelector('.form-control')
var test5 = document.querySelectorAll('input');  //nodelist

