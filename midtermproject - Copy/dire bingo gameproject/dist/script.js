class BingoCard {

    constructor() {
        this.matrix = [];
        this.bColumn = [];
        this.iColumn = [];
        this.nColumn = [];
        this.gColumn = [];
        this.oColumn = [];
    }

    generateMatrix() {
        for (let i = 0; i < 5; i++) {
            while (this.bColumn.length < 5) {
                let randomNum = Math.floor(Math.random() * (15 - 1 + 1)) + +1;
                if (this.bColumn.indexOf(randomNum) == -1) {
                    this.bColumn.push(randomNum);
                }
            }
        }
        for (let i = 0; i < 5; i++) {
            while (this.iColumn.length < 5) {
                let randomNum = Math.floor(Math.random() * (30 - 16 + 1)) + +16;
                if (this.iColumn.indexOf(randomNum) == -1) {
                    this.iColumn.push(randomNum);
                }
            }
        }
        for (let i = 0; i < 5; i++) {
            while (this.nColumn.length < 5) {
                let randomNum = Math.floor(Math.random() * (45 - 31 + 1)) + +31;
                if (this.nColumn.indexOf(randomNum) == -1) {
                    this.nColumn.push(randomNum);
                }
            }
        }
        for (let i = 0; i < 5; i++) {
            while (this.gColumn.length < 5) {
                let randomNum = Math.floor(Math.random() * (60 - 46 + 1)) + +46;
                if (this.gColumn.indexOf(randomNum) == -1) {
                    this.gColumn.push(randomNum);
                }
            }
        }
        for (let i = 0; i < 5; i++) {
            while (this.oColumn.length < 5) {
                let randomNum = Math.floor(Math.random() * (75 - 61 + 1)) + +61;
                if (this.oColumn.indexOf(randomNum) == -1) {
                    this.oColumn.push(randomNum);
                }
            }
        }

        return this.matrix.push(this.bColumn, this.iColumn, this.nColumn, this.gColumn, this.oColumn);
    }


    drawCard() {

        let tableHeadercell1 = "<td class = bingoHead> B </td>";
        let tableHeadercell2 = "<td class = bingoHead> I </td>";
        let tableHeadercell3 = "<td class = bingoHead> N </td>";
        let tableHeadercell4 = "<td class = bingoHead> G </td>";
        let tableHeadercell5 = "<td class = bingoHead> O </td>";
        let tableHeader = "<tr>" + tableHeadercell1 + tableHeadercell2 + tableHeadercell3 + tableHeadercell4 + tableHeadercell5 + "</tr>";

        let row1cell1 = "<td class = bingo onclick = changeColor(this)>" + this.matrix[0][0] + "</td>";
        let row1cell2 = "<td class = bingo onclick = changeColor(this)>" + this.matrix[1][0] + "</td>";
        let row1cell3 = "<td class = bingo onclick = changeColor(this)>" + this.matrix[2][0] + "</td>";
        let row1cell4 = "<td class = bingo onclick = changeColor(this)>" + this.matrix[3][0] + "</td>";
        let row1cell5 = "<td class = bingo onclick = changeColor(this)>" + this.matrix[4][0] + "</td>";
        let row1 = "<tr>" + row1cell1 + row1cell2 + row1cell3 + row1cell4 + row1cell5 + "</tr>";

        let row2cell1 = "<td class = bingo onclick = changeColor(this)>" + this.matrix[0][1] + "</td>";
        let row2cell2 = "<td class = bingo onclick = changeColor(this)>" + this.matrix[1][1] + "</td>";
        let row2cell3 = "<td class = bingo onclick = changeColor(this)>" + this.matrix[2][1] + "</td>";
        let row2cell4 = "<td class = bingo onclick = changeColor(this)>" + this.matrix[3][1] + "</td>";
        let row2cell5 = "<td class = bingo onclick = changeColor(this)>" + this.matrix[4][1] + "</td>";
        let row2 = "<tr>" + row2cell1 + row2cell2 + row2cell3 + row2cell4 + row2cell5 + "</tr>";

        let row3cell1 = "<td class = bingo onclick = changeColor(this)>" + this.matrix[0][2] + "</td>";
        let row3cell2 = "<td class = bingo onclick = changeColor(this)>" + this.matrix[1][2] + "</td>";
        let row3cell3 = "<td id = free> free </td>";
        let row3cell4 = "<td class = bingo onclick = changeColor(this)>" + this.matrix[3][2] + "</td>";
        let row3cell5 = "<td class = bingo onclick = changeColor(this)>" + this.matrix[4][2] + "</td>";
        let row3 = "<tr>" + row3cell1 + row3cell2 + row3cell3 + row3cell4 + row3cell5 + "</tr>";

        let row4cell1 = "<td class = bingo onclick = changeColor(this)>" + this.matrix[0][3] + "</td>";
        let row4cell2 = "<td class = bingo onclick = changeColor(this)>" + this.matrix[1][3] + "</td>";
        let row4cell3 = "<td class = bingo onclick = changeColor(this)>" + this.matrix[2][3] + "</td>";
        let row4cell4 = "<td class = bingo onclick = changeColor(this)>" + this.matrix[3][3] + "</td>";
        let row4cell5 = "<td class = bingo onclick = changeColor(this)>" + this.matrix[4][3] + "</td>";
        let row4 = "<tr>" + row4cell1 + row4cell2 + row4cell3 + row4cell4 + row4cell5 + "</tr>";

        let row5cell1 = "<td class = bingo onclick = changeColor(this)>" + this.matrix[0][4] + "</td>";
        let row5cell2 = "<td class = bingo onclick = changeColor(this)>" + this.matrix[1][4] + "</td>";
        let row5cell3 = "<td class = bingo onclick = changeColor(this)>" + this.matrix[2][4] + "</td>";
        let row5cell4 = "<td class = bingo onclick = changeColor(this)>" + this.matrix[3][4] + "</td>";
        let row5cell5 = "<td class = bingo onclick = changeColor(this)>" + this.matrix[4][4] + "</td>";
        let row5 = "<tr>" + row5cell1 + row5cell2 + row5cell3 + row5cell4 + row5cell5 + "</tr>";

        return "<div class = bingoCardBox> <table id = tableBingo>" + tableHeader + row1 + row2 + row3 + row4 + row5 + "</table></div>"
    }

    clearBingoCardsList() {
        this.matrix = [];
        this.bColumn = [];
        this.iColumn = [];
        this.nColumn = [];
        this.gColumn = [];
        this.oColumn = [];
    }

    removeAllBingoCards(card) {
        while (card.firstChild) {
            card.removeChild(card.firstChild);
        }
    }
}


