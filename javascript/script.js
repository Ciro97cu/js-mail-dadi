const buttonMail = document.querySelector("#mail > button");
buttonMail.addEventListener("click", function () {

    const mailList = ["ciro@gmail.com", "antonio@gmail.com"];

    const mailInput = document.querySelector("#mail > input");

    const mailValue = mailInput.value;

    let message = "You cannot enter";
    for (let i = 0; i < mailList.length; i++) {

        if (mailValue === mailList[i]) {
            message = "You can enter";
            break;
        }

    }
    alert(message);

})

const numberHuman = Math.floor(Math.random() * 6) + 1;
const numberBot = Math.floor(Math.random() * 6) + 1;

// console.log(`human number is ${numberHuman}`);
const human = document.querySelector(".human-number h3");
human.append(numberHuman);

// console.log(`bot number is ${numberBot}`);
const bot = document.querySelector(".bot-number h3");
bot.append(numberBot);

let winner;
if (numberHuman > numberBot) {
    // console.log("Human wins");
    winner = "Human wins";
} else if (numberHuman === numberBot) {
    // console.log("It's a draw");
    winner = "It's a draw";
} else {
    // console.log("Bot wins");
    winner = "Bot wins";
}

const result = document.querySelector(".winner h3");
result.append(winner);