// document.getElementById("count-el").innerText = 5
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() { 
    count += 1
    countEl.innerText = count
}

function save() {
    let countStr = count + " - "
    saveEl.innerText += countStr
    countEl.innerText = 0
    count = 0
}

import imgUrl from "sheep.avif"
document.getElementById("sheep.avif").src = imgUrl
