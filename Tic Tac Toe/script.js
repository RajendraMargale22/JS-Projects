let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-game");
let newBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

let turn = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach( (box) => {
    box.addEventListener("click", () => {
        if(turn){
            box.innerText = "o";
            turn = false;
        }
        else{
            box.innerText = "x"
            turn = true;
        }
        box.disabled = true;

        checkWinner();
    })
})

const resetGame = () =>{
    turn = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations ! The Winner is ${winner}.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[o]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val ){
                showWinner(pos1Val);
            }
        }
    }
}

newBtn.addEventListener("click", resetGame)
resetBtn.addEventListener("click", resetGame)