class BallDraw {
    constructor() {
        this.ballDrawns = [];
        this.drawBallList = [];
    }

    shuffleBall(min, max) {
        while (this.drawBallList.length < max) {
            let randomNum = Math.floor(Math.random() * (max - min + 1)) + +min;
            if (this.drawBallList.indexOf(randomNum) == -1) {
                this.drawBallList.push(randomNum);
            }
        }
    }

    drawBall() {
        let display = document.getElementById("displayRollNumbers");
        let markDrawnBall = document.getElementsByTagName("td");
        let position = this.ballDrawns.length;
        let drawNum = 0;

        if (this.drawBallList == 0) {
            return display.innerHTML = "Out of balls";
        } else {
            this.ballDrawns.push(this.drawBallList[0]);
            this.drawBallList.splice((0), 1)
            drawNum = this.ballDrawns[position];
            markDrawnBall[drawNum - 1].style.backgroundColor = "Gold";
            return display.innerHTML = this.ballDrawns[position];

        }
    }

    markCard(mark) {
        mark.style.backgroundColor = (mark.style.backgroundColor == 'yellow') ? ('white') : ('yellow');
    }

    clearList() {
        this.ballDrawns = [];
        this.drawBallList = [];
    }
    removeHighlightBalls() {
        let numberList = document.getElementsByTagName("td");

        for (let i = 0; i < numberList.length; i++) {
            numberList[i].style.backgroundColor = 'white';
        }
    }
}


