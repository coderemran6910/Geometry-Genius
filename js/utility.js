function getInputValuById(inputId) {
    const inputValueSTring = document.getElementById(inputId).value;
    const inputValue = parseFloat(inputValueSTring)
        return inputValue;  
}

function setElementValueByIdAndResult(elementId, result, resultDisplayId) {
    const element = document.getElementById(elementId);
    const resultDisplay = document.getElementById(resultDisplayId);

    // Check if the resultDisplay element is selected correctly
    if (!resultDisplay) {
        console.error(`Element with ID ${resultDisplayId} not found.`);
        return;
    }

    element.classList.add("resultTitle");

    const count = element.childElementCount;
    console.log('Current count:', count); // Log the current count

    const resultName = resultDisplay.innerText;

    const newElement = document.createElement("li");
    newElement.innerHTML = `
        <li> ${count + 1}. ${resultName} area is: ${result} </li>
    `;

    element.appendChild(newElement);
}

function showResultInBody(resultBodyId, resultTitle, result){
    const resultBodyElement = document.getElementById(resultBodyId);
    resultBodyElement.innerText = ` ${resultTitle}: ${result}`
}



