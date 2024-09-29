function showImage() {
    const fruit = document.getElementById("fruit_select").value;
    const imgContainer = document.getElementById("image_container");

    // Clear previous image
    imgContainer.innerHTML = "";

    if (fruit) {
        // Create new image element
        const img = document.createElement("img");
        img.src = fruit + ".jpeg";  // Assuming image files are named as jelly.jpeg, banana.jpeg, etc.
        img.alt = "No image found";

        // Append image to the container
        imgContainer.appendChild(img);
    }
}

function closeImage(){
    const imgContainer = document.getElementById("image_container");
    imgContainer.innerHTML="";
}

const id_btn = document.getElementById("button");

// Corrected typo in event listener
id_btn.addEventListener("click", showImage);
const id_cbtn = document.getElementById("cbutton");
id_cbtn.addEventListener("click",closeImage);

