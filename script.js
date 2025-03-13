/*722190*/
/*VjbZAYykdpmjww-UcahNQeOG90ToAJBLEPztUEKhHmw*/
/*iiSvmHEtU3OkCb-KYaKRb38SV2NDx6snOO-Xn1sR_KM*/
// /*https://api.unsplash.com/photos/random/?client_id=YOUR_ACCESS_KEY*/


// const button = document.createElement("button");
// button.innerText = "show photo";
// container-search.appendChild(button);

// const image = document.createElement("img")

const container = document.getElementById("container");
const searchInput = document.getElementById("search");
const searchButton = document.getElementById("searchButton");

const ACCES_KEY = "VjbZAYykdpmjww-UcahNQeOG90ToAJBLEPztUEKhHmw";

// const api = async (query = "") => {
//     try {
//         const response = await fetch(`https://api.unsplash.com/photos/random/?client_id=${ACCES_KEY}&count=10&query=${query}`);
//         const data = await response.json();
//         container.innerHTML = ""; // Clear previous images
//         data.forEach((e) => {
//             const img = document.createElement("img");
//             img.src = e.urls.small;
//             container.appendChild(img);
//         });
//     } catch (er) {
//         console.log(er);
//         container.innerHTML = "No photos found or an error occurred.";
//     }
// };

searchButton.addEventListener("click", async () => {
    const query = searchInput.value;
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random/?client_id=${ACCES_KEY}&count=10&query=${query}`);
        const data = await response.json();
        container.innerHTML = ""; // Clear previous images
        data.forEach((e) => {
            const img = document.createElement("img");
            img.src = e.urls.small;
            container.appendChild(img);
        });
    } catch (er) {
        console.log(er);
        container.innerHTML = "No photos found or an error occurred.";
    }
});

// Fetch random photos on page load
api();
