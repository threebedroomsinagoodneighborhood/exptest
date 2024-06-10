//работает но indexstyles успевает пересохраняться как styles
//код:

/*
fetch("http://127.0.0.1:5500/ini%20test/jscounter/playground/index.html")
    .then(res => res.text())
    .then(data => document.getElementById('main').innerHTML = data)
 */

//остальные не работают, ошибка cors


//-------------------------------------------------------------------------
//по туториалу https://www.youtube.com/watch?v=QTq3uqJbDaI
//здесь еще ошибка buttoncat is null, из-за этого я onclick вставила в html
//потом TypeError: NetworkError when attempting to fetch resource. из-за долгого ожидания, мне кажется api котов забросили просто
//код:

/*
const buttoncat = document.querySelector(".catbutton");
const image = document.querySelector(".img");
const url = "https://aws.random.cat/meow";
//ссылке 3 года поэтому NetworkError
//она даже не грузится когда я сама открываю в браузере

//async await вместо .then .catch
async function fetchHandler() {
    console.log("called");
    try {
        console.log("waiting");
        const response = await fetch(url);
        console.log("url fetched");
        const data = await response.json();
        console.log("complete");
        image.src = data.file;
    } catch (error) { console.log(error); }
}
buttoncat.addEventListener("click", () => {
    console.log("clicked");
    fetchHandler();
});
*/


//-------------------------------------------------------------------------
//копия из https://developer.themoviedb.org/reference/intro/getting-started
//код:

/*
const options = { method: 'GET', headers: { accept: 'application/json' } };
fetch('https://api.themoviedb.org/3/authentication', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
*/


//-------------------------------------------------------------------------
//для локальных ссылок по туториалу https://www.youtube.com/watch?v=1nzH6WCEonQ&list=PLDyJYA6aTY1kJIwbYHzGOuvSMNTfqksmk&index=13
//пытаюсь вывести что угодно внутри heading2
//состояние 405 Method Not Allowed, на странице выводит undefined
//код:

/* 
fetch("http://127.0.0.1:5500/ini%20test/jscounter/simple.html", {
    method: "PUT",
    headers: { "Content-type": "text/html" },//"application-json" в видео
    body: { id: "heading2", innerHTML: "why" }//JSON.stringify({ name: "why" })
})
    .then(res => { if (res.ok) { console.log(res.ok) } else { console.log('error') } })
    .then(data => document.getElementById('heading2').innerHTML = data)
    .catch(error => { console.log(error) })//uncaught сам сделает
 */

function formAction(form) {
    if (form.password != form.pwcheck) { console.log("Пароль не совпадает"); return false; }
    window.location = "https://www.rudn.ru";
    return false;
}