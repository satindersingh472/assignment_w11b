let carrots = {
    name: `carrots`,
    description: `Fresh carrots from the fields`,
    price: `$5 per pounds`,
    image_url:`/home/satinder/Desktop/study/innotech/Assignments/w11/assignment_w11b/images/carrot.jpg`
}
let cucumbers = {
    name: `cucumbers`,
    description: `Fresh cucumbers from the fields`,
    price: `$4 per pounds`,
    image_url:`/home/satinder/Desktop/study/innotech/Assignments/w11/assignment_w11b/images/cucumber.jpg`
}
let potatoes = {
    name: `potatoes`,
    description: `Fresh potatoes from the fields`,
    price: `$7 per pounds`,
    image_url:`/home/satinder/Desktop/study/innotech/Assignments/w11/assignment_w11b/images/potato.jpg`
}
let squashes = {
    name: `squashes`,
    description: `Fresh squash from the fields`,
    price: `$3 per pounds`,
    image_url:`/home/satinder/Desktop/study/innotech/Assignments/w11/assignment_w11b/images/squash.jpg`
}
let tomatoes = {
    name: `tomatoes`,
    description: `Fresh tomatoes from the fields`,
    price: `$2 per pounds`,
    image_url:`/home/satinder/Desktop/study/innotech/Assignments/w11/assignment_w11b/images/tomato.jpg`
}

// set_cookies_carrots function is to convert carrots object to json and set cookies carrot
function set_cookies_carrot(details){
    let carrots_cookies = JSON.stringify(carrots);
    Cookies.set(`carrots`,carrots_cookies);
}

function set_cookies_cucumber(details){
    let cucumbers_cookies = JSON.stringify(cucumbers);
    Cookies.set(`cucumbers`,cucumbers_cookies);
}
function set_cookies_potatoes(details){
    let potatoes_cookies = JSON.stringify(potatoes);
    Cookies.set(`potatoes`,potatoes_cookies);
}
function set_cookies_squash(details){
    let squashes_cookies = JSON.stringify(squashes);
    Cookies.set(`squashes`,squashes_cookies);
}
function set_cookies_tomatoes(details){
    let tomatoes_cookies = JSON.stringify(tomatoes);
    Cookies.set(`tomatoes`,tomatoes_cookies);
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
