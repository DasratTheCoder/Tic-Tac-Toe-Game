let btn = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-button");
let new_btn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetGame = () => {
    turnO = true;
    enableboxes();
    msgContainer.classList.add("hide"); // fixed: removed dot (.)
};

btn.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerHTML = "X";
            turnO = false;
        } else {
            box.innerHTML = "O";
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const showWinner = (winner) => {
    msg.innerHTML = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
};

const checkwinner = () => {
    for (let pattern of winpatterns) {
        let position1 = btn[pattern[0]].innerText;
        let position2 = btn[pattern[1]].innerText;
        let position3 = btn[pattern[2]].innerText;

        if (position1 !== "" && position2 !== "" && position3 !== "") {
            if (position1 === position2 && position2 === position3) {
                showWinner(position1);
            }
        }
    }
};

const disableboxes = () => {
    for (let box of btn) {
        box.disabled = true;
    }
};

const enableboxes = () => {
    for (let box of btn) {
        box.disabled = false;
        box.innerText = "";
    }
};

// Event listeners
reset.addEventListener("click", resetGame);
new_btn.addEventListener("click", resetGame);
