//стр index
//первые кнопки для изменения цифры
let counter = 0;
//function documentReady(){}//присвоить increment к html
document.addEventListener("DOMContentLoaded", function () {
    const buttonIncrement = document.querySelector("#button-incr")
    buttonIncrement.addEventListener("click", function () {
        counter++;
        console.log(counter);
        document.getElementById("counter_text").textContent = counter;
        console.log(document.getElementById("counter_text").style.fontSize);
        document.getElementById("counter_text").style.fontSize = Number(document.getElementById("counter_text").style.fontSize.slice(0, 2)) + 1 + "px";
        //изменить размер шрифта только одной цифры
    })

    const buttonDecrement = document.querySelector("#button-decr")
    buttonDecrement.addEventListener("click", function () {
        counter--;
        console.log(counter);
        document.getElementById("counter_text").textContent = counter;
        console.log(document.getElementById("counter_text").style.fontSize);
        document.getElementById("counter_text").style.fontSize = Number(document.getElementById("counter_text").style.fontSize.slice(0, 2)) - 1 + "px";
        //хотелось бы менять шрифт всей страницы
    })

    //дата и время
    const buttonDate = document.querySelector("#button-showdate")
    buttonDate.addEventListener("click", function () {
        console.log(Date());
        document.getElementById("button-showdate").innerHTML = new Date();
    })

    //будущие функции

    function changesize() {
        //<button type="button" onclick="document.getElementById('*').style.fontSize='35px'">incr</button>
    }

    function addtolist() {
        //добавляет новые строки к выбору по галочкам
    }

})
//создать многостраничный сайт с вводом в форму
//картинки? js? создать to-do list на странице

//header в одном файле, добавлять на каждую страницу через js
//stackoverflow дал это но оно вроде для копии хедера с онлайн сайтов?
//const resp = await fetch(document.location.href, {method: 'HEAD'});
//const headers = Object.fromEntries(resp.headers.entries());