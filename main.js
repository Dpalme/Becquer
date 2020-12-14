// client-side js, loaded by index.html
// run by the browser each time the page is loaded

// define variables that reference elements on our page
const titleObj = document.getElementById("title");
const poemObj = document.getElementById("poem");

function new_poem() {
    poemObj.innerText = get_poem();
}

function get_poem() {
    var poem = "";
    const len = 3 + Math.random() * 7 << 0;
    for (var i = 0; i < len; i++) {
        poem += line() + "\n";
    }
    return poem
}

function line() {
    return lines[(Math.random() * lines.length) << 0];
}

window.onload = new_poem();

document.getElementById('poems').style.width = window.innerWidth;