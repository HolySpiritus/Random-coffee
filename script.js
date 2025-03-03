const container = document.getElementById("container");


const button = document.createElement("button");
button.innerText = "show photo";
container.appendChild(button);

const image = document.createElement("img")


button.addEventListener("click",  async function geData(){
    console.log("U clicked");
    const result = await fetch ("https://coffee.alexflipnote.dev/random.json")
    console.log(result);

    const data = await result.json();
    console.log(data);

    image.src=data.file;
    image.alt="coffee photo";

    container.appendChild(image);
});
