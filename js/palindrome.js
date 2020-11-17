function isPallindrome() {
    let userStr = document.getElementById("palindromeInput").value;
    let result = document.getElementById("text_message");

    if ((userStr[0] == userStr[4]) && (userStr[1] == userStr[3])) {
        result.innerHTML = "Ты ввёл слово-паллиндром";
    }
    else {
        result.innerHTML = "Это не слово-паллиндром";
    }

}
