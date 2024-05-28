let counter = 0;

function increment() {
    counter++;
    console.log(counter);
    document.getElementById("counter_text").textContent = counter;
}

function decrement() {
    counter--;
    console.log(counter);
    document.getElementById("counter_text").textContent = counter;
}
//function documentReady(){присвоить increment к html}
//создать многостраничный сайт с вводом в форму
//картинки? js? создать to-do list на странице
//header в одном файле, добавлять на каждую страницу через js