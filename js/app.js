// veggies is an empty array to push some objects and stringify it
let veggies =[];
// one of the object to choose from
let carrots = {
    name: `carrots`,
    description: `Fresh carrots from the fields`,
    price: `$5 per pounds`,
    image_url:`/assignment_w11b/images/carrot.jpg`
};
// one of the object to choose from
let cucumbers = {
    name: `cucumbers`,
    description: `Fresh cucumbers from the fields`,
    price: `$4 per pounds`,
    image_url:`/assignment_w11b/images/cucumber.jpg`
};
// one of the object to choose from
let potatoes = {
    name: `potatoes`,
    description: `Fresh potatoes from the fields`,
    price: `$7 per pounds`,
    image_url:`/assignment_w11b/images/potato.jpg`
};
// one of the object to choose from
let squashes = {
    name: `squashes`,
    description: `Fresh squash from the fields`,
    price: `$3 per pounds`,
    image_url:`/assignment_w11b/images/squash.jpg`
};
// one of the object to choose from
let tomatoes = {
    name: `tomatoes`,
    description: `Fresh tomatoes from the fields`,
    price: `$2 per pounds`,
    image_url:`/assignment_w11b/images/tomato.jpg`
};

// set_cookies_carrots function is to push carrots objects to veggies array
// convert veggies array to json and set cookies veggetables with stringified value
function set_cookies_carrot(details){
    veggies.push(carrots);
    let cookies_value_carrots = JSON.stringify(veggies);
    Cookies.set(`veggetables`,cookies_value_carrots);
}
// set_cookies_cucumbers function is to push cucumbers objects to veggies array
// convert veggies array to json and set cookies veggetables with stringified value
function set_cookies_cucumber(details){
   veggies.push(cucumbers);
   let cookies_value_cucumbers = JSON.stringify(veggies);
   Cookies.set(`veggetables`,cookies_value_cucumbers);

}
function set_cookies_potatoes(details){
    veggies.push(potatoes);
    let cookies_value_potatoes = JSON.stringify(veggies);
    Cookies.set(`veggetables`,cookies_value_potatoes);
 
 }
function set_cookies_squash(details){
    veggies.push(squashes);
    let cookies_value_squashes = JSON.stringify(veggies);
    Cookies.set(`veggetables`,cookies_value_squashes);
 
 }
function set_cookies_tomatoes(details){
    veggies.push(tomatoes);
    let cookies_value_tomatoes = JSON.stringify(veggies);
    Cookies.set(`veggetables`,cookies_value_tomatoes);
 
 }

let carrot_order = document.getElementById(`buy_carrots`);
carrot_order.addEventListener(`click`,set_cookies_carrot);

let cucumber_order = document.getElementById(`buy_cucumbers`);
cucumber_order.addEventListener(`click`,set_cookies_cucumber);

let potato_order = document.getElementById(`buy_potatoes`);
potato_order.addEventListener(`click`,set_cookies_potatoes);

let squash_order = document.getElementById(`buy_squashes`);
squash_order.addEventListener(`click`,set_cookies_squash);

let tomato_order = document.getElementById(`buy_tomatoes`);
tomato_order.addEventListener(`click`,set_cookies_tomatoes);

