
const addBtn = document.querySelector('.save-btn') as HTMLButtonElement;
let mainC= document.querySelector('.scientist-list') as HTMLElement;
type Scientist = {
    name: string,
    age: number,
    henchmen: number,
    description: string,
}

let scientist : Scientist[] = []

const sciDiv= document.createElement("div");

addBtn.addEventListener("click", function(e):void{
    e.preventDefault();
    let sciName = document.querySelector('#fname') as HTMLInputElement;
    let sciAge = document.querySelector('#age') as HTMLInputElement;
    let sciHench = document.querySelector('#henchmen') as HTMLInputElement;
    let sciDesc = document.querySelector('#description') as HTMLInputElement;
    sciAge.append(sciDiv);
    sciName.append(sciDiv);
    sciHench.append(sciDiv);
    sciDesc.append(sciDiv);

    let arr:Scientist = {
        name: sciName.value,
        age: sciAge.valueAsNumber,
        henchmen: sciHench.valueAsNumber,
        description: sciDesc.value,
    }
  
    scientist.push(arr);
    sciName.value="";
    sciAge.value="";
    sciHench.value="";
    sciDesc.value= "";
    mainC.innerHTML="";
    printcard();

    
});




let printcard = function() {
    let length =  scientist.length;
    for(let i = 0; i < length; i++) {
        let div1 = document.createElement('div') as HTMLDivElement;
        let namnH1 = document.createElement('h1') as HTMLHeadingElement;
        namnH1.className="sciH1"

        namnH1.innerText = `${scientist[i].name}`;
        div1.appendChild(namnH1);
        mainC.append(div1);

        
        namnH1.addEventListener("click", function(e){
            e.preventDefault();
        
            console.log("Hello!");
            const name = this.innerHTML;
            for (let i = 0; i < scientist.length; i++) {
            if (name === scientist[i].name) {
                const spanName = document.querySelector("span#name") as HTMLElement;
                const spanAge = document.querySelector("span#age") as HTMLElement;
                const spanHenchmen = document.querySelector("span#henchmen") as HTMLElement;
                const spanDescription = document.querySelector("span#description") as HTMLElement;
    
                spanName.innerHTML = scientist[i].name;
                spanAge.innerHTML = String(scientist[i].age);
                spanHenchmen.innerHTML = String(scientist[i].henchmen);
                spanDescription.innerHTML = scientist[i].description;
                 }
        }    })
        

        
    }

}

