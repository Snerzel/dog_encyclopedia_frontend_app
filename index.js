const endPoint = "http://localhost:3000/api/v1/breeds"

document.addEventListener('DOMContentLoaded', () => {
    console.log("a")
    getBreeds()
    console.log("b")
    const addBreedForm = document.querySelector("#add-breed-form")

    addBreedForm.addEventListener("submit", (e) => addBreedHandler(e))
})

function getBreeds() {
    console.log("c")
    fetch(endPoint)
    .then(response => response.json())
    .then(breeds => {
        console.log(breeds.data)
        breeds.data.forEach(breed => {
            console.log("d")
            
            let newBreed = new Breed(breed, breed.attributes)
            
           
            document.querySelector('#breed-container').innerHTML += newBreed.renderBreeds();
            
                

        })
    
    })
    console.log("e")
}

function addBreedHandler(e) {
    e.preventDefault()
  const nameInput = document.querySelector('#input-name').value
  const imageInput = document.querySelector('#input-image').value
  const infoInput = document.querySelector('#input-info').value
  const groupId = parseInt(document.querySelector('#groups').value)
  
  postBreed(nameInput, imageInput, infoInput, groupId)
}




function postBreed(name, image_url, info, group_id, likes) {
    console.log(name, image_url, info, group_id, likes)
    fetch(endPoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            image_url: image_url,
            info: info,
            group_id: group_id,
            likes: 0
        })
    })
    .then(response => response.json())
    .then(breed => {
         const breedData = breed.data
         let newBreed = new Breed(breedData, breedData.attributes)
         document.querySelector('#breed-container').innerHTML += newBreed.renderBreeds();

    })
}