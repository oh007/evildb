"use strict";
const addBtn = document.querySelector('.save-btn');
let mainC = document.querySelector('.scientist-list');
let scientist = [];
const sciDiv = document.createElement("div");
addBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let sciName = document.querySelector('#fname');
    let sciAge = document.querySelector('#age');
    let sciHench = document.querySelector('#henchmen');
    let sciDesc = document.querySelector('#description');
    sciAge.append(sciDiv);
    sciName.append(sciDiv);
    sciHench.append(sciDiv);
    sciDesc.append(sciDiv);
    let arr = {
        name: sciName.value,
        age: sciAge.value,
        henchmen: sciHench.value,
        description: sciDesc.value,
    };
    scientist.push(arr);
    sciName.value = "";
    sciAge.value = "";
    sciHench.value = "";
    sciDesc.value = "";
    mainC.innerHTML = "";
    printcard();
});
let printcard = function () {
    let length = scientist.length;
    for (let i = 0; i < length; i++) {
        let div1 = document.createElement('div');
        let namnH1 = document.createElement('h1');
        namnH1.innerText = `${scientist[i].name}`;
        div1.appendChild(namnH1);
        mainC.append(div1);
    }
};
