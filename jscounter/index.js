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