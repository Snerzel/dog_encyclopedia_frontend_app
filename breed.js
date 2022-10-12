class Breed {

    constructor(breed, breedAttributes) {
        this.id = breed.id
        this.name = breedAttributes.name
        this.image_url = breedAttributes.image_url
        this.info = breedAttributes.info
        this.group = breedAttributes.group
        this.likes = breedAttributes.likes
        Breed.all.push(this)
    }



renderBreeds() {
    return `
                <div data-id=${this.id}> 
                    <img src=${this.image_url} height="400" width="600">
                    <h3>${this.name}</h3>
                    <p>${this.group.name}</p>
                    <p>${this.info}</p>
                    <p>Likes: ${this.likes}</p>
                    <button class="like-btn">Like</button>
                    <button class="delete-btn">Delete</button>
                </div>
                <br></br>`;

               
}



}
Breed.all = [];