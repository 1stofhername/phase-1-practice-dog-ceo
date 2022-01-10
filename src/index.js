console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', init)

function init (){
fetchDogs();
fetchBreeds();

function fetchDogs(){
    fetch(imgUrl)
    .then((res) => {
        return res.json()
    })
     .then((data) => {
      data.message.forEach((src)=>{createElement(src)})
        function createElement(url){
            const imgDiv = document.getElementById('dog-image-container');
            const imgCreate = document.createElement('img');
            imgDiv.append(imgCreate);
            imgCreate.src= url

            const myNodelist = document.querySelectorAll("img");
            for (let i = 0; i < myNodelist.length; i++) {
            myNodelist[i].style.width = 300 +'px'; 
        }
    }
} )
}
function fetchBreeds(){
    fetch(breedUrl)
    .then((res)=>{
        return res.json()
    } )
    .then((data) => {
        const dogData = data.message
         for(const key in dogData){
             createElement(key);
             let listItems = document.querySelectorAll('li')
             //console.log(listItems)
            }
          function createElement(key){
              let listing = `${key}` + dogData[`${key}`]
              const divUl = document.getElementById('dog-breeds');
              const liCreate = document.createElement('li');
              divUl.append(liCreate);
              liCreate.innerText = listing;
              liCreate.className = 'breed-name';
            }
           
           const myNodelist = document.querySelectorAll("li");
           myNodelist.forEach((element)=>{
               element.addEventListener('click', ()=>element.style.color = "green")});
        

            
            const dogSelect=document.querySelector('#breed-dropdown')
            dogSelect.addEventListener("change", (evt) => {
                let filterLetter = evt.target.value
                let allBreeds = document.querySelectorAll("li.breed-name")
              
                allBreeds.forEach((li) => {
                  if (li.innerText.startsWith(filterLetter)) {
                    li.style.display = ""
                  } else {
                    li.style.display = "none"
                  }
                } )
              
              } )
        } )
    }  
}
