

//TOGGLE BELOW





//CLICK EVENT 

const produceLists = document.getElementsByClassName("produce-list")
const produceItems = Array.from(document.produceLists.getElementsByTagName("li"))
const formText = document.querySelector("search-form")


function handleClick(e){
    formText.innerHTML = e.target.produceItems.value
    }


produceItems.forEach(listItem => {
    listItem.addEventListener('click', handleClick())
})



handleClick()


