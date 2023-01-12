type


/* Hämtar form + sub btn */
let addEvilForm = document.querySelector(".add-evil-form");
let inputAddButton= document.querySelector("#sub-btn");

let div1 = document.querySelector('#li-scientist');
let ul = document.createElement("ul");
    ul.className = "evilUl";

const ListOfScientist = {
    scientist: [
        {
            name: '',
            age:'',
            followers:'',
            description:'',
            
        },]
    }

function showEvil() {
    let li1=document.createElement("li");
        li1.className="evilList";
        li1.innerHTML = ``;
        ul.appendChild(li1);
}


//inputAddButton.addEventListener("click", function(e) {
            

    //let newName :string | undefined | null = document.querySelector("#first-name").value;
   
    let newName = document.querySelector("#first-name")as HTMLInputElement;
    newName.value
    console.log(newName);
    //let newFollowers:number= document.querySelector("#followers").value;
    //let newDescription:string = document.querySelector("#description").value;