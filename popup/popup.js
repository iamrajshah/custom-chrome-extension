let openTabBtn = document.getElementById("openNewTab");
let textField = document.getElementById("urlInput");

openTabBtn.addEventListener("click", openTab);
function openTab() {
    window.open('http://' + textField.value);
}