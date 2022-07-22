
let cookies_carrots_json = Cookies.get(`carrots`);
let cookies_carrots = JSON.parse(cookies_carrots_json);
function carrots_display(details) {
    document.getElementById(`main`)[`innerHTML`] =
        `<section>
<h3> You have Selected ${cookies_carrots[`name`]} </h3>
<img src="${cookies_carrots[`image_url`]}" alt="carrots"/>
<p> Price ${cookies_carrots[`price`]}</p>
</section>`;
}
if (cookies_carrots[`name`] === `carrots`) {
    carrots_display();
}