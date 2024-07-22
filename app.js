document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    let currentInput = "";
    let operator = "";
    let firstOperand = "";
    
    document.querySelectorAll(".button").forEach(button => {
        button.addEventListener("click", function () {
            const value = this.dataset.value;
            const op = this.dataset.operator;

            if (value) {
                currentInput += value;
                display.value = currentInput;
            }

            if (op) {
                if (firstOperand && currentInput && operator) {
                    firstOperand = calculate(firstOperand, currentInput, operator);
                    display.value = firstOperand;
                    currentInput = "";
                } else {
                    firstOperand = currentInput;
                    currentInput = "";
                }
                operator = op;
            }

            if (this.classList.contains("equals")) {
                if (firstOperand && currentInput && operator) {
                    display.value = calculate(firstOperand, currentInput, operator);
                    currentInput = "";
                    operator = "";
                    firstOperand = "";
                }
            }
        });
    });

    document.getElementById("clear-button").addEventListener("click", function () {
        display.value = "";
        currentInput = "";
        operator = "";
        firstOperand = "";
    });

    function calculate(first, second, operator) {
        first = parseFloat(first);
        second = parseFloat(second);

        switch (operator) {
            case "+":
                return first + second;
            case "-":
                return first - second;
            case "*":
                return first * second;
            case "/":
                return first / second;
            default:
                return "Error";
        }
    }
});
