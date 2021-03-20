const createBtn = document.querySelector("#create");

createBtn.addEventListener("click", () => {
    const style = document.querySelector("#create-box").style;
    
    style.display === "block" ? style.display = "none" : style.display = "block";
});

