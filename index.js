/*let myLead = [];
const inputEl = document.getElementById("input-el");
const saveBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const leadFromLocalStorage = JSON.parse(localStorage.getItem("myLead"))
const tabBtn = document.getElementById("tab-btn");



if (leadFromLocalStorage) {
    myLead = leadFromLocalStorage;
    renderList(myLead)
}


tabBtn.addEventListener("click", function () {
     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
         myLead.push(tabs[0].url)
         localStorage.setItem("myLead", JSON.stringify(myLead) )
         renderList(myLead)
     })
})


function renderList(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        //listItems += "<li><a href='"+ myLead[i] + "' target=_blank> " + myLead[i] + "</a></li>";
        listItems += `<li>
        <a href='${leads[i]}' target='_blank'>
        ${leads[i]}
        </a>
        </li>`;
    
    }
    
    ulEl.innerHTML = listItems
    }
    

deleteBtn.addEventListener("dblclick", function () {
    console.log("double clicked");
    localStorage.clear();
    myLead = [];
    renderList(myLead);
})

saveBtn.addEventListener("click", function() {

myLead.push(inputEl.value);
inputEl.value = "";
localStorage.setItem("myLead", JSON.stringify(myLead));



renderList(myLead);
console.log( localStorage.getItem("myLead") );

})

*/

const nums =[1, 0, 1, 1, 0, 0, 1];

for (let i = 0; i < nums.length; i++){
    if (nums[i] === 0){
        nums[i] = nums[i] + 1;

    }
    
}
console.log(nums);