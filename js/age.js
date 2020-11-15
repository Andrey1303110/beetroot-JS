var age = prompt("Введите ваш возраст пжлст = ", '');
if (age >= Infinity) {
    alert('Сам то понял что хотел?');
}
if (age >= 120 && age < Infinity) {
    alert('Фигню якусь написав');
}
if (age >= 60 && age < 120) {
    alert('Ты таки старый');
}
if (age >= 18 && age < 60) {
    alert('Ты взрослый');
}
if (age >= 12 && age < 18) {
    alert('Ты подросток');
}
if (age > 2 && age < 12) {
    alert('Ты почти подросток');
}
if (age <= 2) {
    alert('Ты дитё ещё');
}

console.log(age);