function displayFlex(className, flexStyles) {
    const navigation = document.querySelectorAll(className);
    navigation.forEach(function(ul) {
        ul.setAttribute("style", flexStyles)
    });
}
function createNavigationEl(className, href, text) {
    const navigation = document.querySelectorAll(".navigation");
    navigation.forEach(function(ul) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        const span = document.createElement("span");
        a.setAttribute("class", className);
        a.setAttribute("href", href);
        span.innerText = text;
        a.appendChild(span);
        li.appendChild(a);
        console.log(navigation);
        ul.appendChild(li);
    });
}

createNavigationEl("fas fa-home", "index.html", "Introduction");
createNavigationEl("fas fa-users", "about.html", "About Us");
createNavigationEl("fas fa-plus", "#create", "Create Account");
createNavigationEl("fas fa-laptop", "#login", "Login");
displayFlex(
    ".navigation",
    "display: flex; justify-content: space-evenly; padding: 20px; border: 2px #881600 solid; background-color: #E3E36A;"
);
