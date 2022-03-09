const buttonMail = document.querySelector("#mail > button");
buttonMail.addEventListener("click", function () {

    const mailList = ["ciro@gmail.com", "antonio@gmail.com"];

    const mailInput = document.querySelector("#mail > input");

    const mailValue = mailInput.value;

    let messageOnScreen = document.querySelector("#mail > p");
    let message = "You cannot enter";
    messageOnScreen.innerHTML = message;

    for (let i = 0; i < mailList.length; i++) {

        if (mailValue === mailList[i]) {
            message = "You can enter";
            break;
        }

    }
    messageOnScreen.innerHTML = message;

})

const buttonDice = document.querySelector("#dice > button");
buttonDice.addEventListener("click", function () {

    const numberHuman = Math.floor(Math.random() * 6) + 1;
    const numberBot = Math.floor(Math.random() * 6) + 1;

    // console.log(`human number is ${numberHuman}`);
    const human = document.querySelector(".human-number p");
    human.innerHTML = numberHuman;

    // console.log(`bot number is ${numberBot}`);
    const bot = document.querySelector(".bot-number p");
    bot.innerHTML = numberBot;

    let winner;
    if (numberHuman > numberBot) {
        // console.log("Human wins");
        winner = "Human wins!!";
    } else if (numberHuman === numberBot) {
        // console.log("It's a draw");
        winner = "It's a draw!!";
    } else {
        // console.log("Bot wins");
        winner = "Bot wins!!";
    }

    const result = document.querySelector(".winner p");
    result.innerHTML = winner;

})

