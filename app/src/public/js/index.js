"use strict";

const createBtn = document.querySelector("#create");

// create버튼 클릭 시 createbox 나옴, 다시 클릭 하면 없어짐
createBtn.addEventListener("click", () => {
    const style = document.querySelector("#create-box").style;
    
    style.display === "block" ? style.display = "none" : style.display = "block";
});

//글목록 list클릭 시 발생하는 이벤트
const listArr = document.getElementsByClassName("list");
console.log(listArr);

let i;
for (i = 0; i <listArr.length; i++) {
    listArr[i].addEventListener("click", () => {
        alert("hello");
    })
}

