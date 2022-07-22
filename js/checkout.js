let main = document.getElementById(`main`);
// function carrots display will display description,name,price and image of the cookie selected
function carrots_display(details) {
    main[`innerHTML`] +=
        `<section>
<h3> You have Selected ${cookies_carrots[`name`]} </h3>
<p> Price ${cookies_carrots[`price`]}</p>
</section>`;
}
// cucumbers display function will display description of the item selected

function cucumbers_display(details){
    main[`innerHTML`] += 
    `<section>
    <h3>You have selected ${cookies_cucumber[`name`]}</h3>
    <p>Price ${cookies_cucumber[`price`]}</p>
    </section>`;
}
function potatoes_display(details){
    main[`innerHTML`] += 
    `<section>
    <h3>You have selected ${cookies_potatoes[`name`]}</h3>
    <p>Price ${cookies_potatoes[`price`]}</p>
    </section>`;
}
function squashes_display(details){
    main[`innerHTML`] += 
    `<section>
    <h3>You have selected ${cookies_squashes[`name`]}</h3>
    <p>Price ${cookies_squashes[`price`]}</p>
    </section>`;
}
function tomatoes_display(details){
    main[`innerHTML`] += 
    `<section>
    <h3>You have selected ${cookies_tomatoes[`name`]}</h3>
    <p>Price ${cookies_tomatoes[`price`]}</p>
    </section>`;
}

// get the cookies related to carrot object 
let cookies_carrots_json = Cookies.get(`carrots`);
// convert cookies from json to normal string by doing parse
let cookies_carrots = JSON.parse(cookies_carrots_json);

// get the cookies related to cucumber
let cookies_cucumbers_json = Cookies.get(`cucumbers`);
// convert cookies from json to normal string
let cookies_cucumber = JSON.parse(cookies_cucumbers_json);

let cookies_potatoes_json = Cookies.get(`potatoes`);
let cookies_potatoes = JSON.parse(cookies_potatoes_json);

let cookies_squashes_json = Cookies.get(`squashes`);
let cookies_squashes = JSON.parse(cookies_squashes_json);

let cookies_tomatoes_json = Cookies.get(`tomatoes`);
cookies_tomatoes = JSON.parse(cookies_tomatoes_json);


//if statement will check if carrots cookies selected and has name value equal to carrots
if (cookies_carrots[`name`] === `carrots`) {
    carrots_display();
} 
if(cookies_cucumber[`name`] === `cucumbers`){
    cucumbers_display();
}
if(cookies_potatoes[`name`] === `potatoes`){
    potatoes_display();
}
if(cookies_squashes[`name`] === `squashes`){
    squashes_display();
}
if(cookies_tomatoes[`name`] === `tomatoes`){
    tomatoes_display();
}