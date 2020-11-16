var sym = prompt("Введите любую цифру от 1 до 9 пжлст = ", '');
if (sym >= 10) {
    alert('Введите чило до 10')
    sym = prompt("Введите любую цифру от 1 до 9 пжлст = ", '');
}
if (sym < 10) {
    if (sym == 1)
        alert('!');
    if (sym == 2)
        alert('@');
    if (sym == 3)
        alert('#');
    if (sym == 4)
        alert('$');
    if (sym == 5)
        alert('%');
    if (sym == 6)
        alert('^');
    if (sym == 7)
        alert('&');
    if (sym == 8)
        alert('*');
    if (sym == 9)
        alert('(');
    alert('Это был Ваш символ');
}

console.log(sym);
