const buttonMail = document.querySelector("#mail > button");
buttonMail.addEventListener("click", function () {

    const mailList = ["ciro.cusati@gmail.com", "antonio.cusati@gmail.com"];

    const mailInput = document.querySelector("#mail > input");

    const mailValue = mailInput.value;

    for (let i = 0; i < mailList.length; i++) {

        if (mailValue === mailList[i]) {
            alert("You can enter");
            break;
        } else {
            alert("You cannot enter");
            break;
        }
    }

})