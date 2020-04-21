const VALUE_UNSET = 0;
const VALUE_TEAM1 = 1;
const VALUE_TEAM2 = 2;

const COLOR_TEAM1 = "is-danger";
const COLOR_TEAM2 = "is-warning";

export function initGame(){
    let fieldData = [];
    let field = [];
    let row = [VALUE_UNSET,VALUE_UNSET,VALUE_UNSET,VALUE_UNSET,VALUE_UNSET,VALUE_UNSET,VALUE_UNSET];
    for(let x = 0; x < 6; x++){
        fieldData.push(row.slice());
        field.push(row.slice());
    }
    console.log(fieldData);
    return {
        gameField: field,
        data: fieldData
    };
}

export function selectColumn(event){
    const column = event.srcElement.id;
    console.log(column);
    insertToken(column);
}


function insertToken(column){
let field = window.fieldData;
}

function updateField(){
    
}