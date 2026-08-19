const Buttons = document.querySelectorAll(".version-button")

console.log("Init!")

const Versions = {
    "1.12.2": "lapis.html",
    "1.8.9": "pvp.html",
    "1.5.2": "redstone.html",
};

Buttons.forEach(function(Button) {
    Button.textContent = Button.getAttribute("data-target")
    Button.addEventListener("click", function(){
        const ver = Button.getAttribute("data-target")
        if (!Versions[ver]) {
            return
        };
        window.location.href = `ver/${Versions[ver]}`
        
    })
}); 