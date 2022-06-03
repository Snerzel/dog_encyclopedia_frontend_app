const endPoint = "http://localhost:3000/api/v1/breeds"

document.addEventListener('DOMContentLoaded', () => {
    getBreeds()
})

function getBreeds() {
    fetch(endPoint)
    .then(response => response.json())
    .then(breeds => {
        breeds.data.forEach(breed => {
            const breedMarkup = `
                <div data-id=${breed.id}> 
                <img src=${breed.attributes.image_url} height="500" width="550">
                    <h3>${breed.attributes.name}</h3>
                    <p>${breed.attributes.group.name}</p>
                    <p>${breed.attributes.info}</p>
                    <button data-id=${breed.id}>edit</button>
                </div>
                <br></br>`;

                document.querySelector('#breed-container').innerHTML += breedMarkup


        })

    })
}