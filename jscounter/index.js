//первые кнопки для изменения цифры

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

//будущие функции

function changesize() {
    //изменяет шрифт всей страницы по кнопкам incr и decr
    //<button type="button" onclick="document.getElementById('demo').style.fontSize='35px'">incr</button>
}

function addtolist() {
    //добавляет новые строки к выбору по галочкам
}

//дата и время

function getdate() {
    console.log(Date());
    document.getElementById("showdate").innerHTML = new Date();
}

//function documentReady(){}//присвоить increment к html?
//создать многостраничный сайт с вводом в форму
//картинки? js? создать to-do list на странице
//header в одном файле, добавлять на каждую страницу через js

//моя работа заключается в верстке сайта инженерки поэтому мне ориентироваться надо на ...