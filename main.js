const output = document.getElementById("screen");
const input = document.querySelectorAll("button");
let display = "";
let ans = "";
input.forEach(button => {(
    button.addEventListener('click', (event) => {
        const value = button.value;
        const buttontext = button.textContent;
        if (value == "AC") {
            display = "";
            ans = "";
            output.innerText = ans;
        } else if (value == "DE") {
            display = display.slice(0, -1);
            ans = ans.slice(0, -1);
            output.innerText = ans;
        } else if (value == "=") {
            try {
                display = String(Math.trunc(eval(display) * 1000) / 1000);
                ans = display;
                output.innerText = display;
            } catch {
                display = "0";
                output.innerText = "Error";
            }
        }
        else {
            display += value;
            ans += buttontext;
            output.innerText = ans;
        }
    }))
})