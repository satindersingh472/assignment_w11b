// veggies is an empty array to push some objects and stringify it
let veggies = [];
// one of the object to choose from
let carrots = {
    name: `carrots`,
    description: `Fresh carrots from the fields`,
    price: `$5 per pounds`,
    image_url: `/images/carrot.jpg`
};
// one of the object to choose from
let cucumbers = {
    name: `cucumbers`,
    description: `Fresh cucumbers from the fields`,
    price: `$4 per pounds`,
    image_url: `/images/cucumber.jpg`
};
// one of the object to choose from
let potatoes = {
    name: `potatoes`,
    description: `Fresh potatoes from the fields`,
    price: `$7 per pounds`,
    image_url: `/images/potato.jpg`
};
// one of the object to choose from
let squashes = {
    name: `squashes`,
    description: `Fresh squash from the fields`,
    price: `$3 per pounds`,
    image_url: `/images/squash.jpg`
};
// one of the object to choose from
let tomatoes = {
    name: `tomatoes`,
    description: `Fresh tomatoes from the fields`,
    price: `$2 per pounds`,
    image_url: `/images/tomato.jpg`
};


// set_cookies_carrots function is to push carrots objects to veggies array
// convert veggies array to json and set cookies veggetables with stringified value
function set_cookies_carrot(details) {
    veggies.push(carrots);
    cookies_value_carrots = JSON.stringify(veggies);
    Cookies.set(`veggetables`, cookies_value_carrots);
}
// set_cookies_cucumbers function is to push cucumbers objects to veggies array
// convert veggies array to json and set cookies veggetables with stringified value
function set_cookies_cucumber(details) {
    veggies.push(cucumbers);
    let cookies_value_cucumbers = JSON.stringify(veggies);
    Cookies.set(`veggetables`, cookies_value_cucumbers);
}
// set_cookies_potatoes function is to push potatoes objects to veggies array
// convert veggies array to json and set cookies veggetables with stringified value
function set_cookies_potatoes(details) {
    veggies.push(potatoes);
    let cookies_value_potatoes = JSON.stringify(veggies);
    Cookies.set(`veggetables`, cookies_value_potatoes);
}
// set_cookies_squash function is to push squahes objects to veggies array
// convert veggies array to json and set cookies veggetables with stringified value
function set_cookies_squash(details) {
    veggies.push(squashes);
    let cookies_value_squashes = JSON.stringify(veggies);
    Cookies.set(`veggetables`, cookies_value_squashes);
}
// set_cookies_tomatoes function is to push tomatoes objects to veggies array
// convert veggies array to json and set cookies veggetables with stringified value
function set_cookies_tomatoes(details) {
    veggies.push(tomatoes);
    let cookies_value_tomatoes = JSON.stringify(veggies);
    Cookies.set(`veggetables`, cookies_value_tomatoes);
}



//  below 2 lines will the grab the element by id i.e button and attach it to event listener to invoke the functionl
let carrot_order = document.getElementById(`buy_carrots`);
carrot_order.addEventListener(`click`, set_cookies_carrot);
//  below 2 lines will the grab the element by id i.e button and attach it to event listener to invoke the functionl
let cucumber_order = document.getElementById(`buy_cucumbers`);
cucumber_order.addEventListener(`click`, set_cookies_cucumber);
//  below 2 lines will the grab the element by id i.e button and attach it to event listener to invoke the functionl
let potato_order = document.getElementById(`buy_potatoes`);
potato_order.addEventListener(`click`, set_cookies_potatoes);
//  below 2 lines will the grab the element by id i.e button and attach it to event listener to invoke the functionl
let squash_order = document.getElementById(`buy_squashes`);
squash_order.addEventListener(`click`, set_cookies_squash);
//  below 2 lines will the grab the element by id i.e button and attach it to event listener to invoke the functionl
let tomato_order = document.getElementById(`buy_tomatoes`);
tomato_order.addEventListener(`click`, set_cookies_tomatoes);

// this if will check if there is another cookies already present then it will parse those cookies and send them to array
let cookies_get = Cookies.get([`veggetables`]);
if (cookies_get) {
    veggies = JSON.parse(cookies_get);
    Cookies.set(`veggetables`, veggies);
}  