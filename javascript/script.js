// variable button #mail
const buttonMail = document.querySelector("#mail > button");
buttonMail.addEventListener("click", function () {

    // array mails
    const mailList = ["ciro@gmail.com", "antonio@gmail.com"];

    // variable mail input element
    const mailInput = document.querySelector("#mail > input");
    const mailValue = mailInput.value;

    // variable to display the feedback on screen
    let messageOnScreen = document.querySelector("#mail > p");
    // value of the feedback if mail doesn't match
    let message = "You cannot enter";
    messageOnScreen.innerHTML = message;

    for (let i = 0; i < mailList.length; i++) {

        if (mailValue === mailList[i]) {
            message = "You can enter";
            break;
        }

    }
    // value of the feedback if mail match
    messageOnScreen.innerHTML = message;

})

// variable button #dice
const buttonDice = document.querySelector("#dice > button");
buttonDice.addEventListener("click", function () {

    // variables to obtain random number
    const numberHuman = Math.floor(Math.random() * 6) + 1;
    const numberBot = Math.floor(Math.random() * 6) + 1;

    // console.log(`human number is ${numberHuman}`); --console log--
    // variable to show the human number on the screen
    const human = document.querySelector(".human-number p");
    human.innerHTML = numberHuman;

    // console.log(`bot number is ${numberBot}`); --console log--
    // variable to show the bot number on the screen
    const bot = document.querySelector(".bot-number p");
    bot.innerHTML = numberBot;

    let winner;
    if (numberHuman > numberBot) {
        // console.log("Human wins"); --console log--
        winner = "Human wins!!";
    } else if (numberHuman === numberBot) {
        // console.log("It's a draw"); --console log--
        winner = "It's a draw!!";
    } else {
        // console.log("Bot wins"); --console log--
        winner = "Bot wins!!";
    }

    // variable to show the winner on the screen
    const result = document.querySelector(".winner p");
    result.innerHTML = winner;

})

