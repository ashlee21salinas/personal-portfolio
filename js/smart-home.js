document.addEventListener("DOMContentLoaded", function() {
    // Array of image sources
    const images = [
        "/img/caardtableai.jpg",
        "/img/coppermiceai.jpg",
        "/img/bedroom2ai.jpg",
        "/img/bedroom3ai.jpg"
    ];

    let currentIndex = 0; // This keeps track of the current image

    // Function to update the image and the number
    function updateImageAndNumber() {
        const imageElement = document.getElementById("optionsimg");
        const middleElement = document.getElementById("middle");

        imageElement.src = images[currentIndex]; // Update the image source
        middleElement.textContent = `${currentIndex + 1}/4`; // Update the number (current/total)
    }

    // Event listeners for arrows
    document.getElementById("arrow-back").addEventListener("click", function() {
        if (currentIndex > 0) {
            currentIndex--; // Move to the previous image
        } else {
            currentIndex = images.length - 1; // Loop back to the last image
        }
        updateImageAndNumber(); // Update image and number
    });

    document.getElementById("arrow-forward").addEventListener("click", function() {
        if (currentIndex < images.length - 1) {
            currentIndex++; // Move to the next image
        } else {
            currentIndex = 0; // Loop back to the first image
        }
        updateImageAndNumber(); // Update image and number
    });

    // Initialize the display
    updateImageAndNumber();
});

