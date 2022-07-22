let carrots = {
    name: `carrots`,
    description: `Fresh carrots from the fields`,
    price: `$5 per pounds`,
    image_url:`/home/satinder/Desktop/study/innotech/Assignments/w11/assignment_w11b/images/carrot.jpg`
}
function set_cookies_carrot(details){
    Cookies.set(`carrots`,carrots_cookies);
}
let carrots_cookies = JSON.stringify(carrots);
carrots_cookies.addEventListener(`click`,set_cookies_carrot);
