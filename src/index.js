//console.log('%c HI', 'color: firebrick')

window.onload = () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  
    fetch(imgUrl)
      .then((response) => response.json())
      .then((data) => {
        const imageContainer = document.getElementById("dog-image-container");
        data.message.forEach((image) => {
          const imgElement = document.createElement("img");
          imgElement.src = image;
          imageContainer.appendChild(imgElement);
        });
      })
      .catch((error) => console.error(error));
  
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
  
    fetch(breedUrl)
      .then((response) => response.json())
      .then((data) => {
        const breedList = document.getElementById("dog-breeds");
        data.message.forEach((breed) => {
          const liElement = document.createElement("li");
          liElement.textContent = breed;
          breedList.appendChild(liElement);
        });
  
        const breedDropdown = document.getElementById("breed-dropdown");
  
        breedDropdown.addEventListener("change", () => {
          const selectedLetter = breedDropdown.value;
          breedList.childNodes.forEach((node) => {
            if (node.textContent.startsWith(selectedLetter)) {
              node.style.display = "list-item";
            } else {
              node.style.display = "none";
            }
          });
        });
  
        breedList.addEventListener("click", (event) => {
          if (event.target.tagName === "LI") {
            event.target.style.color = "red";
          }
        });
      })
      .catch((error) => console.error(error));
  };