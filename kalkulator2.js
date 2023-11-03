let input = "";

function appendToDisplay(value) {
    input += value;
    document.getElementById("display").value = input;
}

function clearInput() {
    input = "";
    document.getElementById("display").value = input;
}

function clearLastEntry() {
    input = input.slice(0, -1);
    document.getElementById("display").value = input;
}

function calculateResult() {
    try {
        const result = eval(input);
        document.getElementById("display").value = result;
        input = result.toString();
    } catch (error) {
        document.getElementById("display").value = "Error";
        input = "";
    }
}
