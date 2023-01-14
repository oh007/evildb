
const addBtn = document.querySelector('.save-btn') as HTMLButtonElement;
let mainC= document.querySelector('.scientist-list') as HTMLElement;
type Scientist = {
    name: string,
    age: number | string,
    henchmen: number | string,
    description: string,
}

let scientist : Scientist[] = []

const sciDiv= document.createElement("div");

addBtn.addEventListener("click", function(e){
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
        age: sciAge.value,
        henchmen: sciHench.value,
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

        namnH1.innerText = `${scientist[i].name}`;
        div1.appendChild(namnH1);
        mainC.append(div1);

        
        namnH1.addEventListener("click", function(e){
            e.preventDefault();
        
            console.log("Hello!");
            let ul = document.querySelector('.sci-ul') as HTMLElement;
            const name = this.innerHTML;
            for (let i = 0; i < scientist.length; i++) {
            if (name === scientist[i].name) {
               
        
                
                let liHe = scientist[i].henchmen; 
                let liDes = scientist[i].description;
                let li = document.createElement('div') as HTMLElement;
                let liName = document.createElement('h1') as HTMLHeadingElement;
                let liAge = document.createElement('h1') as HTMLHeadingElement;
                
                liAge = scientist[i].age;
                liName.innerHTML = scientist[i].name;
                
                ul.appendChild(li);
                 }
        }    })
        

        
    }

}

