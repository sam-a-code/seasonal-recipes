

//TOGGLE BELOW





//CLICK EVENT 

const seasonsDiv = document.querySelector("#seasons")
const produceLists = document.getElementsByClassName(".produce-list")
const produceItems = Array.from(document.getElementsByTagName("li"))
const formText = document.querySelector("#search-form-input")


function handleClick(e){
    formText.value = e.target.textContent
    }


produceItems.forEach(listItem => {
    listItem.addEventListener('click', (e) => 
    handleClick(e))
})