let playGame = false;

let ballDrawObj = new BallDraw();
let bingoCardObj = new BingoCard();

ballDrawObj.shuffleBall(1, 75);
bingoCardObj.generateMatrix();
ballDrawObj.markCard();

function createCard(noOfCards) {
    for (let index = 0; index < noOfCards; index++) {
        let drawCard = document.createElement("P");
        drawCard.setAttribute("id", "card");

        drawCard.innerHTML = bingoCardObj.drawCard();
        document.getElementById("bingoCardContainer").appendChild(drawCard);

        bingoCardObj.clearBingoCardsList();
        bingoCardObj.generateMatrix();
    }
}

function playBingo() {
    let noOfCards;

    do {
        noOfCards = prompt("How many cards do you want to add? ");

        if (noOfCards < 0 || noOfCards == 0 || (isNaN(noOfCards)))
            alert("Invalid Input");

    } while (noOfCards < 0 || noOfCards == 0 || (isNaN(noOfCards)));

    createCard(noOfCards);
    playGame = true;
    document.getElementById("playButton").disabled = true;

}

function addCard() {
    let noOfCards;

    if (playGame == false)
        alert("Please start the game before you add cards!");
    else {
        do {
            noOfCards = prompt("How many cards do you want to add? ");

            if (noOfCards < 0 || noOfCards == 0 || (isNaN(noOfCards)))
                alert("Invalid Input");

        } while (noOfCards < 0 || noOfCards == 0 || (isNaN(noOfCards)));
        createCard(noOfCards);
        document.getElementById("removeButton").disabled = false;
    }
}

function rollBall() {
    if (playGame == false)
        alert("Please start the game before you roll numbers!");
    else {
        ballDrawObj.drawBall();
        document.getElementById("playButton").disabled = true;
        document.getElementById("addButton").disabled = true;
    }
}

function removeCard() {
    let bingo = document.getElementsByClassName("bingoCardBox");

    if (playGame == false)
        alert("Please start the game before you remove cards!");
    else {
        if (bingo.length == 1)
            document.getElementById("removeButton").disabled = true;
        else if (bingo.length > 1)
            bingo[0].remove();

    }
}

function restartGame() {
    if (playGame == false)
        alert("Please start the game first!");
    else {
        ask("Are you sure you want to restart the game?", showOk, showCancel);
    }
}

function changeColor(highlight) {
    ballDrawObj.markCard(highlight);
}

function ask(question, yes, no) {
    if (confirm(question))
        yes()
    else
        no();
}

function showOk() {
    let container = document.getElementById("bingoCardContainer");
    playGame = false;

    bingoCardObj.removeAllBingoCards(container);
    bingoCardObj.clearBingoCardsList();
    ballDrawObj.clearList();
    ballDrawObj.removeHighlightBalls();
    ballDrawObj.shuffleBall(1, 75);
    bingoCardObj.generateMatrix();

    document.getElementById("playButton").disabled = false;
    document.getElementById("removeButton").disabled = false;
    document.getElementById("displayRollNumbers").innerHTML = "0";

    alert("The Game is successfully restarted");

}

function showCancel() {
    alert("You cancelled to restart a game");
}

function displayInstructions() {
    alert(" 'How to play?' \n \n Click 'Play' to add how many bingo card you want. \n You can click the 'Add' if you want to add bingo card again But, you can't add bingo card once you start the roll. \n \n Click 'Remove' if you want Remove a bingo card. \n (Remove always leave 1 card so you can still play) \n \n Click 'Restart' to reset the game.")
}