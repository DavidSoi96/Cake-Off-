//write code here 

//See the first cake's details, including its **name, image, description, 

    const BASE_URL = "http://localhost:3000";
    const CAKE_URL = `${BASE_URL}/cakes/1`;
    const ALL_CAKES = `${BASE_URL}/cakes`;
    

     fetch(ALL_CAKES)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`404 error! status: ${response.status}`);
            }
            return response.json();
        })
        .then((cakes) => {
            console.log("==");
            console.log(cakes);

            const currentCake = cakes[0];
            displayCakeDetails(currentCake);

            const cakeList = document.querySelector("#cake-list");

            cakes.forEach((cake) => {
                const listItem = document.createElement("li");
                listItem.textContent = cake.name;
                listItem.addEventListener("click", () => {
                    displayCakeDetails(cake);
                });
                cakeList.appendChild(listItem);
            });
        })
        .catch((error) => {
            console.error("Failed to get cake details:", error);
        });

        const displayCakeDetails = (cake) => {
        const cakeName = document.getElementById("cake-name");
        const cakeImage = document.getElementById("cake-image");
        const cakeDescription = document.getElementById("cake-description");
        const reviewList = document.getElementById("review-list");

        cakeName.textContent = cake.name;
        cakeImage.src = cake.image_url;
        cakeImage.alt = cake.name;
        cakeDescription.textContent = cake.description;

        reviewList.innerHTML = "";
        cake.reviews.forEach((review) => {
            const reviewItem = document.createElement("li");
            reviewItem.textContent = review;
            reviewList.appendChild(reviewItem);
        });
    };


//New Submission
        document.getElementById("review-form").addEventListener("submit", (event) => {
            event.preventDefault();
            
            const reviewInput = document.getElementById("review");
            const review = reviewInput.value;
            const reviewList = document.getElementById("review-list");
            
            const reviewItem = document.createElement("li");
            reviewItem.textContent = review;
            reviewList.appendChild(reviewItem);
            
            reviewInput.value = "";
        });
