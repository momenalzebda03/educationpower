const clickableDiv = document.getElementById("clickableDiv");
const inputField = document.getElementById("searchInput");
const inputDisplay = document.getElementById("inputDisplay");
const selectContainer = document.getElementById("selectContainer");
const divButtonEnd = document.getElementById("divButtonEnd");
clickableDiv.addEventListener("click", (event) => {
    event.target !== selectContainer &&
    event.target !== selectContainer.querySelector("select")
        ? inputField.focus()
        : "";
});
inputField.addEventListener("input", () => {
    if (inputField.value.length > 0) {
        inputDisplay.style.display = "none";
        divButtonEnd.style.justifyContent = "end";
    } else {
        inputDisplay.style.display = "flex";
        divButtonEnd.style.justifyContent = "space-between";
    }
});

AOS.init();