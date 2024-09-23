
function viewForm(){

}

function selectOption(value) {
    selectedValue = value; // armazena o valor do botão clicado
    console.log("Opção selecionada: " + selectedValue); // imprime no console para verificar
}

function enterQuest(){
    // puxa os value das opções do html
    let option1 = document.querySelector("#option1").value;
    let option2 = document.querySelector("#option2").value;
    let option3 = document.querySelector("#option3").value;
    let option4 = document.querySelector("#option4").value;

    var enter = document.querySelector("#submit");

    

    if (selectedValue !== '') {
        console.log("Você selecionou: " + selectedValue);
    } else {
        console.log("Nenhuma opção foi selecionada");
    }

    
}