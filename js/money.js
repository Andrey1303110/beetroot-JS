function exchangeMoney() {
    let userSum = document.getElementById("userMoney").value;

    let rateUSD = 28;
    let rateEUR = 33;
    let rateRUB = .35;

    if (userSum <= 0) {
        alert(`Введите число от большее 0!`)
    }
    else if (userSum > 0) {
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
