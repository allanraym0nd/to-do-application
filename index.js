
// const inputText = document.getElementById("input_box")
// const addText = document.querySelector(".add-button")

// let inputData = "";

// function addTask() {
//     inputData = inputText.value 

//     const textWrapper = document.createElement('li')
//     textWrapper.innerHTML.addText(inputData);
// }

// addText.addEventListener('click', (event) => {
//     addTask()

// });

const inputBox = document.getElementById("input_box")
const listContainer = document.getElementById("list-container")

function addTask(){  
    if(inputBox.value === '') {
        alert("you must write something");
    } else {
        let li =document.createElement('li')
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
        inputBox.value="";
        let span = document.createElement('span')
        span.innerHTML = '\u00d7';
        li.appendChild(span);

}
    saveData();

}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask()






