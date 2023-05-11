const check = document.getElementById("toggle");
const html = document.getElementById("html");
html.dataset.theme = localStorage.theme;
if (localStorage.theme == "dark") {
    check.checked = true;
}
check.addEventListener("change", ()=>{
    if (check.checked) {
        html.dataset.theme = "dark";
        localStorage.setItem("theme", "dark")
    } else {
        html.dataset.theme = "light";
        localStorage.setItem("theme", "light")
    }
})