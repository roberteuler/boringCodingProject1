import {initGame, selectColumn} from "./logic.js";


window.onload = () => {

    const buttons = document.getElementsByClassName("playButton");
    for(let button of buttons){
        button.addEventListener("click", selectColumn);
    }

    const game = initGame();
    let field = game.gameField.slice();
    let fieldData = game.data.slice(); 

    for(let x = 0; x < 6; x++){
        for(let y = 0; y < 5; y++){
            field[x][y] = document.getElementById(`${x}-${y}`);
        }
    }     
    console.log(field); 
    window.field = field;
    window.fieldData = fieldData;  
}



