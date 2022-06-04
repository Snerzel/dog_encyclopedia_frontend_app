const endPoint = "http://localhost:3000/api/v1/breeds"

document.addEventListener('DOMContentLoaded', () => {
    getBreeds()

    const addBreedForm = document.querySelector("#add-breed-form")

    addBreedForm.addEventListener("submit", (e) => addBreedHandler(e))
})

function getBreeds() {
    fetch(endPoint)
    .then(response => response.json())
    .then(breeds => {
        breeds.data.forEach(breed => {
            renderBreeds(breed)
                

        })

    })
}

function addBreedHandler(e) {
    e.preventDefault()
  const nameInput = document.querySelector('#input-name').value
  const imageInput = document.querySelector('#input-image').value
  const infoInput = document.querySelector('#input-info').value
  const groupId = parseInt(document.querySelector('#groups').value)
  
  postBreed(nameInput, imageInput, infoInput, groupId)
}

function renderBreeds(breed) {
    const breedMarkup = `
                <div data-id=${breed.id}> 
                <img src=${breed.attributes.image_url} height="400" width="600">
                    <h3>${breed.attributes.name}</h3>
                    <p>${breed.attributes.group.name}</p>
                    <p>${breed.attributes.info}</p>
                    <button data-id=${breed.id}>edit</button>
                </div>
                <br></br>`;

                document.querySelector('#breed-container').innerHTML += breedMarkup
}

function postBreed(name, image_url, info, group_id) {
    console.log(name, image_url, info, group_id)
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
            group_id: group_id
        })
    })
    .then(response => response.json())
    .then(breed => {
         const breedData = breed.data
        renderBreeds(breedData)

    })
}