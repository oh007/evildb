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
        age: sciAge.valueAsNumber,
        henchmen: sciHench.valueAsNumber,
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
        namnH1.className = "sciH1";
        namnH1.innerText = `${scientist[i].name}`;
        div1.appendChild(namnH1);
        mainC.append(div1);
        namnH1.addEventListener("click", function (e) {
            e.preventDefault();
            console.log("Hello!");
            const name = this.innerHTML;
            for (let i = 0; i < scientist.length; i++) {
                if (name === scientist[i].name) {
                    const spanName = document.querySelector("span#name");
                    const spanAge = document.querySelector("span#age");
                    const spanHenchmen = document.querySelector("span#henchmen");
                    const spanDescription = document.querySelector("span#description");
                    spanName.innerHTML = scientist[i].name;
                    spanAge.innerHTML = String(scientist[i].age);
                    spanHenchmen.innerHTML = String(scientist[i].henchmen);
                    spanDescription.innerHTML = scientist[i].description;
                }
            }
        });
    }
};
