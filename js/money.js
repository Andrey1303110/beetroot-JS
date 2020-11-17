function exchangeMoney() {
    let userSum = document.getElementById("userMoney").value;
    let val;
    let rateUSD;
    let rateEUR;
    let rateRUB
    var result;

    rateUSD = 28;
    rateEUR = 33;
    rateRUB = .35;

    if (userSum <= 0) {
        alert(`Введите число от большее 0!`)
    }
    if (userSum > 0) {
        switch (true) {
            case document.getElementById("usd").checked:
                val = "USD";
                result = userSum * rateUSD;
                break;
            case document.getElementById("eur").checked:
                val = "EUR";
                result = userSum * rateEUR;
                break;
            case document.getElementById("rub").checked:
                val = "RUB";
                result = userSum * rateRUB;
                break;
        }
        result = `Ваша сумма ${result.toFixed(2)} грн`;
        document.getElementById("text_message").innerHTML = result;
    }
}
