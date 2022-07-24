// function show vegetables will show items on checkout page 
function show_veggetables(details){
    main[`innerHTML`] += `<section class="main_content">
    <div class="main_content_image"> <img src="${parse_cookies[counter][`image_url`]}" alt ="${parse_cookies[counter][`name`]}"/>  </div> 
    <div class="main_content_description">  <h3>  ${parse_cookies[counter][`name`]} ${parse_cookies[counter][`price`]}</h3> 
           <p> ${parse_cookies[counter][`description`]}</p>
    
    </div>
    </section>`;
}
// main will grab the element main by id to put innerhtml later on
let main = document.getElementById(`main`);
// get cookies value from last page
let get_cookies = Cookies.get([`veggetables`]);
// parse those cookies we got
let parse_cookies = JSON.parse(get_cookies);

//if statement will check if  parsed cookies have value of name equal to any veggetable
for (counter = 0; counter < parse_cookies.length;counter++)
if (parse_cookies[counter][`name`] === `carrots`) {
    show_veggetables();
} else if (parse_cookies[counter][`name`] === `cucumbers`){
    show_veggetables();
} else if (parse_cookies[counter][`name`] === `potatoes`){
    show_veggetables();
} else if (parse_cookies[counter][`name`] === `squashes`){
    show_veggetables();
} else if (parse_cookies[counter][`name`] === `tomatoes`){
    show_veggetables();
}  