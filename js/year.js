function messageYear() {
    let myYear = document.getElementById("yearNumber").value;
    let result = document.getElementById("text_message");
    if ((myYear % 4 === 0) && (myYear % 100 !== 0) || (myYear % 400 === 0)) {
        result.innerHTML = "Это високосный год";
    }
    else {
        result.innerHTML = "Это не високосный год";
    }
}

