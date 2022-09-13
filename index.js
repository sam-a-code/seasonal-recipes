

//TOGGLE BELOW





//CLICK EVENT 

const seasonsDiv = document.querySelector("#seasons")
const produceLists = document.getElementsByClassName(".produce-list")

console.log(seasonsDiv)





const produceItems = Array.from(document.getElementsByTagName("li"))
const formText = document.querySelector("search-form")

console.log(produceItems)
console.log(seasonsDiv)
console.log(produceLists)

function handleClick(e){
    formText.innerHTML = e.target.produceItems.value
    }


produceItems.forEach(listItem => {
    listItem.addEventListener('click', handleClick(e))
})



handleClick()


